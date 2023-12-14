import UserId from "@/components/ui/dashboard/users/UserById";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Detail - Journal Life",
};

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Users</h1>
      <UserId userId={params.id} />
    </div>
  );
}
