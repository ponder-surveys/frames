export declare function farcasterFrame(): import("@wagmi/core").CreateConnectorFn<{
    request: import("ox/Provider").RequestFn<{
        Request: {
            method: "eth_accounts";
            params?: undefined;
        };
        ReturnType: readonly import("ox/Address").Address[];
    } | {
        Request: {
            method: "eth_blobBaseFee";
            params?: undefined;
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_blockNumber";
            params?: undefined;
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_call";
            params: [transaction: import("ox/TransactionRequest").Rpc] | [transaction: import("ox/TransactionRequest").Rpc, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier] | [transaction: import("ox/TransactionRequest").Rpc, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier, stateOverride: unknown];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_chainId";
            params?: undefined;
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_coinbase";
            params?: undefined;
        };
        ReturnType: import("ox/Address").Address;
    } | {
        Request: {
            method: "eth_estimateGas";
            params: [transaction: import("ox/TransactionRequest").Rpc] | [transaction: import("ox/TransactionRequest").Rpc, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier] | [transaction: import("ox/TransactionRequest").Rpc, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier, stateOverride: unknown];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_feeHistory";
            params: [blockCount: import("ox/Hex").Hex, newestBlock: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag, rewardPercentiles: number[] | undefined];
        };
        ReturnType: import("ox/Fee").FeeHistoryRpc;
    } | {
        Request: {
            method: "eth_gasPrice";
            params?: undefined;
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_getBalance";
            params: [address: import("ox/Address").Address, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_getBlockByHash";
            params: [hash: import("ox/Hex").Hex, includeTransactionObjects: boolean];
        };
        ReturnType: import("ox/Block").Rpc | null;
    } | {
        Request: {
            method: "eth_getBlockByNumber";
            params: [block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag, includeTransactionObjects: boolean];
        };
        ReturnType: import("ox/Block").Rpc | null;
    } | {
        Request: {
            method: "eth_getBlockTransactionCountByHash";
            params: [hash: import("ox/Hex").Hex];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_getBlockTransactionCountByNumber";
            params: [block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_getCode";
            params: [address: import("ox/Address").Address, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_getFilterChanges";
            params: [filterId: import("ox/Hex").Hex];
        };
        ReturnType: readonly import("ox/Log").Rpc[] | readonly import("ox/Hex").Hex[];
    } | {
        Request: {
            method: "eth_getFilterLogs";
            params: [filterId: import("ox/Hex").Hex];
        };
        ReturnType: readonly import("ox/Log").Rpc[];
    } | {
        Request: {
            method: "eth_getLogs";
            params: [filter: import("ox/Filter").Rpc];
        };
        ReturnType: readonly import("ox/Log").Rpc[];
    } | {
        Request: {
            method: "eth_getProof";
            params: [address: import("ox/Address").Address, storageKeys: import("ox/Hex").Hex[], block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier];
        };
        ReturnType: import("ox/AccountProof").Rpc;
    } | {
        Request: {
            method: "eth_getStorageAt";
            params: [address: import("ox/Address").Address, index: import("ox/Hex").Hex, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_getTransactionByBlockHashAndIndex";
            params: [hash: import("ox/Hex").Hex, index: import("ox/Hex").Hex];
        };
        ReturnType: import("ox/Transaction").Rpc | null;
    } | {
        Request: {
            method: "eth_getTransactionByBlockNumberAndIndex";
            params: [block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag, index: import("ox/Hex").Hex];
        };
        ReturnType: import("ox/Transaction").Rpc | null;
    } | {
        Request: {
            method: "eth_getTransactionByHash";
            params: [hash: import("ox/Hex").Hex];
        };
        ReturnType: import("ox/Transaction").Rpc | null;
    } | {
        Request: {
            method: "eth_getTransactionCount";
            params: [address: import("ox/Address").Address, block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag | import("ox/Block").Hash | import("ox/Block").Identifier];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_getTransactionReceipt";
            params: [hash: import("ox/Hex").Hex];
        };
        ReturnType: import("ox/TransactionReceipt").Rpc | null;
    } | {
        Request: {
            method: "eth_getUncleCountByBlockHash";
            params: [hash: import("ox/Hex").Hex];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_getUncleCountByBlockNumber";
            params: [block: import("ox/Block").Number<import("ox/Hex").Hex> | import("ox/Block").Tag];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_maxPriorityFeePerGas";
            params?: undefined;
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_newBlockFilter";
            params?: undefined;
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_newFilter";
            params: [filter: import("ox/Filter").Rpc];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_newPendingTransactionFilter";
            params?: undefined;
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_protocolVersion";
            params?: undefined;
        };
        ReturnType: string;
    } | {
        Request: {
            method: "eth_requestAccounts";
            params?: undefined;
        };
        ReturnType: readonly import("ox/Address").Address[];
    } | {
        Request: {
            method: "eth_sendRawTransaction";
            params: [serializedTransaction: import("ox/Hex").Hex];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_sendTransaction";
            params: [transaction: import("ox/TransactionRequest").Rpc];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_signTransaction";
            params: [request: import("ox/TransactionRequest").Rpc];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_signTypedData_v4";
            params: [address: import("ox/Address").Address, message: string];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_uninstallFilter";
            params: [filterId: import("ox/Hex").Hex];
        };
        ReturnType: boolean;
    } | {
        Request: {
            method: "eth_requestAccounts";
            params?: undefined;
        };
        ReturnType: readonly import("ox/Address").Address[];
    } | {
        Request: {
            method: "eth_sendRawTransaction";
            params: [serializedTransaction: import("ox/Hex").Hex];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_sendTransaction";
            params: [transaction: import("ox/TransactionRequest").Rpc];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_signTransaction";
            params: [request: import("ox/TransactionRequest").Rpc];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "eth_signTypedData_v4";
            params: [address: import("ox/Address").Address, message: string];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "personal_sign";
            params: [data: import("ox/Hex").Hex, address: import("ox/Address").Address];
        };
        ReturnType: import("ox/Hex").Hex;
    } | {
        Request: {
            method: "wallet_addEthereumChain";
            params: [chain: {
                chainId: string;
                chainName: string;
                nativeCurrency?: {
                    name: string;
                    symbol: string;
                    decimals: number;
                } | undefined | undefined;
                rpcUrls: readonly string[];
                blockExplorerUrls?: readonly string[] | undefined;
                iconUrls?: readonly string[] | undefined;
            }];
        };
        ReturnType: null;
    } | {
        Request: {
            method: "wallet_getCallsStatus";
            params?: [string];
        };
        ReturnType: {
            status: "PENDING" | "CONFIRMED";
            receipts?: readonly {
                logs: {
                    address: import("ox/Hex").Hex;
                    data: import("ox/Hex").Hex;
                    topics: readonly import("ox/Hex").Hex[];
                }[];
                status: import("ox/Hex").Hex;
                blockHash: import("ox/Hex").Hex;
                blockNumber: import("ox/Hex").Hex;
                gasUsed: import("ox/Hex").Hex;
                transactionHash: import("ox/Hex").Hex;
            }[] | undefined;
        };
    } | {
        Request: {
            method: "wallet_getCapabilities";
            params?: [import("ox/Address").Address];
        };
        ReturnType: {
            [x: `0x${string}`]: {
                [capability: string]: any;
            };
        };
    } | {
        Request: {
            method: "wallet_getPermissions";
            params?: undefined;
        };
        ReturnType: readonly {
            caveats: readonly {
                type: string;
                value: any;
            }[];
            date: number;
            id: string;
            invoker: `http://${string}` | `https://${string}`;
            parentCapability: "eth_accounts" | string;
        }[];
    } | {
        Request: {
            method: "wallet_grantPermissions";
            params?: [{
                signer?: {
                    type: string;
                    data?: unknown | undefined;
                } | undefined;
                permissions: readonly {
                    data: unknown;
                    policies: readonly {
                        data: unknown;
                        type: string;
                    }[];
                    required?: boolean | undefined;
                    type: string;
                }[];
                expiry: number;
            }];
        };
        ReturnType: {
            expiry: number;
            factory?: `0x${string}` | undefined | undefined;
            factoryData?: string | undefined | undefined;
            grantedPermissions: readonly {
                data: unknown;
                policies: readonly {
                    data: unknown;
                    type: string;
                }[];
                required?: boolean | undefined;
                type: string;
            }[];
            permissionsContext: string;
            signerData?: {
                userOpBuilder?: `0x${string}` | undefined;
                submitToAddress?: `0x${string}` | undefined;
            } | undefined | undefined;
        };
    } | {
        Request: {
            method: "wallet_requestPermissions";
            params: [permissions: {
                eth_accounts: Record<string, any>;
            }];
        };
        ReturnType: readonly {
            caveats: readonly {
                type: string;
                value: any;
            }[];
            date: number;
            id: string;
            invoker: `http://${string}` | `https://${string}`;
            parentCapability: "eth_accounts" | string;
        }[];
    } | {
        Request: {
            method: "wallet_revokePermissions";
            params: [permissions: {
                eth_accounts: Record<string, any>;
            }];
        };
        ReturnType: null;
    } | {
        Request: {
            method: "wallet_sendCalls";
            params: [{
                calls: readonly {
                    to?: import("ox/Address").Address | undefined;
                    data?: import("ox/Hex").Hex | undefined;
                    value?: import("ox/Hex").Hex | undefined;
                }[];
                capabilities?: {
                    [capability: string]: any;
                } | undefined;
                chainId?: import("ox/Hex").Hex | undefined;
                from: import("ox/Address").Address;
                version: string;
            }];
        };
        ReturnType: string;
    } | {
        Request: {
            method: "wallet_showCallsStatus";
            params: [string];
        };
        ReturnType: undefined;
    } | {
        Request: {
            method: "wallet_switchEthereumChain";
            params: [chain: {
                chainId: string;
            }];
        };
        ReturnType: null;
    } | {
        Request: {
            method: "wallet_watchAsset";
            params: [{
                type: "ERC20";
                options: {
                    address: string;
                    symbol: string;
                    decimals: number;
                    image?: string | undefined;
                };
            }];
        };
        ReturnType: boolean;
    }>;
    on: import("ox/Provider").EventListenerFn;
    removeListener: import("ox/Provider").EventListenerFn;
}, Record<string, unknown>, Record<string, unknown>>;
export declare namespace farcasterFrame {
    var type: "farcasterFrame";
}
