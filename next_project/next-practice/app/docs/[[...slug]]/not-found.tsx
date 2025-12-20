"use client";
import { usePathname } from "next/navigation";
export default function NotFound() {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold">{pathname} Not Found</h1>
    </div>
  );
}
