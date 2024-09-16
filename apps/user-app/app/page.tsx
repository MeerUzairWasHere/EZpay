import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./lib/auth";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        Landing page
      </div>
    </>
  );
}
