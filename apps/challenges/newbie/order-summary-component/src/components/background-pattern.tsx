import { getImageProps } from "next/image";

export function BackgroundPattern() {
  const common = { alt: " ", fill: true, priority: true, sizes: "100vw" };
  const {
    props: { src: mobilePattern },
  } = getImageProps({ ...common, src: "/background-pattern-mobile.svg" });
  const {
    props: { src: desktopPattern, alt, ...rest },
  } = getImageProps({ ...common, src: "/background-pattern-desktop.svg" });

  return (
    <div className="absolute top-0 right-0 left-0 h-[12.125rem] sm:h-[27.3125rem]" aria-hidden>
      <picture>
        <source media="(max-width: 640px)" srcSet={mobilePattern} />
        <source media="(min-width: 641px)" srcSet={desktopPattern} />
        <img className="object-cover object-bottom" alt={alt} {...rest} />
      </picture>
    </div>
  );
}
