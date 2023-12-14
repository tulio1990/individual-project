import {
  heroImagesSection1,
  heroImagesSection2,
  heroImagesSection3,
} from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-silverSand-50">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-3xl font-bold tracking-tight text-Kilamanjaro-950 sm:text-2xl">
            Creating the best memories of our lives: Welcome to Journal Life
            </h1>
            <p className="mt-4 text-xl text-Kilamanjaro-950">
            By keeping a record of your life, there is a record of hope for your 
            future generation.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {heroImagesSection1.map((image) => (
                        <div className={image.class} key={image.name}>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {heroImagesSection2.map((image) => (
                        <div className={image.class} key={image.name}>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {heroImagesSection3.map((image) => (
                        <div className={image.class} key={image.name}>
                          <Image 
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/auth/register"
                className="inline-block rounded-md border border-transparent bg-Kilamanjaro-950 px-8 py-3 text-center font-medium text-silverSand-50 hover:bg-silverSand-50 hover:text-Kilamanjaro-950"
              >
                Join the Journal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
