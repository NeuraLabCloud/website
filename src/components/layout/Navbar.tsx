import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { NeuralabLogo } from "../ui/AppIcon";
import { useAuthSession } from "~/routes/plugin@auth";
import { DiscordIcon, GitHubIcon } from "../ui/icons";

export const Navbar = component$(() => {
  const auth = useAuthSession();

  return (
    <header class="py-4 text-base lg:py-6 lg:text-lg">
      <div class="container mx-auto flex items-center justify-between">
        {/* Left side of the header */}
        <div class="flex items-center">
          <div class="mr-4">
            <NeuralabLogo />
          </div>
          <ul class="hidden items-center space-x-6 lg:flex">
            <li>
              <a href="https://discord.gg/invite/MSTrBrNaGn" target="_blank">
                <DiscordIcon />
              </a>
            </li>
            <li>
              <a href="https://github.com/NeuraLabCloud" target="_blank">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <Link class="hover:text-secondary" href="/pricing">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        {/* Right side of the header */}
        <ul class="flex items-center space-x-4">
          <li>
            {!auth.value ? (
              <Link
                class="hover:text-secondary rounded-md bg-zinc-700 px-2 py-1"
                href="/signin"
              >
                Sign In
              </Link>
            ) : (
              <Link
                class="hover:text-secondary rounded-md bg-zinc-700 px-2 py-1"
                href="/console"
              >
                Web Console
              </Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
});
