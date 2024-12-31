import FrameSDK from "@farcaster/frame-sdk";
import { ChainNotConfiguredError, createConnector, } from "@wagmi/core";
import { SwitchChainError, getAddress, numberToHex } from "viem";
farcasterFrame.type = "farcasterFrame";
let accountsChanged;
let chainChanged;
let disconnect;
export function farcasterFrame() {
    let connected = false;
    return createConnector((config) => ({
        id: "farcaster",
        name: "Farcaster Frame",
        rdns: "xyz.farcaster",
        icon: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/055c25d6-7fe7-4a49-abf9-49772021cf00/original",
        type: farcasterFrame.type,
        async setup() {
            this.connect({ chainId: config.chains[0].id });
        },
        async connect({ chainId } = {}) {
            const provider = await this.getProvider();
            const accounts = [];
            if (!accountsChanged) {
                accountsChanged = this.onAccountsChanged.bind(this);
                // @ts-expect-error - provider type is stricter
                provider.on("accountsChanged", accountsChanged);
            }
            if (!chainChanged) {
                chainChanged = this.onChainChanged.bind(this);
                provider.on("chainChanged", chainChanged);
            }
            if (!disconnect) {
                disconnect = this.onDisconnect.bind(this);
                provider.on("disconnect", disconnect);
            }
            const currentChainId = chainId || 1;
            connected = false;
            return {
                accounts: accounts.map((x) => getAddress(x)),
                chainId: currentChainId,
            };
        },
        async disconnect() {
            const provider = await this.getProvider();
            if (accountsChanged) {
                // @ts-expect-error - provider type is stricter
                provider.removeListener("accountsChanged", accountsChanged);
                accountsChanged = undefined;
            }
            if (chainChanged) {
                provider.removeListener("chainChanged", chainChanged);
                chainChanged = undefined;
            }
            if (disconnect) {
                provider.removeListener("disconnect", disconnect);
                disconnect = undefined;
            }
            connected = false;
        },
        async getAccounts() {
            if (!connected) {
                throw new Error("Not connected");
            }
            return [];
        },
        async getChainId() {
            return 1;
        },
        async isAuthorized() {
            if (!connected) {
                return false;
            }
            const accounts = await this.getAccounts();
            return !!accounts.length;
        },
        async switchChain({ chainId }) {
            const provider = await this.getProvider();
            const chain = config.chains.find((x) => x.id === chainId);
            if (!chain) {
                throw new SwitchChainError(new ChainNotConfiguredError());
            }
            await provider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: numberToHex(chainId) }],
            });
            // providers should start emitting these events - remove when hosts have upgraded
            //
            // explicitly emit this event as a workaround for ethereum provider not
            // emitting events, can remove once events are flowing
            config.emitter.emit("change", { chainId });
            return chain;
        },
        onAccountsChanged(accounts) {
            if (accounts.length === 0) {
                this.onDisconnect();
            }
            else {
                config.emitter.emit("change", {
                    accounts: accounts.map((x) => getAddress(x)),
                });
            }
        },
        onChainChanged(chain) {
            const chainId = Number(chain);
            config.emitter.emit("change", { chainId });
        },
        async onDisconnect() {
            config.emitter.emit("disconnect");
            connected = false;
        },
        async getProvider() {
            return FrameSDK.wallet.ethProvider;
        },
    }));
}
