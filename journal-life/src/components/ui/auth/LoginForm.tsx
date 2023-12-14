"use client"

import { useForm } from "react-hook-form";
import { SignInResponse, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormValues = {
  email: string;
  password: string;
};
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    const res: SignInResponse | undefined = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res?.error) {
      setError(res.error);
      reset();
    } else {
      router.back();
      router.refresh();
    }
  });
  return (
    <form onSubmit={onSubmit} className="md:w-1/2 sm:w-full lg:w-1/3 sm:px-5">
      {error && (
        <p className="bg-Kilamanjaro-950 text-lg text-silverSand-50 p-3 rounded mb-2">
          {error}
        </p>
      )}

      <h1 className="text-Kilamanjaro-950 font-bold text-4xl mb-4">Login</h1>

      <label
        htmlFor="email"
        className="text-Kilamanjaro-950 mb-2 block text-md"
      >
        Email:
      </label>
      <input
        type="email"
        {...register("email", {
          required: {
            value: true,
            message: "Email is required",
          },
        })}
        className="p-3 rounded block mb-2 bg-silverSand-100 text-silverSand-950 w-full"
        placeholder="user@email.com"
      />

      {errors.email && (
        <span className="text-silverSand-50 text-xs">
          {errors.email.message}
        </span>
      )}

      <label
        htmlFor="password"
        className="text-Kilamanjaro-950 mb-2 block text-md"
      >
        Password:
      </label>
      <input
        type="password"
        {...register("password", {
          required: {
            value: true,
            message: "Password is required",
          },
        })}
        className="p-3 rounded block mb-2 bg-silverSand-100 text-silverSand-950 w-full"
        placeholder="******"
      />

      {errors.password && (
        <span className="text-silverSand-50 text-xs">
          {errors.password.message}
        </span>
      )}

      <button className="w-full text-md bg-Kilamanjaro-950 text-silverSand-50 p-3 rounded-lg mt-2">
        Login
      </button>
    </form>
  );
}
