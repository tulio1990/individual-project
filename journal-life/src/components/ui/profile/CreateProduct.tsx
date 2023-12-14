"use client";

import { useFormState, useFormStatus } from "react-dom";
import { CreateProductAction } from "@/lib/actions";
import { Category } from "@/lib/types";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function CreateProduct({
  userId,
}: {
  userId: string;
}) {
  const initialState = { message: "", errors: {} };
  const [formState, setFormState] = useFormState(
    CreateProductAction,
    initialState
  );

  const [fileName, setFileName] = useState("Upload a file");

  const handleFileChange = (event: any) => {
    setFileName(event.target.files[0].name);
  };

  return (
    <form action={setFormState} className="flex">
      {formState.message && (
        <div className="text-Kilamanjaro-800">{formState.message}</div>
      )}
      <div className="w-full sm:px-5 rounded-lg">
        <h1 className="text-Kilamanjaro-950 font-bold text-4xl mb-4">
          Create a Journal
        </h1>
        <div className="m-auto">
          <div>
            <input
              className="hidden"
              id="userId"
              type="text"
              name="userId"
              defaultValue={userId}
            />
          </div>
            <label
              htmlFor="description"
              className="text-Kilamanjaro-950 mb-2 block text-md"
            >
              Content
            </label>
            <div className="relative mb-4">
              <textarea
                className="block h-[150px] w-full rounded-md border border-Kilamanjaro-950 py-[9px] pl-3 text-md outline-2 placeholder:text-silverSand-400"
                id="description"
                name="description"
                placeholder="Enter your Content"
                required
              />
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
      Create Journal
    </button>
  );
}
