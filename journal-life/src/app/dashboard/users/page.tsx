import { CreateUserButton } from "@/components/ui/dashboard/buttons/Buttons";
import Pagination from "@/components/ui/dashboard/pagination/Pagination";
import Search from "@/components/ui/dashboard/search/Search";
import User from "@/components/ui/dashboard/users/Users";
import { fetchUsersPages } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Dashboard - Journal Life",
};

export default async function Users({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: number;
  };
}) {
  const query = searchParams?.query || "";

  const currentPage = Number(searchParams?.page || 1);

  const totalPages = await fetchUsersPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Users</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search Users ... " />
        <CreateUserButton />
      </div>
      {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}> */}
      <User query={query} currentPage={currentPage} />
      {/* </Suspense> */}
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div> 
    </div>
  );
}
