"use client";

import { UpdateUserEmail } from "@/lib/actions";
import { UserEmailInfo } from "@/lib/types";
import { useState } from "react";


export default function EditEmailForm({
  userData,
}: {
  userData: UserEmailInfo;
}) {
  const updateInfoWithId = UpdateUserEmail.bind(
    null,
    userData.id
  );

  return (
    <form action={updateInfoWithId} className="flex-[3.5]">
      <div>
        <label htmlFor="email">E-mail</label>
        <div className="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            className="w-full px-3 py-2 text-sm border border-Kilamanjaro-950 rounded-md focus:outline-none focus:ring-2 focus:ring-silverSand-700 focus:border-silverSand-950"
            defaultValue={userData.email}
          />
        </div>
        <div className="mt-4 flex justify-start gap-4">
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
