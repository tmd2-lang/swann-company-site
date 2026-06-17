import type { ReactNode } from "react";
import { BlobCursor } from "@/components/chrome/blob-cursor";
import { Nav } from "@/components/chrome/nav";
import { PageProgress } from "@/components/chrome/page-progress";
import { useLenis } from "@/components/chrome/use-lenis";
import { Footer } from "@/sections/10-footer";

export function SiteShell({ children }: { children: ReactNode }) {
  useLenis();
  return (
    <main className="bg-background text-foreground font-sans">
      <BlobCursor />
      <PageProgress />
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
