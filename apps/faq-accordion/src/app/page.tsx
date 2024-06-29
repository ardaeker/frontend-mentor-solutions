"use client";
import Image from "next/image";
import { type SVGProps } from "react";

import * as Accordion from "@radix-ui/react-accordion";

import patternMobile from "@/assets/images/background-pattern-mobile.svg";
import patternDesktop from "@/assets/images/background-pattern-desktop.svg";

const faqs = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8EEFF] p-6">
      <Image
        src={patternMobile}
        alt=""
        loading="eager"
        className="absolute left-0 right-0 top-0 max-h-60 w-full object-cover sm:hidden"
      />
      <Image
        src={patternDesktop}
        alt=""
        loading="eager"
        className="absolute left-0 right-0 top-0 hidden max-h-60 w-full object-cover sm:block sm:max-h-80"
      />

      <section className="relative w-full max-w-[600px] rounded-lg bg-white p-6 shadow-[0px_32px_56px_0px_rgba(80,0,118,0.10)] sm:rounded-2xl sm:p-10">
        <div>
          <div className="flex items-center gap-x-6">
            <Star className="size-6 sm:size-10" />
            <h1 className="text-[2rem] font-bold leading-[4.125rem] text-[#301534] sm:text-[3.5rem]">FAQs</h1>
          </div>

          <Accordion.Root type="single" defaultValue="0" collapsible className="mt-6 sm:mt-8">
            {faqs.map((faq, index) => (
              <div key={index}>
                <Accordion.Item value={`${index}`}>
                  <Accordion.Header className="my-5 sm:my-6">
                    <Accordion.Trigger className="group flex w-full items-center justify-between text-start">
                      <span className="block text-base font-semibold leading-normal text-[#301534] transition-colors duration-200 group-hover:text-[#AD28EB] sm:text-lg sm:leading-[1.3125rem]">
                        {faq.question}
                      </span>
                      <span className="block">
                        <span className="group-data-[state='open']:hidden">
                          <Plus />
                        </span>
                        <span className="group-data-[state='closed']:hidden">
                          <Minus />
                        </span>
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-sm leading-[1.3125rem] text-[#8B6990] sm:text-base">
                    <p className="mb-5 sm:mb-6">{faq.answer}</p>
                  </Accordion.Content>
                </Accordion.Item>
                {faqs.length - 1 > index && <div className="h-px w-full bg-[#F8EEFF]" />}
              </div>
            ))}
          </Accordion.Root>
        </div>
      </section>
    </main>
  );
}

function Star(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 41" {...props}>
      <path
        fill="#AD28EB"
        d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
      />
    </svg>
  );
}

function Plus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31" {...props}>
      <path
        fill="#AD28EB"
        d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
      />
    </svg>
  );
}

function Minus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31" {...props}>
      <path
        fill="#301534"
        d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
      />
    </svg>
  );
}
