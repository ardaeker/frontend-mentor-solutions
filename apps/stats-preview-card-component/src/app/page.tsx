import Image from "next/image";

import mobilePicture from "@/assets/images/image-header-mobile.png";
import desktopPicture from "@/assets/images/image-header-desktop.png";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0A0C1C] p-6">
      <section className="w-full min-w-min max-w-[20.4375rem] overflow-hidden rounded-lg bg-[#1B1937] shadow-[0px_20px_20px_-10px_rgba(23,25,41,0.20)] xl:flex xl:max-w-[69.375rem] xl:flex-row-reverse xl:justify-between">
        <div className="relative">
          <picture>
            <source srcSet={mobilePicture.src} media="(max-width: 1279px)" />
            <source srcSet={desktopPicture.src} media="(min-width: 1280px)" />
            <Image
              className="h-60 w-full bg-[lightgray] brightness-[1.13] xl:h-full xl:w-[33.75rem]"
              src={desktopPicture}
              alt="Office workers collaborating and discussing data analytics to grow business efficiency."
            />
          </picture>

          <div className="pointer-events-none absolute inset-0 bg-[#AB5CDB] mix-blend-multiply" />
        </div>
        <div className="p-8 pt-10 xl:flex xl:flex-col xl:justify-between xl:pb-[3.6875rem] xl:pl-[4.5rem] xl:pr-0 xl:pt-[4.4375rem]">
          <div>
            <h1 className="-mx-[.0313rem] text-center text-[1.75rem] font-bold leading-8 text-white xl:mx-0 xl:max-w-[25.1875rem] xl:text-start xl:text-4xl xl:leading-[2.75rem]">
              Get <span className="text-[#AB5CDB]">insights</span> that help your business grow.
            </h1>
            <p className="mt-4 text-center text-[.9375rem] leading-[1.5625rem] text-white/75 xl:-ml-[.0313rem] xl:mt-[1.5625rem] xl:max-w-[23.375rem] xl:text-start">
              Discover the benefits of data analytics and make better decisions regarding revenue, customer experience,
              and overall efficiency.
            </p>
          </div>
          <div className="mt-10 space-y-6 xl:flex xl:max-w-[21.9688rem] xl:flex-row xl:items-center xl:justify-between xl:space-y-0">
            <div className="flex flex-col items-center gap-y-0.5 xl:items-start">
              <span className="text-2xl font-bold leading-[1.8125rem] text-white">10k+</span>
              <span className="font-lexend-deca text-xs uppercase leading-[1.5625rem] tracking-[.0625em] text-white/60 xl:-ml-[0.5px]">
                Companies
              </span>
            </div>
            <div className="flex flex-col items-center gap-y-0.5 xl:items-start">
              <span className="text-2xl font-bold leading-[1.8125rem] text-white">314</span>
              <span className="font-lexend-deca text-xs uppercase leading-[1.5625rem] tracking-[.0625em] text-white/60">
                Templates
              </span>
            </div>
            <div className="flex flex-col items-center gap-y-0.5 xl:items-start">
              <span className="text-2xl font-bold leading-[1.8125rem] text-white">12M+</span>
              <span className="font-lexend-deca text-xs uppercase leading-[1.5625rem] tracking-[.0625em] text-white/60">
                Queries
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
