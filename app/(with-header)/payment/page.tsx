"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import Image from "next/image";
import ChallengesPayment from "@/app/components/ChallengesPayment/ChallengesPayment";
import Logo from "@/app/components/Shared/Logo/Logo";
import { useAppSelector } from "@/app/lib/hooks";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  { locale: "en" }
);

export default function PaymentPage() {
  const [total, setTotal] = useState<number>(0);
  const { products } = useAppSelector((state) => state.products);

  const options = {
    appearance: {
      theme: "stripe" as const,
    },
  };

  return (
    <div className="min-h-screen">
      <div className="relative inset-0 bg-black bg-center bg-no-repeat h-40 lg:h-80">
        <Image
          className="object-cover opacity-15"
          src="/images/payment/top-cover.png"
          fill
          alt="Top cover"
        />
        <div className="absolute flex justify-center items-center w-full h-full">
          <Logo className="mb-10" />
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4 max-w-7xl mt-4">
        <div className="flex pb-100 w-full">
          {/* <Elements stripe={stripePromise} options={options}>
            <PaymentForm total={total} />
          </Elements> */}
          <ChallengesPayment products={products} handleUpdateTotal={setTotal} />
        </div>
      </div>
    </div>
  );
}
