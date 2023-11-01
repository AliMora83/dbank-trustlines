import { CreateTrustline } from "./wallet-ui/create-trustline";
import { CurrencyBalance } from "./wallet-ui/currency-balance";
import { SendCurrency } from "./wallet-ui/send-currency";
import { WalletBalance } from "./wallet-ui/wallet-balance";
import { WalletInfo } from "./wallet-ui/wallet-info";

export function DestinationWallet() {
  return (
    <div className="Wallet">
      <div className="WalletRow header">Destination Wallet</div>
      <WalletInfo />
      <WalletBalance />
      <CurrencyBalance />
      <CreateTrustline />
      <SendCurrency />
    </div>
  );
}
