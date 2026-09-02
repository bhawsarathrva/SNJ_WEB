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
          "flex items-center justify-center rounded-md font-display font-bold tracking-tight",
          dark ? "h-14 w-14 text-2xl bg-primary text-primary-foreground" : "h-11 w-11 text-lg bg-primary text-primary-foreground"
        )}
      >
        SNJ
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-extrabold uppercase tracking-wide",
            dark ? "text-3xl text-white" : "text-2xl text-foreground"
          )}
        >
          SNJ Diesel
        </span>
        {dark && (
          <span className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-white/70 font-data">
            One Roof Solution Of All Your Power Requirements
          </span>
        )}
      </span>
    </Link>
  );
}
