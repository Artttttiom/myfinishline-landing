"use client";

import { FormEvent, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import RedeemInput from "@/app/components/Shared/RedeemInput/RedeemInput";

import "flag-icons/css/flag-icons.min.css";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { countries } from "@/app/data/countries";
import axios from "axios";
import { useAppSelector } from "@/app/lib/hooks";

const Redeem = () => {
  const { user } = useAppSelector((state) => state.user);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    first_name: user.first_name || "",
    last_name: user.last_name || "",
    phone: user.phone || "",
    country: user.country || "",
    zip_code: "",
    address: "",
    email: user.email || "",
  });
  const router = useRouter();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }, []);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post("/api/user/redeem-reward", {
        reward_id: 1,
        ...formData,
      });
      router.push("/app/profile/journey");
      toast.success("Medal claimed! Your medal is on its way.");
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-semibold text-foreground">
          Congratulations!
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          You have completed your challenge, now claim your medal!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-8"
      >
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <div className="flex items-center gap-2 w-full">
            <RedeemInput
              id="first_name"
              label="First name"
              placeholder="Pedro"
              delay={0}
              value={formData.first_name}
              onChange={handleChange}
            />
            <RedeemInput
              id="last_name"
              label="Last name"
              placeholder="Duarte"
              delay={0}
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>

          <RedeemInput
            id="phone"
            label="Phone number"
            placeholder="Phone number"
            delay={0.15}
            value={formData.phone}
            onChange={handleChange}
          />

          <RedeemInput
            id="email"
            label="Email"
            placeholder="Email"
            delay={0.15}
            value={formData.email}
            onChange={handleChange}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <label className="text-sm font-medium text-foreground">
              Shipping Country
            </label>
            <div className="mt-2">
              <Select
                value={formData.country}
                onValueChange={(value) => {
                  setFormData({ ...formData, country: value });
                }}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.id} value={country.name}>
                      {country.flag}
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          <RedeemInput
            id="zip_code"
            label="Zip code"
            placeholder="Zip code"
            delay={0.25}
            value={formData.zip_code}
            onChange={handleChange}
          />

          <RedeemInput
            id="address"
            label="Address"
            placeholder="Address"
            delay={0.3}
            value={formData.address}
            onChange={handleChange}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex gap-3 mt-2"
          >
            <Button type="submit" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? "Claiming..." : "Claim medal"}
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default Redeem;
