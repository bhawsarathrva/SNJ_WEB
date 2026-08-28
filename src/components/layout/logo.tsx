import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 shrink-0", className)}
      aria-label="SNJ Diesel — Home"
    >
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-md font-display text-base font-semibold tracking-tight",
          dark ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground"
        )}
      >
        SNJ
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-semibold uppercase tracking-wide",
            dark ? "text-white" : "text-foreground"
          )}
        >
          SNJ Diesel
        </span>
        <span
          className={cn(
            "font-data text-[10px] uppercase tracking-[0.18em]",
            dark ? "text-white/60" : "text-muted-foreground"
          )}
        >
          Power that doesn&apos;t wait
        </span>
      </span>
    </Link>
  );
}
