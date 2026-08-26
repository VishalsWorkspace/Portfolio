export function GlowMesh() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-40 dark:opacity-30" />
      <div className="animate-float absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]" />
      <div
        className="animate-float absolute right-[8%] top-[20%] h-[24rem] w-[24rem] rounded-full bg-accent-2/20 blur-[110px]"
        style={{ animationDelay: "-3s" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
