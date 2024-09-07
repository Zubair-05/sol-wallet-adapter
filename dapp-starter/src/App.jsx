import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
// import {clusterApiUrl} from "@solana/web3.js";
import Airdrop from "./components/Airdrop.jsx";

export const App = () => {
  const network = WalletAdapterNetwork.Devnet;
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/nlzLMboF2m9eVfovtEPu81dZP-h5A2fO"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <WalletMultiButton />
            <WalletDisconnectButton />
            <Airdrop/>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
  );
};

export default App;