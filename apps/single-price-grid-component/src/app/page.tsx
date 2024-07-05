import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <h1 className="sr-only">Single price grid component</h1>
      <section className="grid w-full min-w-[311px] max-w-[311px] grid-cols-1 overflow-hidden overflow-x-auto rounded-lg shadow-[0px_15px_30px_0px_rgba(0,81,171,0.15)] md:max-w-[635px] md:grid-cols-2">
        <div className="bg-white px-6 pb-8 pt-7 md:col-span-2 md:p-10">
          <h2 className="text-xl font-bold leading-[1.4375rem] -tracking-[.0156em] text-[#2AB3B1] sm:text-2xl sm:leading-7 sm:-tracking-[.0187em]">
            Join our community
          </h2>
          <p className="mt-6 text-[.9375rem] font-bold leading-5 -tracking-[-0.0117em] text-[#C0DF33] sm:text-lg sm:leading-[1.3125rem] sm:-tracking-[.0141em]">
            30-day, hassle-free money back guarantee
          </p>
          <p className="mt-4 text-sm leading-[1.625rem] -tracking-[.0109em] text-[#9AA7BE] sm:mt-[.6875rem] sm:text-base sm:leading-[1.625rem] sm:-tracking-[.0125em]">
            Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who
            are serious about honing their skills.
          </p>
        </div>
        <div className="bg-[#2AB3B1] p-6 md:p-10 md:pb-[2.4375rem]">
          <h3 className="text-lg font-bold leading-[1.3125rem] -tracking-[.0141em] text-white">Monthly Subscription</h3>
          <div className="mt-[1.125rem] flex min-w-min flex-nowrap items-center gap-x-[.6875rem]">
            <span className="text-[2rem] font-bold leading-[2.3125rem] -tracking-[.025em] text-white">$29</span>
            <span className="text-nowrap text-base leading-[1.625rem] -tracking-[.0125em] text-white/50">
              per month
            </span>
          </div>
          <p className="mt-1 text-base leading-[1.625rem] -tracking-[.0125em] text-white">
            Full access for less than $1 a day
          </p>
          <Link
            href="#"
            className="mt-[1.625rem] block w-full rounded-[.3125rem] bg-[#C0DF33] pb-[.875rem] pt-[.9375rem] text-center text-base font-bold leading-[1.1875rem] -tracking-[.0125em] text-white shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] transition-all duration-200 hover:bg-[rgba(192,233,51,1)] hover:shadow-none"
          >
            Sign Up
          </Link>
        </div>
        <div className="bg-[#4ABFBD] p-6 md:p-10">
          <h3 className="text-lg font-bold leading-[1.3125rem] -tracking-[.0141em] text-white">Why Us</h3>
          <ul className="mt-[1.125rem] text-sm leading-5 -tracking-[.0109em] text-white/75">
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
