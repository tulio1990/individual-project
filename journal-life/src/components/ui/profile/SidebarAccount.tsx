import Image from "next/image";

import {
  MdAccountCircle,
  MdReviews,
  MdShoppingBag,
} from "react-icons/md";
import MenuLink from "../dashboard/sidebar/MenuLink/MenuLink";


const myAccountMenu = [
  {
    title: "Pages",
    list: [
      {
        title: "My details",
        path: "/profile",
        icon: <MdAccountCircle />,
      },
      {
        title: "My Journal",
        path: "/profile/products",
        icon: <MdShoppingBag />,
      },
    ],
  }
];

export default function SidebarAccount() {
  
  return (
    <div className="sticky pt-10 pl-4">
      <ul>
        {myAccountMenu.map((cat) => (
          <li key={cat.title}>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};