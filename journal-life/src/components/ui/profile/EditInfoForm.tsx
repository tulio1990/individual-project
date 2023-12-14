"use client";

import { UpdateUserPersonalInformation } from "@/lib/actions";
import { UserPersonalInfo } from "@/lib/types";

export default function EditInfoForm({
  userData,
}: {
  userData: UserPersonalInfo;
}) {
  const updateInfoWithId = UpdateUserPersonalInformation.bind(
    null,
    userData.id
  );
  return (
    <form action={updateInfoWithId} className="flex-[3.5]">
      <div>
        <label htmlFor="name">Name</label>
        <div className="mt-2">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="w-full px-3 py-2 text-sm border border-Kilamanjaro-950 rounded-md focus:outline-none focus:ring-2 focus:ring-silverSand-700 focus:border-silverSand-950"
            defaultValue={userData.name}
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
