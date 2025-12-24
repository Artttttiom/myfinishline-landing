"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { countries } from "@/app/data/countries";
import { setUser, updateUser } from "@/app/lib/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { getCurrentUser } from "@/app/lib/utils/userService";
import { IUser } from "@/app/types/user";
import axios from "axios";
import { Camera, Edit } from "lucide-react";
import Image from "next/image";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

const page = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [data, setData] = useState<IUser>(user);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }, []);

  const handleLoadUser = async () => {
    try {
      const data = await getCurrentUser();
      dispatch(setUser(data));
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user.id === null) {
      handleLoadUser();
    }
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    const dataArray = Object.entries(data);
    dataArray.forEach((item) => {
      !!item[1] && formData.append(item[0], item[1]);
    });
    if (file) {
      formData.append("avatar", file);
    }
    try {
      const { data } = await axios.post("/api/user/update-user", formData);
      dispatch(
        updateUser({
          ...(user.first_name !== data.first_name
            ? { first_name: data.first_name }
            : {}),
          ...(user.last_name !== data.last_name
            ? { last_name: data.last_name }
            : {}),
          ...(user.email !== data.email ? { email: data.email } : {}),
          ...(user.username !== data.username
            ? { username: data.username }
            : {}),
          ...(data.country ? { country: data.country } : {}),
          phone: data.phone,
          ...(data.full_avatar_url
            ? { full_avatar_url: data.full_avatar_url }
            : {}),
        })
      );
      toast.success("Profile successfully updated");
    } catch (error: any) {
      toast.error(error.response?.data.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-4xl mx-auto">
      <div className="flex gap-2">
        <div className="group relative w-35 h-35 flex items-center justify-center border rounded-lg overflow-hidden shrink-0">
          {file ? (
            <Image
              className="object-cover rounded-lg"
              src={URL.createObjectURL(file)}
              alt="Profile Picture"
              loading="eager"
              width={140}
              height={140}
            />
          ) : !imageError && data.full_avatar_url ? (
            <Image
              className="object-cover w-full h-full rounded-lg"
              src={data.full_avatar_url}
              alt="Profile Picture"
              loading="eager"
              width={140}
              height={140}
              onError={() => {
                setImageError(true);
              }}
            />
          ) : (
            <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
              <Camera />
            </div>
          )}

          <Edit
            width={32}
            height={32}
            className="absolute text-white bg-gray-700/80 rounded-lg p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          />

          <input
            className="absolute top-0 left-0 w-full h-full opacity-0 z-10 cursor-pointer"
            type="file"
            onChange={handleChangeFile}
          />
        </div>
        <div className="w-full leading-0">
          <label className="block w-full">
            <span className="text-xs">First Name</span>
            <Input
              name="first_name"
              className="mt-px"
              placeholder="John"
              value={data.first_name}
              onChange={handleChange}
            />
          </label>
          <label className="block w-full mt-2">
            <span className="text-xs">Last Name</span>
            <Input
              name="last_name"
              className="mt-px"
              placeholder="Doe"
              value={data.last_name}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <label className="block mt-2">
        <span className="text-xs">Email</span>
        <Input
          name="email"
          className="mt-px"
          placeholder="Email Address"
          value={data.email}
          onChange={handleChange}
        />
      </label>
      <label className="block mt-2">
        <span className="text-xs">Username</span>
        <div className="relative flex items-center">
          <Input
            name="username"
            className="mt-px pl-7"
            placeholder="John.doe"
            value={data.username}
            onChange={handleChange}
          />
          <span className="absolute left-3 text-neutral-400">@</span>
        </div>
      </label>

      <label className="block mt-2">
        <span className="text-xs">Phone</span>
        <Input
          name="phone"
          className="mt-px"
          value={data.phone}
          onChange={handleChange}
          placeholder="+1 234 567 8901"
          defaultValue="+1 234 567 8901"
        />
      </label>

      <label htmlFor="country" className="block mt-2">
        <span className="text-xs">Country</span>
        <Select
          name="country"
          value={data.country || ""}
          onValueChange={(value) => {
            setData({ ...data, country: value });
          }}
          required
        >
          <SelectTrigger className="w-full mt-1">
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
      </label>

      <Button className="mt-6 w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin"></div>
            Saving updates...
          </>
        ) : (
          "Save updates"
        )}
      </Button>
    </form>
  );
};

export default page;
