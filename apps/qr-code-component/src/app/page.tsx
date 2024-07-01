"use client";

import Image from "next/image";
import qrCode from "@/assets/images/image-qr-code.png";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#D5E1EF] p-6">
      <section className="w-full max-w-80 rounded-[1.25rem] bg-white p-4 pb-10 text-center shadow-[0px_25px_25px_0px_rgba(0,0,0,0.05)]">
        <picture>
          <Image
            src={qrCode}
            alt="QR Code"
            width={288}
            height={288}
            className="rounded-[.625rem]"
          />
        </picture>
        <h1 className="mt-6 text-[1.375rem] font-bold leading-7 text-[#1F314F]">
          Improve your front-end skills by building projects
        </h1>
        <p className="mx-auto mt-4 max-w-64 text-[.9375rem] leading-[1.1875rem] tracking-[.0118em] text-[#7D889E]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </section>
    </main>
  );
}
