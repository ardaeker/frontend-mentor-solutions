import Link from "next/link";
import Image from "next/image";
import avatar from "@/assets/images/image-avatar.webp";
import illustration from "@/assets/images/illustration-article.svg";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F4D04E] p-6">
      <article className="w-full max-w-96 space-y-6 rounded-[20px] border border-[#111111] bg-white p-6 shadow-[8px_8px_0px_0px_#000000] transition-all duration-200 has-[h1:hover]:shadow-[16px_16px_0px_0px_#000000]">
        <Image src={illustration} alt="" className="rounded-[10px]" />
        <div className="space-y-3">
          <span className="inline-block rounded bg-[#F4D04E] px-3 py-1 text-xs font-extrabold leading-[1.125rem] text-[#111111] sm:text-sm sm:leading-[1.3125rem]">
            Learning
          </span>
          <p className="text-xs font-medium leading-[1.125rem] text-[#111111] sm:text-sm sm:leading-[1.3125rem]">
            Published <time>21 Dec 2024</time>
          </p>
          <h1 className="inline-block text-xl font-extrabold leading-[1.875rem] text-[#111111] transition-colors duration-200 hover:text-[#F4D04E] sm:text-2xl sm:leading-9">
            <Link href="#">HTML & CSS foundations</Link>
          </h1>
          <p className="text-sm font-medium leading-[1.3125rem] text-[#7F7F7F] sm:text-base">
            These languages are the backbone of every website, defining structure, content, and presentation.
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <picture>
            <Image src={avatar} alt="Greg Hooper" className="size-8 rounded-full" />
          </picture>
          <Link href="#" className="text-sm font-extrabold leading-[1.3125rem] text-[#111111] hover:underline">
            Greg Hooper
          </Link>
        </div>
      </article>
    </main>
  );
}
