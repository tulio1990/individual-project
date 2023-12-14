"use client";

import { useFormState, useFormStatus } from "react-dom";
import { CreateUser } from "@/lib/actions";

export default function UserForm() {
  const initialState = { message: "", errors: {} };
  const [state, CreateUserForm] = useFormState(CreateUser, initialState);

  return (
    <form
      action={CreateUserForm}
      className="h-[calc(100vh-7rem)] flex justify-center items-center"
    >
      {state.message && (
        <div className="text-Kilamanjaro-800">{state.message}</div>
      )} 
      <div className="md:w-1/2 sm:w-full sm:px-5 rounded-lg">
        <h1 className="text-Kilamanjaro-950 font-bold text-4xl mb-4">
          Create a New User
        </h1>
        <div className="max-w-2xl m-auto">
          <div>
            <label
              className="text-Kilamanjaro-950 mb-2 block text-md"
              htmlFor="name"
            >
              Name
            </label>
            <div className="relative mb-4">
              <input
                className="block w-full rounded-md border border-Kilamanjaro-950 py-[9px] pl-3 text-md outline-2 placeholder:text-silverSand-400"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="text-Kilamanjaro-950 mb-2 block text-md"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative mb-4">
              <input
                className="block w-full rounded-md border border-Kilamanjaro-950 py-[9px] pl-3 text-md outline-2 placeholder:text-silverSand-400"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="text-Kilamanjaro-950 mb-2 block text-md"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="block w-full rounded-md border border-Kilamanjaro-950 py-[9px] pl-3 text-md outline-2 placeholder:text-silverSand-400"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={8}
              />
            </div>
          </div>
          <div>
            <label
              className="text-Kilamanjaro-950 mb-2 block text-md"
              htmlFor="image"
            >
              Image Profile
            </label>
            <div className="relative">
              <input
                className="block w-full rounded-md border border-Kilamanjaro-950 py-[9px] pl-3 text-md outline-2 placeholder:text-silverSand-400"
                id="image"
                name="image"
                type="file"
              />
            </div>
          </div>
          <div>
            <label
              className="text-Kilamanjaro-950 mb-2 block text-md"
              htmlFor="role"
            >
              User Role
            </label>
            <div className="relative">
              <select
                className="block w-full rounded-md border border-Kilamanjaro-950 py-[9px] pl-3 text-md outline-2 placeholder:text-silverSand-400"
                id="role"
                name="role"
              >
                <option value="ADMIN">Admin</option>
                <option value="VENDOR">Vendor</option>
                <option value="CLIENT">Client</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-6 max-w-2xl m-auto flex justify-end gap-4">
          <SubmitButton />
        </div>
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full text-md bg-Kilamanjaro-950 text-silverSand-50 p-3 rounded-lg mt-2"
      type="submit"
      aria-disabled={pending}
    >
      Create User
    </button>
  );
}
