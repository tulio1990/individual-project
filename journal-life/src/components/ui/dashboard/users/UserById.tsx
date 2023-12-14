import { fetchUserById } from "@/lib/data";
import Image from "next/image";

export default async function UserId({userId}: {userId: string}) {
    const user = await fetchUserById(userId);
    if (!user) {
        return <div>loading...</div>;
    } 
    const {id,name, email, imageProfile} = user;
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <Image src={ imageProfile|| ''} alt={name || "Image Profile"} />
        </div>
    );
}