import { serverAuth$ } from "@builder.io/qwik-auth";
import GitHub from "@auth/core/providers/github";
import type { Provider } from "@auth/core/providers";
import { ConvexAdapter, type IUserRole } from "~/lib/auth/Adapter";

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    adapter: ConvexAdapter(),
    secret: "aCkY5ZHufGFfBdnDNzloUCysozXpwsGoYJmuwppkhyo",
    trustHost: true,
    session: {
      strategy: "database",
      maxAge: 14 * 24 * 60 * 60, // 14 days
      updateAge: 24 * 60 * 60, // 24 hours
    },
    pages: {
      signIn: "/signin",
    },
    providers: [
      GitHub({
        checks: ["none"],
        clientId: env.get("GITHUB_CLIENT_ID")!,
        clientSecret: env.get("GITHUB_CLIENT_SECRET")!,
      }),
    ] as Provider[],
    debug: env.get("NODE_ENV") === "development",
    callbacks: {
      async session({ session, user }) {
        return {
          ...session,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            //@ts-ignore
            role: user.role as IUserRole,
          },
        };
      },
      async redirect({ url, baseUrl }) {
        // Allows relative callback URLs
        if (url.startsWith("/")) return `${baseUrl}${url}`;
        // Allows callback URLs on the same origin
        else if (new URL(url).origin === baseUrl) return url;
        return baseUrl;
      },
      async signIn() {
        return true;
      },
      async jwt({ token }) {
        return token;
      },
    },
  }));
