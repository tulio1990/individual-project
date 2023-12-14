import { Divider } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { fetchUserByEmail } from "@/lib/data";
import EditInfoForm from "@/components/ui/profile/EditInfoForm";
import EditEmailForm from "@/components/ui/profile/EditEmailForm";
import EditPasswordForm from "@/components/ui/profile/EditPasswordForm";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email as string;
  const getInfoUser = await fetchUserByEmail(userEmail);
  const info = {
    id: getInfoUser.id || "",
    name: getInfoUser.name || "",
  };
  const infoEmail = {
    id: getInfoUser.id || "",
    email: getInfoUser.email || "",
  };
  const infoPassword = {
    id: getInfoUser.id || "",
    password: getInfoUser.password || "",
    newPassword: "",
  };

  return (
    <div className="flex flex-col flex-1 mx-7 my-10 gap-y-5">
      <h2 className="text-3xl font-bold text-Kilamanjaro-950">My Details</h2>
      <div>
        <h3>Personal Information</h3>
        <Divider className="my-3 h-1" />
        <div className="mt-5 lg:flex block">
          <div className="flex-[1.5]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit quisquam rerum.
            </p>
          </div>
          <EditInfoForm userData={info} />
        </div>
      </div>
      <div>
        <h3>E-mail address</h3>
        <Divider className="my-3 h-1" />
        <div className="mt-5 lg:flex block">
          <div className="flex-[1.5]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit quisquam rerum.
            </p>
          </div>
          <EditEmailForm userData={infoEmail} />
        </div>
      </div>
      <div>
        <h3>Password</h3>
        <Divider className="my-3 h-1" />
        <div className="mt-5 lg:flex block">
          <div className="flex-[1.5]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit quisquam rerum.
            </p>
          </div>
          <EditPasswordForm userData={infoPassword} />
        </div>
      </div>
    </div>
  );
}
