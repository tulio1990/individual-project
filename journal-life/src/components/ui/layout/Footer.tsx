import {
  contact,
  latestProducts,
  socialLinks,
  usefulLinks,
} from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const time = new Date().getFullYear();

  return (
    <div className="bg-silverSand-300">
      <div className="max-w-7xl m-auto px-4 divide-y">
        <div className="flex flex-col py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <div className="flex justify-center space-x-3 ">
              <Link
                href="/"
                className="flex items-center justify-center rounded-full"
              >
                <Image
                  className="h-auto w-auto"
                  src="/handcrafted-logo.jpeg"
                  alt="Your Company"
                  width={120}
                  height={60}
                  priority
                />
              </Link>
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex justify-between text-sm gap-x-3 gap-y-8 px-5 flex-wrap">
              <div className="space-y-3 text-Kilamanjaro-950 text-base">
                <h3 className="uppercase">Useful Links</h3>
                <ul className="space-y-1">
                  {usefulLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3 text-Kilamanjaro-950 text-base">
                <h3 className="uppercase">Contact</h3>
                <ul className="space-y-1">
                  {contact.map((contact) => (
                    <li key={contact.label}>
                      <Link href={contact.label}>{contact.label}</Link>
                    </li> 
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <div className="uppercase">Social media</div>
                <div className="flex justify-start space-x-3">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.platform}
                      href={link.href}
                      title={link.platform}
                      className="flex items-center p-1"
                    >
                      <Image
                        src={link.icon}
                        alt={link.platform}
                        width={30}
                        height={30}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-base text-center">
          © {time} Journal Life. All rights reserved.
        </div>
      </div>
    </div>
  );
}
