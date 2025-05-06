import { Checkout } from "@/components/checkout";
import { BackgroundPattern } from "@/components/background-pattern";

export default function Page() {
  return (
    <main className="relative flex min-h-screen items-center justify-center p-6">
      <Checkout />
      <BackgroundPattern />
    </main>
  );
}
