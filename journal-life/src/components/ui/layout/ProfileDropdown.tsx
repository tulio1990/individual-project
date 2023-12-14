"use client";

import Link from "next/link";
import classNames, { profileNavigation } from "@/lib/constants";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function ProfileDropdown({ imageUrl }: { imageUrl: string }) {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <Menu as="div" className="relative ml-3" key="Profile Dropdown">
      <div>
        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-silverSand-50 focus:ring-offset-2 focus:ring-offset-silverSand-950">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <Image
            className="h-8 w-8 rounded-full"
            src={imageUrl || "/no-profile-image.jpg"}
            alt="Profile image of the user"
            width={32}
            height={32}
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-Kilamanjaro-950 py-1 shadow-lg ring-1 ring-silverSand-50 ring-opacity-5 focus:outline-none">
          {profileNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <Link
                  href={item.href}
                  className={classNames(
                    active ? "bg-kumera-700 rounded-md" : "",
                    "block px-4 py-2 text-sm text-silverSand-50"
                  )}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
          <Menu.Item>
            {({ active }) => (
              <button
                className={classNames(
                  active ? "bg-kumera-700 rounded-md" : "",
                  "block px-4 py-2 text-sm text-silverSand-50 w-full text-left cursor-pointer"
                )}
                key="signup"
                onClick={handleSignOut}
              >
                <div className="md:block">Logout</div>
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
