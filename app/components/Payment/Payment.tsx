import { ChallengeInfo } from "./ChallengeInfo/ChallengeInfo";
import { IProduct } from "@/app/types";
import PaymentForm from "./PaymentForm/PaymentForm";

interface IPaymentProps {
  product: IProduct;
}

export const Payment = ({ product }: IPaymentProps) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-18 md:flex-row">
      <PaymentForm product={product} />
      <ChallengeInfo product={product} />
    </div>
  );
};
