import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Apple from "next-auth/providers/apple";
import Yandex from "next-auth/providers/yandex";
import Vk from "next-auth/providers/vk";

const providers = [];

if (process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET) {
  providers.push(Google);
}
if (process.env.AUTH_APPLE_ID && process.env.AUTH_APPLE_SECRET) {
  providers.push(Apple);
}
if (process.env.AUTH_YANDEX_ID && process.env.AUTH_YANDEX_SECRET) {
  providers.push(Yandex);
}
if (process.env.AUTH_VK_ID && process.env.AUTH_VK_SECRET) {
  providers.push(Vk);
}

export const authConfig = {
  providers: providers,
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      // Example protection: Protect /dashboard or /app
      const isOnDashboard = nextUrl.pathname.startsWith("/app");

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn && nextUrl.pathname === "/auth") {
        return Response.redirect(new URL("/", nextUrl));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
