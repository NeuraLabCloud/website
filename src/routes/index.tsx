import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  title: "Neuralab",
  meta: [
    {
      name: "description",
      content: "Developing AI tools for the future.",
    },
  ],
};

export default component$(() => {
  return (
    <>
      <div class="container mx-auto">
        <div class="flex h-screen flex-col items-center justify-center">
          <div class="text-4xl font-bold">Neuralab AI</div>
          <div class="text-2xl font-bold">
            Developing AI tools without limits.
          </div>

          <div class="mt-8">
            <a
              class="rounded bg-zinc-700 px-4 py-2 font-bold text-white hover:bg-secondary"
              href="#todo"
            >
              Install Neuralab
            </a>
          </div>
        </div>
      </div>
    </>
  );
});
