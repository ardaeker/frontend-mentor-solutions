import Image from "next/image";

import { SVGProps } from "react";

import illustration from "@/assets/images/illustration-hero.svg";
import patternMobile from "@/assets/images/pattern-background-mobile.svg";
import patternDesktop from "@/assets/images/pattern-background-desktop.svg";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#E0E8FF] p-6">
      <Image
        src={patternMobile}
        alt=""
        className="absolute left-0 top-0 max-h-[12.125rem] w-full object-cover object-bottom sm:hidden"
      />
      <Image
        src={patternDesktop}
        alt=""
        className="absolute left-0 top-0 hidden max-h-[27.3125rem] w-full object-cover object-bottom sm:block"
      />
      <article className="relative w-full min-w-min max-w-[28.125rem] overflow-hidden rounded-[1.25rem] bg-white shadow-[0px_40px_40px_-20px_rgba(13,48,189,0.15)]">
        <Image src={illustration} alt="" className="max-h-40 object-cover object-top sm:max-h-[13.75rem]" />
        <div className="px-6 py-8 text-center sm:px-12 sm:pb-[3rem] sm:pt-[2.8125rem]">
          <h1 className="text-[1.375rem] font-black leading-[1.8125rem] text-[#1F2E55] sm:text-[1.75rem] sm:leading-[2.3125rem]">
            Order Summary
          </h1>
          <p className="mt-4 text-[.9375rem] font-medium leading-[1.5625rem] text-[#717FA6] sm:mt-[1.0625rem] sm:text-base sm:leading-[1.625rem]">
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </p>
          <div className="mt-6 flex items-center justify-between rounded-[.6875rem] bg-[#F7F9FF] p-4 pt-[1.0625rem] sm:mt-5 sm:px-6 sm:py-[1.5625rem]">
            <div className="flex min-w-min items-center gap-x-5">
              <Music />
              <div>
                <span className="block text-sm font-black leading-[1.1875rem] text-[#1F2E55] sm:text-base sm:leading-[1.3125rem]">
                  Annual Plan
                </span>
                <span className="mt-[.1875rem] block text-sm font-medium leading-[1.1875rem] text-[#717FA6] sm:mt-1.5 sm:text-base sm:leading-[1.3125rem]">
                  $59.99/year
                </span>
              </div>
            </div>
            <button className="text-[.8125rem] font-bold leading-[1.0625rem] text-[#382AE1] underline transition-colors duration-200 hover:text-[#766CF1] hover:no-underline sm:text-sm sm:leading-[1.1875rem]">
              Change
            </button>
          </div>
          <button className="mt-6 block w-full rounded-[.6875rem] bg-[#382AE1] py-[.9375rem] text-[.9375rem] font-black leading-5 text-white shadow-[0px_20px_20px_0px_rgba(56,42,225,0.19)] transition-colors duration-200 hover:bg-[#766CF1] sm:mt-8 sm:text-[.9375rem] sm:leading-5">
            Proceed to Payment
          </button>
          <button className="mx-auto mt-6 block text-[.9375rem] font-black leading-5 text-[#717FA6] transition-colors duration-200 hover:text-[#1F2E55] sm:mt-8 sm:text-[.9375rem] sm:leading-5">
            Cancel Order
          </button>
        </div>
      </article>
    </main>
  );
}

function Music() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <g fill="none" fill-rule="evenodd">
        <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
        <path
          fill="#717FA6"
          fill-rule="nonzero"
          d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
        />
      </g>
    </svg>
  );
}
