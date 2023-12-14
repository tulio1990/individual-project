import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import MyReviews from "@/components/ui/profile/MyReviews";
import { fetchReviewsByUserId, fetchUserByEmail } from "@/lib/data";
import { getServerSession } from "next-auth";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Reviews - Journal Life",
};
export default async function ProfileReviews() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email as string;
  const getInfoUser = await fetchUserByEmail(userEmail);
  const userId = getInfoUser.id as string;
  const getReviews = await fetchReviewsByUserId(userId);

  return (
    <div className="flex flex-col flex-1 mx-7 my-10 gap-y-5">
      <h2 className="text-3xl font-bold text-Kilamanjaro-950">My Reviews</h2>
      <div>
        <MyReviews reviews={getReviews} />
      </div>
    </div>
  );
}
