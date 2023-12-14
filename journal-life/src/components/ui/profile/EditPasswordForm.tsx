"use client";

import { UpdateUserPassword } from "@/lib/actions";
import { UserPasswordInfo } from "@/lib/types";
import { useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function EditPasswordForm({
  userData,
}: {
  userData: UserPasswordInfo;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [message, setMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const updateInfoWithId = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await UpdateUserPassword(
      userData.id,
      new FormData(event.currentTarget)
    );
    if (result && result.message) {
      setMessage(result.message);
      formRef.current?.reset();
    }
  };
  return (
    <form ref={formRef} onSubmit={updateInfoWithId} className="flex-[3.5]">
      <div>
        {message && <p>{message}</p>}
        <div>
          <label htmlFor="password">Current Password</label>
          <div className="relative mt-2 lg:w-1/2 mb-4">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="**********"
              className="w-full px-3 py-2 text-sm border border-Kilamanjaro-950 rounded-md focus:outline-none focus:ring-2 focus:ring-silverSand-700 focus:border-silverSand-950 pr-10"
            />
            <button
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xl"
              type="button"
              onClick={toggleShowPassword}
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="newPassword">New Password</label>
          <div className="relative mt-2 lg:w-1/2">
            <input
              type={showPassword ? "text" : "password"}
              name="newPassword"
              id="newPassword"
              placeholder="**********"
              className="w-full px-3 py-2 text-sm border border-Kilamanjaro-950 rounded-md focus:outline-none focus:ring-2 focus:ring-silverSand-700 focus:border-silverSand-950 pr-5"
            />
            <button
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xl"
              type="button"
              onClick={toggleShowPassword}
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-4 justify-start gap-4">
          <button
            type="submit"
            className="px-5 py-1 border-Kilamanjaro-950 border-1 rounded-md bg-Kilamanjaro-950 text-silverSand-50"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
