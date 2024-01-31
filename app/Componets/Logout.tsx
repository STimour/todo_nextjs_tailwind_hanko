"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { register, Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL

export default function Login() {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi!))
    );
  }, []);

  const logout = () => {
    hanko?.user
      .logout()
      .then(() => {
        router.push("/");
        router.refresh();
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <button type="button" onClick={logout}>Logout</button>
    </>
  );
}

