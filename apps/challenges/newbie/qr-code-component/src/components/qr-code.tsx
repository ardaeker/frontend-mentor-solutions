import Image from "next/image";

export function QRCode() {
  return (
    <section className="rounded-card shadow-card w-full max-w-xs min-w-min space-y-6 bg-white p-4 pb-10">
      <Image
        src="/image-qr-code.png"
        alt="Scan QR Code to visit Frontend Mentor"
        className="rounded-card-image"
        width={288}
        height={288}
        priority
      />
      <div className="space-y-4 px-4 text-center">
        <h1 className="text-xl font-bold text-slate-900">Improve your front-end skills by building projects</h1>
        <p className="text-base">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </section>
  );
}
