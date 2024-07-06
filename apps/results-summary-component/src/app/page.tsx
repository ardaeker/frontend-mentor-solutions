import { Memory, Reaction, Verbal, Visual } from "@/assets/icons";
import Link from "next/link";

const scores = [
  {
    score: 80,
    category: "Reaction",
    icon: <Reaction />,
    textColor: "#F55",
    background: "linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #F55",
  },
  {
    score: 92,
    category: "Memory",
    icon: <Memory />,
    textColor: "#FFB21E",
    background: "linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #FFB21E",
  },
  {
    score: 61,
    category: "Verbal",
    icon: <Verbal />,
    textColor: "#00BB8F",
    background: "linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #00BB8F",
  },
  {
    score: 73,
    category: "Visual",
    icon: <Visual />,
    textColor: "#1125D6",
    background: "linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #1125D6",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen md:flex md:items-center md:justify-center md:bg-[#ECF2FF]">
      <h1 className="sr-only">Results summary component</h1>
      <section className="h-full w-full min-w-max bg-white pb-[1.875rem] md:flex md:max-w-[46rem] md:rounded-[2rem] md:pb-0 md:shadow-[0px_30px_60px_0px_rgba(61,108,236,0.15)]">
        <div className="rounded-b-[2rem] bg-[linear-gradient(180deg,#75F_0%,#6943FF_0.01%,#2F2CE9_100%)] pb-10 pt-6 shadow-[0px_30px_60px_0px_rgba(61,108,236,0.15)] md:w-full md:rounded-t-[32px] md:pb-[3.4375rem] md:pt-[2.375rem] md:shadow-none">
          <h2 className="text-center text-lg font-bold leading-[1.4375rem] text-[#CAC9FF] md:text-2xl md:leading-[1.9375rem]">
            Your Result
          </h2>
          <div className="mx-auto mt-6 flex size-[8.75rem] flex-col items-center justify-center rounded-full bg-[linear-gradient(180deg,#4D21C9_0%,rgba(37,33,201,0.00)_100%,rgba(37,33,201,0.00)_100%)] md:mt-[2.1875rem] md:size-[12.5rem]">
            <span className="block text-[3.5rem] font-extrabold leading-[4.5rem] text-white md:text-[4.5rem]">76</span>
            <span className="text-base font-bold leading-[1.3125rem] text-[#CAC9FF] opacity-[0.5168] md:mt-1 md:text-lg md:leading-[1.4375rem]">
              of 100
            </span>
          </div>
          <p className="mt-6 text-center text-2xl font-bold leading-[1.9375rem] text-white md:mt-7 md:text-[2rem] md:leading-[2.625rem]">
            Great
          </p>
          <p className="mx-auto mt-2 max-w-[16.25rem] text-center text-base font-medium leading-[1.3125rem] text-[#CAC9FF] md:mt-[14px] md:text-lg md:leading-[1.4375rem]">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
        <div className="mx-auto w-full max-w-[19.6875rem] pt-6 md:max-w-[23rem] md:px-10 md:pt-[2.375rem]">
          <h2 className="ml-0.5 text-lg font-bold leading-[1.4375rem] text-[#303B59] md:text-2xl md:leading-[1.9375rem]">
            Summary
          </h2>
          <ul className="mt-6 space-y-4 md:mt-7">
            {scores.map((score, index) => (
              <li key={index}>
                <Score {...score} />
              </li>
            ))}
          </ul>
          <Link
            href="#"
            className="relative mt-6 block overflow-hidden rounded-[8rem] bg-[#303B59] pb-4 pt-[1.0625rem] text-center text-lg font-bold leading-[1.4375rem] text-white after:absolute after:inset-0 after:bg-[linear-gradient(180deg,#75F_0%,#6943FF_0.01%,#2F2CE9_100%)] after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100 md:mt-[2.5625rem]"
          >
            <span className="relative z-10">Continue</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

interface ScoreProps {
  score: number;
  category: string;
  icon: React.ReactNode;
  textColor: string;
  background: string;
}

function Score({ score, category, icon, textColor, background }: ScoreProps) {
  return (
    <div
      style={{ color: textColor, background: background }}
      className="flex w-full items-center gap-x-3 rounded-xl border border-transparent px-4 pb-[1.0625rem] pt-[1rem] md:pb-[1rem] md:pt-[.9375rem]"
    >
      {icon}
      <p className="text-base font-medium leading-[1.3125rem] md:text-lg md:leading-[1.4375rem]">{category}</p>
      <div className="ml-auto text-base font-bold leading-[1.3125rem] text-[#303B59] md:text-lg md:leading-[1.4375rem]">
        <span className="inline-block">{score}</span>
        <span className="inline-block opacity-50">&nbsp;/ 100</span>
      </div>
    </div>
  );
}
