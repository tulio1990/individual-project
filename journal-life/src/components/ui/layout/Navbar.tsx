"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames, { navigation } from "@/lib/constants";
import Link from "next/link";
import LoginSignUpButton from "./LoginSignUpDropdown";
import ProfileButton from "./ProfileDropdown";
import Image from "next/image";
import { getSession, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  const isSessionActive = session?.user?.name ? true : false;
  const imageUrl = session?.user?.image ||"/no-profile-image.jpg";
  
  return (
    <Disclosure as="nav" className="bg-silverSand-300 fixed top-0 w-full z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 md:items-center md:justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-Kilamanjaro-950 hover:bg-silverSand-50 hover:text-Kilamanjaro-950 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-silverSand-50">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu </span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-center md:justify-start">
                <Link href="/" className="flex flex-shrink-0 items-center">
                  <Image
                    className="h-[35px] lg:h-[45px] w-auto"
                    src="/handcrafted-logo.jpeg"
                    alt="Your Company"
                    width={80}
                    height={40}
                    priority
                  />
                </Link>
                <div className="hidden ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        href={item.href}
                        key={item.name}
                        className={classNames(
                          item.current
                            ? "bg-silverSand-50 text-silverSand-950"
                            : "text-Kilamanjaro-950 hover:bg-silverSand-950 hover:text-silverSand-50",
                          "rounded-md px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">

                {/* Profile/LoginSignUp dropdown */}
                {!isSessionActive ? <LoginSignUpButton /> : <ProfileButton imageUrl={imageUrl} />}
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div key="Navigation Items" className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-silverSand-50 text-silverSand-950"
                      : "text-Kilamanjaro-950 hover:bg-silverSand-950 hover:text-silverSand-50",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
