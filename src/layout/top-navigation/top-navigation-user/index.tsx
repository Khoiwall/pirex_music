import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function TopNavigationUser() {
  const [user, setUser] = useState<null>(null);
  return (
    <>
      {!user ? (
        <Link href="/auth">
          <Button>Sign in</Button>
        </Link>
      ) : null}
    </>
  );
}
