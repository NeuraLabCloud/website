import { component$ } from "@builder.io/qwik";
import { useAuthSignin } from "../plugin@auth";
import type { RequestHandler } from "@builder.io/qwik-city";
import type { Session } from "@auth/core/types";
import { GoMarkGithub16 } from "@qwikest/icons/octicons";

import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  title: "Neuralab Sign In",
  meta: [
    {
      name: "description",
      content: "Sign in to Neuralab.",
    },
  ],
};

// Redirect to console page if they are logged in.
export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session");

  if (session) {
    throw event.redirect(302, "/console");
  }
};

export default component$(() => {
  const signIn = useAuthSignin();
  return (
    <div class="flex h-screen items-center justify-center">
      <button
        class="rounded bg-zinc-800 px-4 py-2 hover:bg-secondary"
        onClick$={() =>
          signIn.submit({
            providerId: "github",
            options: {
              callbackUrl: "/console",
            },
          })
        }
      >
        <div class="flex items-center">
          Sign In with GitHub
          <span class="ml-2">
            <GoMarkGithub16 />
          </span>
        </div>
      </button>
    </div>
  );
});
