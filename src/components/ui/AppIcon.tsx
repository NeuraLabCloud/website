import { type AnchorHTMLAttributes, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface LogoProps {
  w?: number;
  h?: number;
  alt?: string;
  src?: string;
  url?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
}

const defaultSrc =
  "https://raw.githubusercontent.com/NeuraLabCloud/static-assets/main/branding/icons/processor/processor.svg";

export const NeuralabLogo = component$<LogoProps>(
  ({ w, h, alt, url, target, src }) => {
    return (
      <Link href={url ?? "/"} target={target}>
        <img
          src={src ?? defaultSrc}
          alt={alt}
          width={w ?? 50}
          height={h ?? 50}
        />
      </Link>
    );
  },
);
