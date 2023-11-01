import { useCurrencyBalance } from "@nice-xrpl/react-xrpl";

export function CurrencyBalance() {
  // The useCurrencyBalance hook gives you the
  // currencies and their balances of a wallet
  // This is a request hook, so it can be used with
  // a wallet or a wallet address.
  const currencies = useCurrencyBalance();

  return (
    <div className="WalletRow">
      Currencies:{" "}
      {currencies.length
        ? currencies.map((currency) => {
            return (
              <div key={currency.issuer}>
                {currency.value} {currency.currency}
              </div>
            );
          })
        : "No currencies held"}
    </div>
  );
}
