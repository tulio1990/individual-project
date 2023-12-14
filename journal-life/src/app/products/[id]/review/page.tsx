import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchUserByEmail } from "@/lib/data";
import { getServerSession } from "next-auth";

export default async function DetailsProductReview({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);
  const getUserEmail = session?.user?.email;
  const userId = await fetchUserByEmail(getUserEmail as string);
  const { id } = userId;
  return (
    <div className="min-h-screen mt-[85px] max-w-7xl m-auto">
      <h2 className="text-3xl font-bold text-Kilamanjaro-950">Create Product Review</h2>
      <div className="py-2">
        <div className="max-w-4xl px-5">
        </div>
      </div>
    </div>
  );
}
