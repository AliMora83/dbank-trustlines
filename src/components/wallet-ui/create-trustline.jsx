import { useState } from "react";
import { useCreateTrustline } from "@nice-xrpl/react-xrpl";

function addTrustline(existingTrustlines, newTrustline) {
  for (const trustline of existingTrustlines) {
    if (trustline.address === newTrustline.address) {
      return existingTrustlines;
    }
  }

  return [...existingTrustlines, newTrustline];
}

export function CreateTrustline() {
  // The useCreateTrustline hook creates a trustline
  // with another wallet address and will allow you to
  // receive currency from them.  The other account
  // will also need to create a trustline with your
  // address in order to send them currency.
  // This is a transactional hook and requires a wallet.
  const createTrustline = useCreateTrustline();

  const [destinationAddress, setDestinationAddress] = useState("");
  const [amount, setAmount] = useState(48);
  const [sending, setSending] = useState(false);
  const [currency] = useState("USD");
  const [trustlines, setTrustlines] = useState([]);

  return (
    <>
      <div className="WalletRow">
        Create trustline to{" "}
        <input
          value={destinationAddress}
          onChange={(e) => setDestinationAddress(e.currentTarget.value)}
          type="text"
        />{" "}
        with a limit of{" "}
        <input
          value={amount}
          onChange={(e) => setAmount(parseInt(e.currentTarget.value, 10))}
          type="number"
        />{" "}
        {currency} -{" "}
        {sending ? (
          "Waiting for response..."
        ) : (
          <button
            onClick={async () => {
              setSending(true);

              try {
                const result = await createTrustline(
                  destinationAddress,
                  currency,
                  `${amount}`
                );
                console.log(result);

                setTrustlines((trustlines) => {
                  return addTrustline(trustlines, {
                    address: destinationAddress,
                    currency,
                    amount
                  });
                });
              } catch (e) {
                alert(e);
              }

              setSending(false);
            }}
            disabled={!amount || !destinationAddress}
          >
            Send
          </button>
        )}
      </div>
      <div className="WalletRow">
        {trustlines.map((trustline, idx) => {
          return (
            <div key={idx}>
              Wallet can now recieve up to {trustline.amount}{" "}
              {trustline.currency} from address {trustline.address}
            </div>
          );
        })}
      </div>
    </>
  );
}
