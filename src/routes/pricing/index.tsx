import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  title: "Pricing",
  meta: [
    {
      name: "description",
      content: "Neuralab Cloud pricing.",
    },
  ],
};

export default component$(() => {
  return (
    <div>
      <h1>Pricing</h1>
    </div>
  );
});
