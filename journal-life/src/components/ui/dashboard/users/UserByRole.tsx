import { fetchUserByRole } from "@/lib/data";
import { RoleType } from "@prisma/client";
import Image from "next/image";

export default async function UserByRole({ role }: { role: RoleType }) {
  const users = await fetchUserByRole(role);
  if (!users) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <h2>{role}</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <Image src={user.imageProfile || ""} alt={user.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
