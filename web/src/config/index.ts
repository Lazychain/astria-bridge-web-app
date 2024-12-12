import {
  type EvmChainInfo,
  type EvmChains,
  evmChainsToRainbowKitChains,
  type EvmCurrency,
  evmCurrencyBelongsToChain,
  type CosmosChainInfo,
  cosmosChainInfosToCosmosKitChains,
  type CosmosChains,
  type IbcCurrency,
  ibcCurrencyBelongsToChain,
  cosmosChainNameFromId,
  cosmosChainInfosToCosmosKitAssetLists,
} from "./chainConfigs/types";
import { ConfigContextProvider } from "./contexts/ConfigContext";
import { getEnvVariable } from "./env";
import { useConfig } from "./hooks/useConfig";

/**
 * Represents the configuration object for the application.
 */
export interface AppConfig {
  // The configurations for IBC chains.
  ibcChains: CosmosChains;
  // The configurations for EVM chains.
  evmChains: EvmChains;
  // The URL for the brand link in the navbar.
  brandURL: string;
  // The URL for the bridge link in the navbar.
  bridgeURL: string;
  // The URL for the swap link in the navbar.
  swapURL: string;
  // The URL for the pool link in the navbar.
  poolURL: string;
  // The URL for the feedback form side tag. Hides side tag when null.
  feedbackFormURL: string | null;
}

export {
  ConfigContextProvider,
  type EvmChainInfo,
  type EvmChains,
  type EvmCurrency,
  evmCurrencyBelongsToChain,
  getEnvVariable,
  type CosmosChainInfo,
  type CosmosChains,
  type IbcCurrency,
  ibcCurrencyBelongsToChain,
  cosmosChainInfosToCosmosKitChains,
  cosmosChainInfosToCosmosKitAssetLists,
  cosmosChainNameFromId,
  evmChainsToRainbowKitChains,
  useConfig,
};
