import { CreateTrustline } from "./wallet-ui/create-trustline";
import { CurrencyBalance } from "./wallet-ui/currency-balance";
import { SendCurrency } from "./wallet-ui/send-currency";
import { WalletBalance } from "./wallet-ui/wallet-balance";
import { WalletInfo } from "./wallet-ui/wallet-info";

export function SourceWallet() {
  return (
    <div className="Wallet">
      <div className="WalletRow header">Source Wallet</div>
      <WalletInfo />
      <WalletBalance />
      <CurrencyBalance />
      <CreateTrustline />
      <SendCurrency />
    </div>
  );
}
