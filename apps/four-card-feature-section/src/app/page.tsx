import { type ElementType } from "react";
import { Calculator, Karma, Supervisor, TeamBuilder } from "@/assets/icons";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FAFAFA] p-6 xl:py-[4.875rem]">
      <section>
        <div className="text-center">
          <h1 className="sm:tracing-[.0156em] text-2xl font-extralight leading-9 tracking-[.0104em] text-[#4D4F62] sm:text-4xl sm:leading-[3.375rem]">
            Reliable, efficient delivery
            <strong className="block font-semibold">Powered by Technology</strong>
          </h1>
          <p className="mx-auto mt-4 max-w-[33.75rem] text-[.9375rem] font-normal leading-[1.5625rem] tracking-[.0065em] text-[#4D4F62] opacity-50">
            Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is
            successful
          </p>
        </div>
        <div className="mt-[4.75rem] grid place-content-center gap-y-[1.5625rem] sm:grid-cols-2 sm:gap-x-[1.5625rem] xl:mt-16 xl:grid-cols-3 xl:grid-rows-2 xl:gap-[1.875rem]">
          <Card
            color="#44D3D2"
            title="Supervisor"
            description="Monitors activity to identify project roadblocks"
            icon={Supervisor}
            className="xl:row-span-2 xl:self-center"
          />

          <Card
            color="#EA5454"
            title="Team Builder"
            description="Scans our talent network to create the optimal team for your project"
            icon={TeamBuilder}
            className="xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-2"
          />
          <Card
            color="#FCAE4A"
            title="Karma"
            description="Regularly evaluates our talent to ensure quality"
            icon={Karma}
            className="xl:col-start-2 xl:col-end-3 xl:row-start-2 xl:row-end-3"
          />
          <Card
            color="#549EF2"
            title="Calculator"
            description="Uses data from past projects to provide better delivery estimates"
            icon={Calculator}
            className="xl:row-span-2 xl:self-center"
          />
        </div>
      </section>
    </main>
  );
}

interface CardProps {
  color: string;
  title: string;
  description: string;
  icon: ElementType;
  className?: string;
}

function Card({ color, title, description, icon, className }: CardProps) {
  const Icon = icon;
  return (
    <div
      className={`max-w-[21.875rem] overflow-hidden rounded-lg bg-white shadow-[0px_15px_30px_-11px_rgba(131,166,210,0.50)] ${className}`}
    >
      <div style={{ backgroundColor: color }} className="h-[3.552px] w-full" />
      <div className="mt-[1.4656rem] flex flex-col gap-y-[2.0625rem] pb-7 pl-[1.8125rem] pr-7 xl:mt-7 xl:gap-y-10 xl:px-8 xl:pb-8">
        <div>
          <h2 className="text-xl font-semibold leading-[1.875rem] text-[#4D4F62]">{title}</h2>
          <p className="ml-[.0625rem] mt-[.0625rem] text-[.8125rem] leading-[1.4375rem] tracking-[.0056em] text-[#4D4F62] opacity-50 xl:mt-[.375rem]">
            {description}
          </p>
        </div>
        <div className="self-end">
          <Icon className="size-[3.5625rem] xl:size-16" />
        </div>
      </div>
    </div>
  );
}
