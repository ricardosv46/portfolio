import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export function Skeleton({ className, width, height }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-slate-200 dark:bg-slate-700",
        className
      )}
      style={{
        width: width || "100%",
        height: height || "1rem",
      }}
    />
  );
}

export function TextSkeleton({
  lines = 3,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height="1rem"
          className={i === lines - 1 ? "w-3/4" : "w-full"}
        />
      ))}
    </div>
  );
}

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("p-6 rounded-lg border", className)}>
      <Skeleton height="1.5rem" className="w-1/2 mb-4" />
      <TextSkeleton lines={4} />
    </div>
  );
}
