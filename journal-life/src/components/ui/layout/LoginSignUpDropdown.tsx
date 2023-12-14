import classNames from "@/lib/constants";
import { Menu, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment } from "react";


export default function LoginSignUpDropdown() {
  return (
    <Menu as="div" className="relative ml-3" key="loginSignUpDropdown">
      <div>
        <Menu.Button className="relative flex rounded-full text-Kilamanjaro-950 text-sm focus:outline-none focus:ring-2 focus:ring-silverSand-50 focus:ring-offset-2 focus:ring-offset-silverSand-950 hover:text-Kilamanjaro-950 hover:bg-silverSand-50">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open User Login or Sign Up</span>
          <UserCircleIcon className="h-8 w-8" aria-hidden="true" />
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
          <Menu.Item>
            {({ active }) => (
              <Link
                key="login"                
                href="/auth/login"
                className={classNames(
                  active ? "bg-kumera-700 rounded-md" : "",
                  "block px-4 py-2 text-sm text-silverSand-50"
                )}
              >
                Login
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                key="signup"  
                href="/auth/register"
                className={classNames(
                  active ? "bg-kumera-700 rounded-md" : "",
                  "block px-4 py-2 text-sm text-silverSand-50"
                )}
              >
                Sign Up
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
