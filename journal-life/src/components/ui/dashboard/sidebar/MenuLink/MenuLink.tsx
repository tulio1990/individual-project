"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }: { item: any }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`p-5 mr-4 flex items-center gap-[10px] my-[5px] rounded-md hover:bg-silverSand-50 hover:text-silverSand-950 ${
        pathname === item.path ? "bg-silverSand-50 text-silverSand-950" : ""
      }`}
    >
      <p className="text-[32px]">{item.icon}</p>
      {item.title}
    </Link>
  );
};

export default MenuLink;
