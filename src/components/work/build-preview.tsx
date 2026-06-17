import { useEffect, useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import type { StudioProject } from "@/data/projects";

export function BuildPreview({ project }: { project: StudioProject }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  const canInteract = isInteractive || isFullscreen;

  useEffect(() => {
    if (!canInteract) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsFullscreen(false);
        setIsInteractive(false);
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [canInteract]);

  if (project.embedAllowed) {
    const shellCls = isFullscreen
      ? "fixed inset-0 z-[100] flex flex-col bg-background"
      : "overflow-hidden rounded-md border border-foreground/15 bg-mist/30 shadow-sm";

    const frameHeight = isFullscreen ? "flex-1 min-h-0" : "block h-[min(78vh,900px)] w-full";

    return (
      <div className={shellCls}>
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-foreground/10 bg-background px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="size-2 shrink-0 rounded-full bg-foreground/15" aria-hidden />
            <span className="size-2 shrink-0 rounded-full bg-foreground/15" aria-hidden />
            <span className="size-2 shrink-0 rounded-full bg-foreground/15" aria-hidden />
            <span className="ml-1 truncate font-mono-x text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {project.name} · Swann studio build
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              if (isFullscreen) {
                setIsFullscreen(false);
                setIsInteractive(false);
              } else {
                setIsFullscreen(true);
                setIsInteractive(true);
              }
            }}
            className="inline-flex shrink-0 items-center gap-2 rounded-sm px-3 py-1.5 font-mono-x text-[10px] uppercase tracking-wider text-foreground transition-colors hover:bg-foreground/5"
            aria-label={isFullscreen ? "Minimize preview" : "Fullscreen preview"}
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="size-3.5" aria-hidden />
                <span>Minimize</span>
              </>
            ) : (
              <>
                <Maximize2 className="size-3.5" aria-hidden />
                <span>Fullscreen</span>
              </>
            )}
          </button>
        </div>
        <div
          className={`group relative ${isFullscreen ? "flex min-h-0 flex-1 flex-col" : ""}`}
          onMouseLeave={() => {
            if (!isFullscreen) setIsInteractive(false);
          }}
          data-lenis-prevent="true"
        >
          {!canInteract && (
            <button
              type="button"
              className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-transparent"
              onClick={() => setIsInteractive(true)}
              aria-label={`Interact with ${project.name} preview`}
            >
              <span className="rounded-full bg-foreground px-4 py-2 font-mono-x text-xs uppercase tracking-widest text-background opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                Click to interact
              </span>
            </button>
          )}
          <iframe
            title={`${project.name} preview`}
            src={project.previewUrl}
            className={`${frameHeight} w-full border-0 bg-background ${canInteract ? "pointer-events-auto" : "pointer-events-none"}`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md border border-foreground/15 bg-background">
      <div className="border-b border-foreground/10 px-4 py-3">
        <span className="font-mono-x text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {project.name} · Scroll capture
        </span>
      </div>
      <div className="max-h-[min(78vh,900px)] overflow-y-auto">
        <img
          src={project.thumbImage}
          alt={`${project.name} homepage capture`}
          className="block w-full object-cover object-top"
        />
      </div>
      <p className="border-t border-foreground/10 px-4 py-3 text-sm text-muted-foreground">
        Interactive preview is not available in-frame for this host. Scroll the capture above.
      </p>
    </div>
  );
}
