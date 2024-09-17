import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { authOptions } from "../../lib/auth";
import { P2pTransactions } from "../../../components/P2pTransactions";


async function getOnRampTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return txns.map((t) => ({
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
  }));
}

async function getP2pTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      fromUserId: Number(session?.user?.id),
    },
  });
  return txns.map((t) => ({
    time: t.timestamp,
    amount: t.amount,
    from: t.fromUserId,
    to: t.toUserId,
  }));
}


export default async function () {
  const transactions = await getOnRampTransactions();
  const p2pTransactions = await getP2pTransactions();
 
    return <div className="flex flex-col w-full">
     <OnRampTransactions transactions={transactions} />
      <P2pTransactions p2pTransactions={p2pTransactions} />
    </div>
  }
  