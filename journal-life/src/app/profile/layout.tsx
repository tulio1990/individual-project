import Sidebar from "@/components/ui/dashboard/sidebar/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { fetchUserByEmail } from "@/lib/data";
import { RoleType } from "@prisma/client";
import Link from "next/link";
import SidebarAccount from "@/components/ui/profile/SidebarAccount";
import AccountHeader from "@/components/ui/profile/HeaderProfile";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Account - Journal Life",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  /*  const session = await getServerSession(authOptions);
  const emailUser = session?.user?.email;
  const imageUrl = session?.user?.image;
  const name = session?.user?.name;

  const getRole = await fetchUserByEmail(emailUser as string);

  if (getRole.role != RoleType.ADMIN) {
    return (
      <div className="lg:h-[calc(100vh-19.3rem)] sm:h-[calc(100vh-7rem)] flex items-center justify-center m-auto px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-Kilamanjaro-950 sm:text-5xl">
            You don't have authorization
          </h1>
          <p className="mt-6 text-base leading-7 text-Kilamanjaro-950">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-Kilamanjaro-950 px-3.5 py-2.5 text-sm font-semibold text-silverSand-50 shadow-sm hover:bg-silverSand-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-silverSand-950"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    );
  } */

  return (
    <div className="bg-silverSand-100 pb-[75px]">
      <div className="max-w-7xl m-auto pt-[75px]">
        <div className="text">
          <AccountHeader />
        </div>
        <div className="lg:flex px-2 block">
          <div className="flex-1 rounded-lg">
            <SidebarAccount />
          </div>
          <div className="flex-[4] px-2 mx-5 min-h-screen py-2 bg-silverSand-50 shadow-2xl rounded-xl">{children}</div>
        </div>
      </div>
    </div>
  );
}
