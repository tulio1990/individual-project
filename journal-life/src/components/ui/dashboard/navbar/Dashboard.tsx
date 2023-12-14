"use client";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

export default function DashboardNavbar(){
  const pathname = usePathname();

  return (
    <div className="p-[20px] border-r-[10px] bg-silverSand-950 flex items-center justify-between z-50">
      <div className="text-Kilamanjaro-950 font-bold">{pathname.split("/").pop()}</div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-[10px] bg-silverSand-600 p-[10px] border-r-8">
          <MdSearch />
          <input type="text" placeholder="Search..." className="bg-silverSand-100 border-none text-silverSand-950" />
        </div>
        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

