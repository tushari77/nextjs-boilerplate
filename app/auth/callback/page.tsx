"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data?.session) {
        router.push("/"); // redirect to your protected page
      } else {
        router.push("/login");
      }
    };
    handleSession();
  }, [router]);

  return <p className="text-center mt-10">Processing login...</p>;
}
