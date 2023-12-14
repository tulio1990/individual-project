import Sidebar from "@/components/ui/dashboard/sidebar/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { fetchUserByEmail } from "@/lib/data";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Journal Life",
};


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const emailUser = session?.user?.email;
  const imageUrl = session?.user?.image;
  const name = session?.user?.name;

  const getRole = await fetchUserByEmail(emailUser as string);

  return (
    <div className="lg:flex block mt-[75px] my-5 mx-2">
      <div className="flex-1 bg-kumera-600 rounded-lg">
        <Sidebar
          userName={name || "Admin User"}
          imageUrl={imageUrl || "/no-profile-image.jpg"}
        />
      </div>
      <div className="flex-[4] px-2 lg:mx-10">{children}</div>
    </div>
  );
}
