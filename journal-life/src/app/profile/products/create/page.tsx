import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CreateProduct from "@/components/ui/profile/CreateProduct";
import { fetchUserByEmail } from "@/lib/data";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Create Journal- Journal Life",
};

export default async function ProfileCreateProduct() {
  const session = await getServerSession(authOptions);
  const getUserEmail = session?.user?.email;
  const userId = await fetchUserByEmail(getUserEmail as string);
  const { id } = userId;
  return (
    <div className="flex flex-col min-h-screen py-2">
      <div className="flex flex-col flex-[4]">
        <CreateProduct userId={id as string}/>
      </div>
    </div>
  );
}
