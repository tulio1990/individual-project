import { fetchUsers, fetchUsersWithPagination } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { DeleteUserButton, DetailsUserButton, UpdateUserButton } from "../buttons/Buttons";

export default async function User({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const users = await fetchUsersWithPagination(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-silverSand-100  p-2 md:pt-0">
          <table className="hidden min-w-full text-silverSand-950 md:table">
            <thead className="rounded-lg text-left text-md font-bold">
              <tr>
                <td scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </td>
                <td scope="col" className="px-3 py-5 font-medium">
                  Email
                </td>
                <td scope="col" className="px-3 py-5 font-medium">
                  Role
                </td>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-silverSand-50 text-silverSand-950 ">
              {users?.map(
                ({
                  id,
                  name,
                  email,
                  imageProfile,
                  role,
                }: {
                  id: string;
                  name: string;
                  email: string;
                  imageProfile: string | null;
                  role: string;
                }) => (
                  <tr
                    key={id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src={imageProfile || "/no-profile-image.jpg"}
                          alt={`${name}'s profile picture`}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <p>{name}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">{email}</td>
                    <td className="whitespace-nowrap px-3 py-3 capitalize">
                      {role.toLocaleLowerCase()}
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <DetailsUserButton id={id} />
                        <UpdateUserButton id={id} />
                        <DeleteUserButton id={id} />
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
