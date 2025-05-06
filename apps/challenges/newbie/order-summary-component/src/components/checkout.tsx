import Image from "next/image";
import Link from "next/link";

function IconMusic() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" aria-hidden>
      <g fill="none" fillRule="evenodd">
        <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
        <path
          fill="#717FA6"
          fillRule="nonzero"
          d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
        />
      </g>
    </svg>
  );
}

function CheckoutIllustration() {
  return (
    <div className="relative h-[10rem] sm:h-[13.75rem]">
      <Image src="/illustration-hero.svg" alt="" className="object-cover" priority fill />
    </div>
  );
}

export function Checkout() {
  return (
    <section className="relative z-10 w-full max-w-[28.125rem] overflow-hidden rounded-[1.25rem] bg-white shadow-[0px_40px_40px_-20px_rgba(13,48,189,0.15)]">
      <CheckoutIllustration />
      <div className="px-6 py-8 sm:p-12 sm:pt-[2.8125rem]">
        <h1 className="text-center text-[1.375rem] leading-[1.8125rem] font-black text-[#1F2E55] sm:text-[1.75rem] sm:leading-[2.3125rem]">
          Order Summary
        </h1>
        <p className="mt-4 text-center text-[.9375rem] leading-[1.5625rem] font-medium sm:mt-[1.0625rem] sm:text-base sm:leading-[1.625rem]">
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
        </p>

        <div className="mt-6 rounded-[.6875rem] bg-[#F7F9FF] p-4 pt-[1.0625rem] sm:mt-5 sm:px-6 sm:py-[1.5625rem]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-5">
              <IconMusic />
              <div className="flex flex-col gap-y-[.1875rem] sm:gap-y-1.5">
                <span className="text-sm leading-[1.1875rem] font-black text-[#1F2E55] sm:text-base sm:leading-[1.3125rem]">
                  Annual Plan
                </span>
                <span className="text-sm leading-[1.1875rem] font-medium sm:text-base sm:leading-[1.3125rem]">
                  $59.99/year
                </span>
              </div>
            </div>
            <Link
              href="#"
              className="text-[.8125rem] leading-[1.0625rem] font-bold text-[#382AE1] underline transition-colors duration-300 hover:text-[#766CF1] hover:no-underline sm:text-sm sm:leading-[1.1875rem]"
            >
              Change
            </Link>
          </div>
        </div>

        <button className="mt-6 h-[3.125rem] w-full rounded-[.6875rem] bg-[#382AE1] p-[.9375rem] text-[.9375rem] leading-5 font-black text-white shadow-[0px_20px_20px_0px_rgba(56,42,225,0.19)] transition-colors duration-300 hover:bg-[#766CF1] sm:mt-8">
          Proceed to Payment
        </button>

        <button className="mx-auto mt-6 block text-[.9375rem] leading-5 font-black transition-colors duration-300 hover:text-[#1F2E55] sm:mt-8">
          Cancel Order
        </button>
      </div>
    </section>
  );
}
