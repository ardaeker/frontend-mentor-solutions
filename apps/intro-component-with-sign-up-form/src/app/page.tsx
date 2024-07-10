import { TrialForm } from "@/components/trial-form";
import Background from "@/components/background-pattern";
import { Toaster } from "@/components/ui/toaster";

export default function Page() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-[#FF7979] pb-10 pt-[5.5rem] xl:py-0">
      <Background />
      <div className="relative flex w-full flex-col items-center justify-center xl:flex-row xl:gap-x-[2.8125rem]">
        <div className="flex w-full max-w-[20.4375rem] flex-col items-center justify-center gap-y-4 sm:max-w-[32.8125rem] sm:gap-y-[.6875rem] xl:items-start">
          <h1 className="w-full text-center text-[1.75rem] font-bold leading-10 -tracking-[.0182rem] text-white xl:text-start xl:text-[3.125rem] xl:leading-[3.4375rem]">
            Learn to code by watching others
          </h1>
          <p className="w-full text-center text-base font-medium leading-[1.625rem] text-white xl:text-start">
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but
            understanding how developers think is invaluable.
          </p>
        </div>
        <TrialForm />
      </div>
      <Toaster />
    </main>
  );
}
