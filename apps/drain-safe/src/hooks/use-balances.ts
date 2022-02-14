import { useState, useEffect, useCallback } from 'react';
import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk';
import { TokenBalance } from '@gnosis.pm/safe-apps-sdk';
import { NATIVE_COIN } from '../utils/sdk-helpers';

export type BalancesType = {
  error?: Error;
  assets: TokenBalance[];
  selectedTokens: string[];
  setSelectedTokens: (tokens: string[]) => void;
};

const transferableTokens = (item: TokenBalance) =>
  item.tokenInfo.type !== NATIVE_COIN || (item.tokenInfo.type === NATIVE_COIN && Number(item.fiatBalance) !== 0);

function useBalances(safeAddress: string, chainId: number): BalancesType {
  const { sdk } = useSafeAppsSDK();
  const [assets, setAssets] = useState<TokenBalance[]>([]);
  const [selectedTokens, setSelectedTokens] = useState<string[]>([]);
  const [error, setError] = useState<Error>();

  const loadBalances = useCallback(async () => {
    if (!safeAddress || !chainId) {
      return;
    }

    try {
      const balances = await sdk.safe.experimental_getBalances({ currency: 'USD' });
      const assets = balances.items.filter(transferableTokens);

      setAssets(assets);
      setSelectedTokens(assets.map((token: TokenBalance) => token.tokenInfo.address));
    } catch (err) {
      setError(err as Error);
    }
  }, [safeAddress, chainId, sdk]);

  useEffect(() => {
    loadBalances();
  }, [loadBalances]);

  return { error, assets, selectedTokens, setSelectedTokens };
}

export default useBalances;
