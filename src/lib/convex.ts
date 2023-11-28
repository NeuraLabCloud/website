import { ConvexHttpClient } from "convex/browser"

if (!import.meta.env.PUBLIC_VITE_CONVEX_URL) throw new Error("CONVEX_URL not set in .env")

export const convexClient = new ConvexHttpClient(import.meta.env.PUBLIC_VITE_CONVEX_URL)