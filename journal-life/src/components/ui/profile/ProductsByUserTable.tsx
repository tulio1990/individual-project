import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchJournalsByUserId, fetchUserByEmail } from "@/lib/data";
import { getServerSession } from "next-auth";
import Image from "next/image";
import {
  DeleteProductButton,
  DetailsProductsButton,
  UpdateProductButton,
} from "../dashboard/buttons/Buttons";
import Pagination from "../dashboard/pagination/Pagination";
import { formatCurrency } from "@/lib/utils";

export async function ProductsByUserTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email as string;
  const getInfoUser = await fetchUserByEmail(userEmail);
  const userId = getInfoUser.id as string;
  const { products, totalProducts } = await fetchJournalsByUserId(
    userId,
    query,
    currentPage
  );

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block lg:min-w-full max-w-full align-middle">
        <div className="rounded-lg bg-silverSand-100 p-2 md:pt-0 scroll-smooth overflow-x-auto">
          <table className="min-w-full text-silverSand-950 table scroll-auto">
            <thead className="rounded-lg text-left text-md font-bold">
              <tr>
                <td
                  scope="col"
                  className="px-4 py-5 font-medium text-sm sm:pl-6"
                >
                  Image
                </td>
                <td scope="col" className="px-3 py-5 font-medium text-sm">
                  Journal Content
                </td>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-silverSand-50 text-silverSand-950 ">
              {products?.map((item) => (
                <tr
                  key={item.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalProducts} />
      </div>
    </div>
  );
}
