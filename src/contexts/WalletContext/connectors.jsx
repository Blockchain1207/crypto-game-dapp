import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
// import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const injected = new InjectedConnector({
  supportedChainIds: [1, 5, 31337]
});

const walletconnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/7535811d19b1410e98c261fbb638651a`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true
});

// const walletlink = new WalletLinkConnector({
//   url: `https://mainnet.infura.io/v3/7535811d19b1410e98c261fbb638651a`,
//   appName: "web3-react-demo"
// });

export const connectors = {
  injected: injected,
  walletConnect: walletconnect,
//   coinbaseWallet: walletlink
};
