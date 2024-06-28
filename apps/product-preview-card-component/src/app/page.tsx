import Image from "next/image";
import type { SVGProps } from "react";

import productMobileImage from "@/assets/images/image-product-mobile.jpg";
import productDesktopImage from "@/assets/images/image-product-desktop.jpg";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F2EAE2] p-6">
      <article className="w-full min-w-min max-w-[343px] overflow-hidden rounded-[10px] sm:flex sm:max-w-[600px]">
        <div className="sm:flex-grow sm:basis-0">
          <picture>
            <source media="(max-width:639px)" srcSet={productMobileImage.src} />
            <source media="(min-width:640px)" srcSet={productDesktopImage.src} />
            <Image
              src={productDesktopImage}
              alt="Gabrielle Chanel Paris perfume bottle placed on a surface with green leaves around it"
              className="h-60 object-cover object-top sm:h-full"
            />
          </picture>
        </div>
        <div className="bg-white sm:flex-grow sm:basis-0">
          <div className="p-6 sm:p-8">
            <span className="font-montserrat block text-xs font-medium uppercase leading-normal tracking-[.3125em] text-[#6C7289]">
              Perfume
            </span>
            <h1 className="font-fraunces mt-3 text-[2rem] font-bold leading-8 text-[#1C232B] sm:mt-5">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="font-montserrat mt-4 text-sm font-medium leading-6 text-[#6C7289] sm:mt-6">
              A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of
              CHANNEL.
            </p>
            <div className="mt-6 flex items-center gap-x-[19px] sm:mt-[29px]">
              <span className="font-fraunces block text-[2rem] font-bold leading-8 text-[#3D8168]">$149.99</span>
              <span className="font-montserrat text-sm font-semibold leading-6 text-[#6C7289] line-through">
                $169.99
              </span>
            </div>
            <button className="mt-5 flex w-full items-center justify-center gap-x-3 rounded-lg bg-[#3D8168] py-4 transition-colors duration-200 hover:bg-[#1A4032] sm:mt-[30px]">
              <Cart />
              <span className="font-montserrat text-sm font-bold leading-none text-white">Add to Cart</span>
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}

function Cart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="15" height="16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
        fill="#FFF"
      />
    </svg>
  );
}
