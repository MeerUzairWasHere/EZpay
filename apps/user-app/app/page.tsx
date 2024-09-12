"use client";
import { AppBar } from "@repo/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Page(): JSX.Element {
  const session = useSession();
  return (
    <>
      <AppBar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
      {session?.data?.user?.name && "Welcome, " + session?.data?.user?.name}
    </>
  );
}
