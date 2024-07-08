import Image from "next/image";
import { type SVGProps } from "react";
import avatar from "@/assets/images/image-victor.jpg";
export default function Page() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#19A1AE] p-6">
      <BackgroundPattern
        side="top"
        className="absolute -left-[410px] -top-[355px] h-[621px] w-[622px] rotate-[135] sm:-left-[17.8125rem] sm:-top-[31.8125rem] sm:h-[61rem] sm:w-[61.125rem]"
      />
      <section className="relative z-10 min-w-72 max-w-[20.4375rem] overflow-hidden rounded-[15px] bg-white shadow-[0px_50px_100px_-20px_rgba(8,70,94,0.50)] sm:max-w-[21.875rem]">
        <CardPattern />
        <div>
          <Image
            src={avatar}
            alt="Victor Crest"
            className="mx-auto -mt-[43px] size-24 rounded-full border-[5px] border-white"
          />
          <div className="mx-auto mt-6 flex items-center justify-center gap-x-[.5313rem]">
            <h1 className="text-lg font-bold leading-[1.125rem] text-[#2E3349]">Victor Crest</h1>
            <span className="inline-block text-lg leading-[1.125rem] text-[#6B7082]">26</span>
          </div>
          <address className="mt-[.8125rem] block text-center text-sm not-italic leading-[.875rem] text-[#6B7082]">
            London
          </address>
          <div className="mt-7 h-px w-full bg-[#E8E9EC]" />
          <div className="flex items-center justify-center py-6">
            <div className="space-y-[.5625rem]">
              <span className="block text-center text-lg font-bold uppercase leading-[1.125rem] text-[#2E3349]">
                80k
              </span>
              <span className="block text-center text-[.625rem] leading-[.625rem] tracking-[.0938em] text-[#6B7082]">
                Followers
              </span>
            </div>
            <div className="ml-[2.375rem] space-y-[.5625rem] sm:ml-[2.875rem]">
              <span className="block text-center text-lg font-bold uppercase leading-[1.125rem] text-[#2E3349]">
                803k
              </span>
              <span className="block text-center text-[.625rem] leading-[.625rem] tracking-[.0938em] text-[#6B7082]">
                Likes
              </span>
            </div>
            <div className="ml-[2.875rem] space-y-[.5625rem] sm:ml-[3.375rem]">
              <span className="block text-center text-lg font-bold uppercase leading-[1.125rem] text-[#2E3349]">
                1.4k
              </span>
              <span className="block text-center text-[.625rem] leading-[.625rem] tracking-[.0938em] text-[#6B7082]">
                Photos
              </span>
            </div>
          </div>
        </div>
      </section>
      <BackgroundPattern
        side="bottom"
        className="absolute -bottom-[311px] -right-[412px] h-[621px] w-[622px] sm:-bottom-[39.5rem] sm:-right-[14.375rem] sm:h-[61rem] sm:w-[61.125rem]"
      />
    </main>
  );
}

interface BackgroundPatternProps extends SVGProps<SVGSVGElement> {
  side: "top" | "bottom";
}

function BackgroundPattern(props: BackgroundPatternProps) {
  const { side, ...rest } = props;
  if (side === "top") {
    return (
      <svg viewBox="0 0 978 978" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <defs>
          <linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="ab">
            <stop stopColor="#0989B4" stopOpacity="0" offset="0%" />
            <stop stopColor="#53FFEE" offset="99.94%" />
          </linearGradient>
        </defs>
        <ellipse
          fill="url(#ab)"
          transform="rotate(-135 489 489)"
          cx="489"
          cy="489"
          rx="489"
          ry="488"
          fillRule="evenodd"
          opacity=".5"
        />
      </svg>
    );
  }

  if (side === "bottom") {
    return (
      <svg viewBox="0 0 978 978" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <defs>
          <linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="a">
            <stop stopColor="#0989B4" stopOpacity="0" offset="0%" />
            <stop stopColor="#53FFEE" offset="99.94%" />
          </linearGradient>
        </defs>
        <ellipse
          fill="url(#a)"
          transform="scale(1 -1) rotate(45 1669.55 0)"
          cx="489"
          cy="489"
          rx="489"
          ry="488"
          fillRule="evenodd"
          opacity=".25"
        />
      </svg>
    );
  }
}

function CardPattern(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="max-h-[8.75rem] w-full overflow-hidden bg-[#41CBD3]">
      <svg width="350" height="140" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
          <linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="c">
            <stop stopColor="#0989B4" stopOpacity="0" offset="0%" />
            <stop stopColor="#53FFEE" offset="99.94%" />
          </linearGradient>
          <linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="d">
            <stop stopColor="#0989B4" stopOpacity="0" offset="0%" />
            <stop stopColor="#53FFEE" offset="99.94%" />
          </linearGradient>
          <path id="abc" d="M0 0h350v140H0z" />
        </defs>
        <g fill="none" fillRule="evenodd">
          <use fill="#41CBD3" />
          <g mask="url(#b)" opacity=".5">
            <g transform="translate(-11 -4)">
              <ellipse fill="url(#c)" transform="rotate(90 60.479 14.8)" cx="60.479" cy="14.8" rx="14.8" ry="14.834" />
              <ellipse fill="url(#d)" transform="rotate(180 14.834 14.8)" cx="14.834" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse fill="url(#d)" cx="151.767" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse
                fill="url(#c)"
                transform="rotate(-90 106.123 14.8)"
                cx="106.123"
                cy="14.8"
                rx="14.8"
                ry="14.834"
              />
              <ellipse
                fill="url(#c)"
                transform="rotate(90 243.055 14.8)"
                cx="243.055"
                cy="14.8"
                rx="14.8"
                ry="14.834"
              />
              <ellipse
                fill="url(#d)"
                transform="rotate(180 197.411 14.8)"
                cx="197.411"
                cy="14.8"
                rx="14.834"
                ry="14.8"
              />
              <ellipse fill="url(#d)" cx="334.344" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse fill="url(#c)" transform="rotate(-90 288.7 14.8)" cx="288.699" cy="14.8" rx="14.8" ry="14.834" />
            </g>
            <g transform="translate(-11 91.63)">
              <ellipse fill="url(#c)" transform="rotate(90 60.479 14.8)" cx="60.479" cy="14.8" rx="14.8" ry="14.834" />
              <ellipse fill="url(#d)" transform="rotate(180 14.834 14.8)" cx="14.834" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse fill="url(#d)" cx="151.767" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse
                fill="url(#c)"
                transform="rotate(-90 106.123 14.8)"
                cx="106.123"
                cy="14.8"
                rx="14.8"
                ry="14.834"
              />
              <ellipse
                fill="url(#c)"
                transform="rotate(90 243.055 14.8)"
                cx="243.055"
                cy="14.8"
                rx="14.8"
                ry="14.834"
              />
              <ellipse
                fill="url(#d)"
                transform="rotate(180 197.411 14.8)"
                cx="197.411"
                cy="14.8"
                rx="14.834"
                ry="14.8"
              />
              <ellipse fill="url(#d)" cx="334.344" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse fill="url(#c)" transform="rotate(-90 288.7 14.8)" cx="288.699" cy="14.8" rx="14.8" ry="14.834" />
            </g>
            <g transform="translate(-11 43.815)">
              <ellipse fill="url(#c)" transform="rotate(-90 60.479 14.8)" cx="60.479" cy="14.8" rx="14.8" ry="14.834" />
              <ellipse fill="url(#d)" cx="14.834" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse fill="url(#d)" cx="151.767" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse
                fill="url(#c)"
                transform="rotate(90 106.123 14.8)"
                cx="106.123"
                cy="14.8"
                rx="14.8"
                ry="14.834"
              />
              <ellipse
                fill="url(#c)"
                transform="rotate(-90 243.055 14.8)"
                cx="243.055"
                cy="14.8"
                rx="14.8"
                ry="14.834"
              />
              <ellipse fill="url(#d)" cx="197.411" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse fill="url(#d)" cx="334.344" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse fill="url(#c)" transform="rotate(90 288.7 14.8)" cx="288.699" cy="14.8" rx="14.8" ry="14.834" />
            </g>
            <g transform="translate(11.822 18.77)">
              <ellipse fill="url(#c)" transform="rotate(90 60.479 14.8)" cx="60.479" cy="14.8" rx="14.8" ry="14.834" />
              <ellipse fill="url(#d)" transform="rotate(180 14.834 14.8)" cx="14.834" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse fill="url(#d)" cx="151.767" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse
                fill="url(#c)"
                transform="rotate(-90 106.123 14.8)"
                cx="106.123"
                cy="14.8"
                rx="14.8"
                ry="14.834"
              />
              <ellipse
                fill="url(#c)"
                transform="rotate(90 243.055 14.8)"
                cx="243.055"
                cy="14.8"
                rx="14.8"
                ry="14.834"
              />
              <ellipse
                fill="url(#d)"
                transform="rotate(180 197.411 14.8)"
                cx="197.411"
                cy="14.8"
                rx="14.834"
                ry="14.8"
              />
              <ellipse fill="url(#d)" cx="334.344" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse fill="url(#c)" transform="rotate(-90 288.7 14.8)" cx="288.699" cy="14.8" rx="14.8" ry="14.834" />
            </g>
            <g transform="translate(11.822 114.4)">
              <ellipse fill="url(#c)" transform="rotate(90 60.479 14.8)" cx="60.479" cy="14.8" rx="14.8" ry="14.834" />
              <ellipse fill="url(#d)" transform="rotate(180 14.834 14.8)" cx="14.834" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse fill="url(#d)" cx="151.767" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse
                fill="url(#c)"
                transform="rotate(-90 106.123 14.8)"
                cx="106.123"
                cy="14.8"
                rx="14.8"
                ry="14.834"
              />
              <ellipse
                fill="url(#c)"
                transform="rotate(90 243.055 14.8)"
                cx="243.055"
                cy="14.8"
                rx="14.8"
                ry="14.834"
              />
              <ellipse
                fill="url(#d)"
                transform="rotate(180 197.411 14.8)"
                cx="197.411"
                cy="14.8"
                rx="14.834"
                ry="14.8"
              />
              <ellipse fill="url(#d)" cx="334.344" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse fill="url(#c)" transform="rotate(-90 288.7 14.8)" cx="288.699" cy="14.8" rx="14.8" ry="14.834" />
            </g>
            <g transform="translate(11.822 66.585)">
              <ellipse fill="url(#c)" transform="rotate(-90 60.479 14.8)" cx="60.479" cy="14.8" rx="14.8" ry="14.834" />
              <ellipse fill="url(#d)" cx="14.834" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse fill="url(#d)" cx="151.767" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse
                fill="url(#c)"
                transform="rotate(90 106.123 14.8)"
                cx="106.123"
                cy="14.8"
                rx="14.8"
                ry="14.834"
              />
              <ellipse
                fill="url(#c)"
                transform="rotate(-90 243.055 14.8)"
                cx="243.055"
                cy="14.8"
                rx="14.8"
                ry="14.834"
              />
              <ellipse fill="url(#d)" cx="197.411" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse fill="url(#d)" cx="334.344" cy="14.8" rx="14.834" ry="14.8" />
              <ellipse fill="url(#c)" transform="rotate(90 288.7 14.8)" cx="288.699" cy="14.8" rx="14.8" ry="14.834" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
