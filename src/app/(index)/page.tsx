export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden py-20">
      <div className="container z-10">
        <h1 className="text-4xl font-semibold">Starter page</h1>
        <p className="max-w-sm text-lg font-medium text-foreground/75">
          You can edit this page to get started and build your own project.
        </p>
      </div>

      <div className="z-1 pointer-events-none absolute -bottom-40 -left-40 h-[720px] w-[920px] bg-amber-500/25 blur-[160px]"></div>
      <div className="z-1 pointer-events-none absolute -bottom-40 -right-40 h-[720px] w-[920px] bg-pink-500/25 blur-[160px]"></div>
    </main>
  );
}
