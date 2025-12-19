"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function GoogleCallbackPage() {
  const router = useRouter();
  const params = useSearchParams();
  const code = params.get("code");
  const [status, setStatus] = useState("Signing in with Google…");

  useEffect(() => {
    if (!code) return;

    const login = async () => {
      try {
        const res = await fetch("/api/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });

        if (!res.ok) {
          const text = await res.text();
          setStatus("Login failed: " + text);
          return;
        }

        const data = await res.json();

        if (data.access_token) {
          setStatus("Signed in successfully!");
          // Redirect after login
          router.push("/dashboard"); // or wherever you want
        } else {
          setStatus("Login failed");
        }
      } catch (err: any) {
        setStatus("Login error: " + err.message);
      }
    };

    login();
  }, [code, router]);

  return <p>{status}</p>;
}
