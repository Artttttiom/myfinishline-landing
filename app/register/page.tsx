"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      alert("Пароли не совпадают");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      alert("Пароль должен содержать минимум 6 символов");
      setLoading(false);
      return;
    }

    try {
      console.log("Registration data:", formData);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      window.location.href = "/verify";
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen p-5">
      <section className="p-8 sm:p-12 rounded-2xl text-center bg-accent w-full max-w-md">
        <h1 className="text-2xl sm:text-3xl font-semibold">Create Account</h1>
        <p className="mt-2 text-sm sm:text-base">Sign up to get started</p>

        <form onSubmit={handleRegister} className="mt-6 space-y-4">
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="w-full py-3 px-4 focus:outline-none focus:border-orange-400 transition-colors"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            id="password"
            name="password"
            type="password"
            required
            className="w-full py-3 px-4 focus:outline-none focus:border-orange-400 transition-colors"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            className="w-full py-3 px-4 focus:outline-none focus:border-orange-400 transition-colors"
            placeholder="Repeat your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <Button
            type="submit"
            disabled={loading}
            className={`w-full border-none py-3 px-6 text-base font-semibold cursor-pointer transition-all duration-300 flex items-center justify-center gap-2
              ${loading && "opacity-70 cursor-not-allowed"}
            `}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </Button>
        </form>

        <div className="relative flex items-center my-6">
          <div className="grow border-t border-gray-600"></div>
          <span className="shrink mx-4 text-gray-400 text-sm">or</span>
          <div className="grow border-t border-gray-600"></div>
        </div>

        <Button
          onClick={() => {
            setLoading(true);
            const clientId = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID;
            const redirectUri = `${window.location.origin}/api/strava/callback`;
            const scope = "activity:read_all";
            const authUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&approval_prompt=force`;
            window.location.href = authUrl;
          }}
          disabled={loading}
          className={`w-full py-3 px-6 font-semibold cursor-pointer transition-all duration-300 flex items-center justify-center gap-3
            ${loading && "opacity-70 cursor-not-allowed"}
          `}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
          </svg>
          Sign up with Strava
        </Button>

        <div className="mt-6 space-y-3 text-sm">
          <Link
            href="/login"
            className="block text-orange-400 hover:text-[#e44302] transition-colors"
          >
            Already have an account? Sign in
          </Link>
        </div>

        <p className="text-gray-400 text-xs mt-4">
          By creating an account, you agree to our Terms of Service and Privacy
          Policy
        </p>
      </section>
    </section>
  );
}
