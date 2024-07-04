import { Luxury, Sedans, Suvs } from "@/assets/icons";
import Link from "next/link";

const categories = [
  {
    id: 0,
    icon: <Sedans />,
    title: "Sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    href: "#",
    color: "#E28625",
  },
  {
    id: 1,
    icon: <Suvs />,
    title: "SUVs",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    href: "#",
    color: "#006971",
  },
  {
    id: 2,
    icon: <Luxury />,
    title: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ",
    href: "#",
    color: "#004140",
  },
];

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F2F2F2] p-6">
      <h1 className="sr-only">Categories</h1>
      <section className="mt-[2.5625rem] grid w-full min-w-min max-w-[20.4375rem] grid-cols-1 overflow-x-auto rounded-lg lg:max-w-[57.5rem] lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.id}
            style={{ backgroundColor: category.color }}
            className="min-w-min p-12 lg:pl-12 lg:pr-[2.9688rem] lg:pt-[3rem]"
          >
            <div>{category.icon}</div>
            <h2 className="mt-[2.1875rem] font-big-shoulders text-[2.5rem] font-bold uppercase leading-[3rem] text-[#F2F2F2]">
              {category.title}
            </h2>
            <p className="-ml-[.0313rem] mt-[1.5625rem] font-lexend-deca text-[.9375rem] leading-[1.5625rem] text-white/75">
              {category.description}
            </p>
            <Link
              href={category.href}
              style={{ color: category.color }}
              className="mt-[25px] inline-block w-[9.125rem] text-nowrap rounded-[1.5625rem] bg-[#F2F2F2] pb-3 pt-[.6875rem] text-center font-lexend-deca text-[.9375rem] leading-[1.5625rem] transition-all hover:bg-transparent hover:!text-white hover:ring-2 hover:ring-white lg:mt-[5.1875rem]"
            >
              Learn More
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
