import { signIn } from "@/auth";

const PROVIDERS = [
  {
    id: "google",
    name: "Google",
    enabled: process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET,
    icon: (
      <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="#EA4335"
        />
      </svg>
    ),
  },
  {
    id: "apple",
    name: "Apple",
    enabled: process.env.AUTH_APPLE_ID && process.env.AUTH_APPLE_SECRET,
    icon: (
      <svg className="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.63-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-1.23 3.72-1.14.62.03 2.37.26 3.43 1.83-2.9 1.76-2.43 5.48.47 6.69-.17.91-.49 1.95-1.12 3.05-.75 1.32-1.54 2.63-2.67 3.04.1.04-.32-.7-.31-.7zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.16 2.22-1.74 4.09-3.74 4.25z" />
      </svg>
    ),
  },
  {
    id: "yandex",
    name: "Yandex",
    enabled: process.env.AUTH_YANDEX_ID && process.env.AUTH_YANDEX_SECRET,
    icon: (
      <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.4 20H12.7V17L9.5 9H13.6L14.7 13.9L15.9 9H20L16.4 20Z" fill="#FC3F1D" />
      </svg>
    ),
  },
  {
    id: "vk",
    name: "VK",
    enabled: process.env.AUTH_VK_ID && process.env.AUTH_VK_SECRET,
    icon: (
      <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.16 11.23c-1.41-1.36-1.47-5.07-5.27-5.07-1.04 0-1.76.81-1.59 2.5 0 2.39 1.09 5.34 3.48 7.37 2.44 2.07 5.17 1.85 5.17 1.85.83 0 1.25-.43 1.25-1.14 0-.8-1.51-3.66 0-4.59.51-.31.86.3 1.41.93.9.99.78 2.61.78 2.61s.05.61.64.65c.59.04 1.7.07 2.4.05 1.51-.04.49-3.32-2.19-6.3-2.31-2.57.17-2.61.17-2.61s2.2-3.15 1.63-3.08c-3.1.41-4.75 4.36-1.55 5.86 1.07.5 1.15.54 0 1.8H13.4s-1.48-1.89-1.24-.57c-.12.66.45 1.34 0 1.95V11.23z" />
      </svg>
    ),
  },
];

export default function AuthPage() {
  const providers = PROVIDERS.filter((p) => p.enabled);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-12 text-foreground sm:px-6 lg:px-8">
      <div className="z-10 flex w-full max-w-md flex-col items-center justify-center gap-6 rounded-3xl bg-card px-6 py-10 text-card-foreground shadow-lg md:min-h-[240px] md:p-8">
        <h1 className="text-center text-3xl font-bold tracking-tight">Welcome</h1>

        <div className="flex w-full flex-col gap-4">
          {providers.map((provider) => (
            <form
              key={provider.id}
              action={async () => {
                "use server";
                await signIn(provider.id);
              }}
            >
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                {provider.icon}
                Continue with {provider.name}
              </button>
            </form>
          ))}

          {providers.length === 0 && (
            <small className="w-full text-center text-sm opacity-50">
              No authentication providers configured.
            </small>
          )}
        </div>
      </div>

      <div className="z-1 pointer-events-none absolute -bottom-40 -left-40 h-[720px] w-[920px] bg-amber-500/25 blur-[160px]"></div>
      <div className="z-1 pointer-events-none absolute -bottom-40 -right-40 h-[720px] w-[920px] bg-pink-500/25 blur-[160px]"></div>
    </main>
  );
}
