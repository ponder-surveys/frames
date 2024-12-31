// src/connector.ts
import FrameSDK from "@farcaster/frame-sdk";
import {
  ChainNotConfiguredError,
  createConnector
} from "@wagmi/core";
import { SwitchChainError, getAddress, numberToHex } from "viem";
farcasterFrame.type = "farcasterFrame";
var accountsChanged;
var chainChanged;
var disconnect;
function farcasterFrame() {
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
        chainId: currentChainId
      };
    },
    async disconnect() {
      const provider = await this.getProvider();
      if (accountsChanged) {
        provider.removeListener("accountsChanged", accountsChanged);
        accountsChanged = void 0;
      }
      if (chainChanged) {
        provider.removeListener("chainChanged", chainChanged);
        chainChanged = void 0;
      }
      if (disconnect) {
        provider.removeListener("disconnect", disconnect);
        disconnect = void 0;
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
        params: [{ chainId: numberToHex(chainId) }]
      });
      config.emitter.emit("change", { chainId });
      return chain;
    },
    onAccountsChanged(accounts) {
      if (accounts.length === 0) {
        this.onDisconnect();
      } else {
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
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
    }
  }));
}

// src/index.ts
var index_default = farcasterFrame;
export {
  index_default as default,
  farcasterFrame
};
