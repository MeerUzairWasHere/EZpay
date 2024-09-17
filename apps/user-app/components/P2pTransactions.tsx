import { Card } from "@repo/ui/card";

export const P2pTransactions = ({
  p2pTransactions,
}: {
  p2pTransactions: {
    time: Date;
    amount: number;
    from: number;
    to: number;
  }[];
}) => {
  if (!p2pTransactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8">No Recent p2p transactions</div>
      </Card>
    );
  }
  return (
    <Card title="p2p Transactions">
      <div className="pt-2 ">
        {p2pTransactions.map((t) => (
          <div className="flex justify-between">
            <div>
              <div className="text-sm">Received INR</div>
              <div className="text-slate-600 text-xs">
                {t.time.toDateString()}
              </div>
            </div>
            <div className="flex flex-col justify-center">
             From: {t.from}
            </div>
            <div className="flex flex-col justify-center">
            To: {t.to}
            </div>
            <div className="flex flex-col justify-center">
              + Rs {t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
