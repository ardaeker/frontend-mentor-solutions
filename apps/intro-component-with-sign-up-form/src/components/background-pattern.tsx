import Image from "next/image";

import desktopPattern from "@/assets/images/bg-intro-desktop.png";
import mobilePattern from "@/assets/images/bg-intro-mobile.png";

export default function Background() {
  return (
    <>
      <Image src={desktopPattern} alt="" aria-hidden fill className="hidden xs:block xs:object-cover" loading="eager" />
      <Image src={mobilePattern} alt="" aria-hidden fill className="object-cover xs:hidden" loading="eager" />
    </>
  );
}
