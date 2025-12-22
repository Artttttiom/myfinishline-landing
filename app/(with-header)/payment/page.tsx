"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ChallengesPayment from "@/app/components/ChallengesPayment/ChallengesPayment";
import Logo from "@/app/components/Shared/Logo/Logo";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { IProduct } from "@/app/types";
import axios from "axios";
import { setProducts } from "@/app/lib/features/products/productsSlice";

export default function PaymentPage() {
  const [total, setTotal] = useState<number>(0);
  const { products } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const handleLoadProducts = async () => {
    try {
      const { data }: { data: IProduct[] } = await axios.get(
        "/api/payment/products"
      );
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!products.length) {
      handleLoadProducts();
    }
  }, []);

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
          {!!products.length && (
            <ChallengesPayment
              products={products}
              handleUpdateTotal={setTotal}
            />
          )}
        </div>
      </div>
    </div>
  );
}
