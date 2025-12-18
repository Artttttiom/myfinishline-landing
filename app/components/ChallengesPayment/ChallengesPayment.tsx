import Image from "next/image";
import { ChangeEvent, Suspense, useEffect, useMemo, useState } from "react";
import ChallengeSelect from "./ChallengeSelect/ChallengeSelect";
import { CurrencieSymbols, IProduct } from "@/app/types";
import { useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import axios from "axios";

interface IChallengesPaymentProps {
  products: IProduct[];
  handleUpdateTotal: (total: number) => void;
}

const addon = {
  title: "1x Steps Booster",
  price: 9.99,
  imageSrc: "images/payment/booster.svg",
  description: "Run faster than everyone",
};

const Content = ({ products, handleUpdateTotal }: IChallengesPaymentProps) => {
  const searchParams = useSearchParams();
  const challengeId = searchParams.get("challenge_id");
  const [selectedChallenge, setSelectedChallenge] = useState<IProduct>(
    products?.find(
      (product) => product.challenge_info.id === Number(challengeId)
    ) || products?.[0]
  );
  const [isAddonChecked, setIsAddonChecked] = useState<boolean>(false);
  const [orderAmount, setOrderAmount] = useState<string>("1");
  const [isLoading, setIsLoading] = useState(false);

  const handlePressCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setIsAddonChecked(event.target.checked);
  };

  const handleIncrementOrder = () => {
    if (orderAmount === "75") return;
    setOrderAmount((prevState) => String(+prevState + 1));
  };

  const handleDecrementOrder = () => {
    if (orderAmount === "1") return;
    setOrderAmount((prevState) => String(+prevState - 1));
  };

  const handleChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    if (sanitizedValue === "" || Number(sanitizedValue) < 1) {
      setOrderAmount("1");
      return;
    }
    let numericValue = Number(sanitizedValue);
    if (numericValue > 75) {
      numericValue = 75;
    }
    setOrderAmount(String(numericValue));
  };

  const totalChallengeCost =
    selectedChallenge.prices?.[0].amount * Number(orderAmount);
  const total = useMemo(
    () => totalChallengeCost + (isAddonChecked ? addon.price : 0),
    [totalChallengeCost, isAddonChecked]
  );

  const handleOrder = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/payment/order", {
        stripe_price_id: selectedChallenge.prices?.[0].stripe_price_id,
      });
      window.location.href = data.payment_url;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleUpdateTotal(total);
  }, [total]);

  return (
    <section className="w-full">
      {/* <Image
        className="mx-auto object-contain"
        src="/images/payment/cover.png"
        width={500}
        height={408}
        sizes="100%"
        alt="Cover"
      /> */}
      <h4 className="text-2xl font-bold mt-4">Your challenges</h4>
      <legend className="mt-2">Select one</legend>
      <fieldset className="flex gap-2 mt-2">
        {products?.map((product) => {
          return (
            <ChallengeSelect<IProduct>
              key={product.stripe_product_id}
              title={product.name}
              isChecked={
                selectedChallenge?.challenge_info.id ===
                product.challenge_info.id
              }
              currency={product.prices?.[0].currency}
              value={product.name}
              imageSrc={product.main_image}
              price={product.prices?.[0].amount}
              onChange={() => setSelectedChallenge(product)}
            />
          );
        })}
      </fieldset>
      {/* <section>
        <h4 className="text-2xl font-bold mt-4">Addon</h4>
        <label
          className={`border border-neutral-300 rounded mt-4 p-4 flex items-center justify-between relative cursor-pointer transition-all ${
            isAddonChecked && "border-orange-400 shadow-xl"
          }`}
        >
          <div className="flex items-center gap-2">
            <Image
              src={addon.imageSrc}
              width={48}
              height={48}
              sizes="100%"
              alt="Addon"
            />
            <div>
              <div className="flex justify-between">
                <span className="font-bold">{addon.title}</span>
                <div className="font-bold uppercase">${addon.price}</div>
              </div>
              <p>{addon.description}</p>
            </div>
          </div>
          <input
            className="hidden"
            type="checkbox"
            checked={isAddonChecked}
            onChange={handlePressCheckbox}
          />
          <div className="border border-neutral-300 rounded w-8 h-8 relative flex items-center justify-center">
            {isAddonChecked && (
              <div className="w-5 h-5 rounded bg-orange-400" />
            )}
          </div>
        </label>
      </section> */}
      <section className="mt-2">
        <h4 className="text-2xl font-bold mt-4">Order summary</h4>
        <section className="border border-neutral-300 rounded mt-4">
          <section className="flex items-center justify-between p-4">
            <span className="text-sm font-semibold md:text-base">
              {selectedChallenge.name}
            </span>
            {/* <div className="border border-neutral-300 rounded">
              <button
                className="border-r border-neutral-300 p-2 cursos-pointer"
                onClick={handleDecrementOrder}
              >
                -
              </button>
              <input
                className="p-2 text-sm text-center w-10"
                value={orderAmount}
                onChange={handleChangeAmount}
              />
              <button
                className="border-l border-neutral-300 p-2 cursos-pointer"
                onClick={handleIncrementOrder}
              >
                +
              </button>
            </div> */}
            <span className="text-sm">
              {CurrencieSymbols[selectedChallenge.prices?.[0].currency]}
              {totalChallengeCost?.toFixed(2)}
            </span>
          </section>
          {isAddonChecked && (
            <section className="border-t border-neutral-300 p-4 flex justify-between items-center">
              <span className="font-semibold">{addon.title}</span>
              <span className="text-sm">
                {CurrencieSymbols[selectedChallenge.prices?.[0].currency]}
                {addon.price}
              </span>
            </section>
          )}
          <section className="border-t border-neutral-300 p-4 flex justify-between items-center">
            <span className="font-bold">Total</span>
            <span className="font-bold">
              {selectedChallenge.prices?.[0].currency}{" "}
              {CurrencieSymbols[selectedChallenge.prices?.[0].currency]}
              {total?.toFixed(2)}
            </span>
          </section>
        </section>
      </section>
      <Button
        className="w-full mt-4 uppercase text-2xl py-6"
        onClick={handleOrder}
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin"></div>
            Forming order link...
          </>
        ) : (
          "Order"
        )}
      </Button>
    </section>
  );
};

const ChallengesPayment = ({
  products,
  handleUpdateTotal,
}: IChallengesPaymentProps) => {
  return (
    <Suspense>
      <Content products={products} handleUpdateTotal={handleUpdateTotal} />
    </Suspense>
  );
};

export default ChallengesPayment;
