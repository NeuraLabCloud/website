import { component$ } from "@builder.io/qwik";
import { useAuthSession, useAuthSignout } from "../plugin@auth";
import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  title: "Web Console",
  meta: [
    {
      name: "description",
      content: "Web Console for managing your Neuralab Cloud account.",
    },
  ],
};

export default component$(() => {
  const session = useAuthSession();
  const signOut = useAuthSignout();
  return (
    <>
      <h1>Hello {session.value?.user?.name ?? "Unknown User"}</h1>
      <br />
      <button onClick$={() => signOut.submit({ callbackUrl: "/" })}>
        Sign Out
      </button>
    </>
  );
});
