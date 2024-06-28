import Image from "next/image";
import avatar from "@/assets/images/avatar-jessica.jpeg";

const socials = [
  { id: 0, platform: "GitHub", url: "https://github.com" },
  { id: 1, platform: "Frontend Mentor", url: "https://www.frontendmentor.io" },
  { id: 2, platform: "LinkedIn", url: "https://www.linkedin.com" },
  { id: 3, platform: "Twitter", url: "https://twitter.com" },
  { id: 4, platform: "Instagram", url: "https://www.instagram.com" },
];

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#141414] p-6">
      <article className="flex w-full min-w-min max-w-96 flex-col items-center space-y-6 rounded-xl bg-[#1F1F1F] p-6 sm:p-10">
        <picture>
          <Image src={avatar} alt="Jessica Randall" width={88} height={88} className="rounded-full" />
        </picture>
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold leading-9 text-white">Jessica Randall</h1>
          <address className="text-sm font-bold not-italic text-[#C4F82A]">London, United Kingdom</address>
        </div>
        <p className="text-sm text-white">&quot;Front-end developer and avid reader.&quot;</p>
        <ul className="w-full space-y-4">
          <p className="sr-only">Social Links</p>
          {socials.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                rel="noopener noreferrer"
                target="_blank"
                className="block w-full min-w-min rounded-lg bg-[#333333] p-3 text-center text-sm font-bold text-white transition-colors duration-200 hover:bg-[#C4F82A] hover:text-[#333333]"
              >
                {item.platform}
              </a>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}
