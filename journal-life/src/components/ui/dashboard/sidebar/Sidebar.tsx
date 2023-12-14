import Image from "next/image";

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./MenuLink/MenuLink";

const menuDashboardItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = ({userName, imageUrl} : {userName: string, imageUrl: string }) => {
  
  return (
    <div className="sticky pl-4">
      <div className="flex items-center gap-5 mb-5 mt-5">
        <Image
          className="border rounded-full flex-col"
          src={imageUrl}
          alt="Avatar Image"
          width="50"
          height="50"
        />
        <div className="flex flex-col">
          <span className="font-bold">{userName}</span>
          <span className="text-sm text-Kilamanjaro-950">Administrator</span>
        </div>
      </div>
      <ul>
        {menuDashboardItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-Kilamanjaro-950 font-bold text-sm my-[10px]">
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <div className="mr-3">
        <button className="p-3 my-3 flex items-center gap-[10px] cursor-pointer rounded-md w-full text-silverSand-50 hover:bg-silverSand-950">
          <MdLogout />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
