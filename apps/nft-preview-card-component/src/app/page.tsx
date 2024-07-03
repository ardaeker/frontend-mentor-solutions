import Link from "next/link";
import Image from "next/image";

import { SVGProps } from "react";

import avatar from "@/assets/images/image-avatar.png";
import equilibrium from "@/assets/images/image-equilibrium.jpg";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0D192C] p-6">
      <article className="w-full max-w-[21.875rem] rounded-[.9375rem] bg-[#15263F] p-6 shadow-[0px_25px_50px_0px_rgba(0,0,0,0.10)] sm:pb-8">
        <Link
          href="#"
          className="group/view relative block overflow-hidden rounded-lg"
          aria-label="Read more about Equilibrium #3429"
        >
          <Image
            src={equilibrium}
            alt=""
            className="h-[17.375rem] w-[17.375rem] object-cover sm:h-[18.875rem] sm:w-[18.875rem]"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-[rgba(0,255,248,0.503)] opacity-0 transition-opacity duration-200 group-hover/view:opacity-100">
            <View />
          </span>
        </Link>
        <Link href="#" className="text-white transition-colors duration-200 hover:text-[#00FFF8]">
          <h1 className="mt-6 text-[1.375rem] font-semibold leading-7">Equilibrium #3429</h1>
        </Link>
        <p className="mt-3 text-lg font-light leading-[1.625rem] text-[#8BACD9] sm:mt-4">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="mt-4 flex items-center justify-between sm:mt-6">
          <span className="flex items-center gap-x-[.405rem]">
            <Ethereum />
            <span className="text-[.9375rem] font-semibold leading-[1.1875rem] text-[#00FFF8] sm:text-base sm:leading-5">
              0.041 ETH
            </span>
          </span>
          <span className="flex items-center gap-x-[.4813rem]">
            <Clock />
            <span className="text-[.9375rem] leading-[1.1875rem] text-[#8BACD9] sm:text-base sm:leading-5">
              3 days left
            </span>
          </span>
        </div>
        <div className="my-4 h-px w-full bg-[#2E405A] md:mt-6" />
        <div className="flex items-center gap-x-4">
          <picture>
            <Image src={avatar} alt="Jules Wyvern" className="size-[2.0625rem] rounded-full border border-white" />
          </picture>
          <p className="text-[.9375rem] leading-[1.1875rem] text-[#8BACD9] sm:text-base sm:leading-5">
            Creation of&nbsp;
            <Link href="#" className="text-white transition-colors duration-200 hover:text-[#00FFF8]">
              Jules Wyvern
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}

function View(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h48v48H0z" />
        <path
          d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

function Ethereum(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
        fill="#00FFF8"
      />
    </svg>
  );
}

function Clock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
        fill="#8BACD9"
      />
    </svg>
  );
}
