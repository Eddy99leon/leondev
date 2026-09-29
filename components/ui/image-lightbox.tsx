"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  showZoomHint?: boolean;
  rounded?: string;
}

export function ImageLightbox({
  src,
  alt,
  className,
  imgClassName,
  showZoomHint = true,
  rounded = "rounded-xl",
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className={cn(
          "relative overflow-hidden border border-border group cursor-zoom-in",
          rounded,
          className
        )}
      >
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]",
            imgClassName
          )}
        />

        {showZoomHint && (
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg border border-border/50">
              <Icon
                icon="solar:magnifer-zoom-in-bold-duotone"
                className="w-4 h-4 text-primary"
              />
              <span>Agrandir</span>
            </div>
          </div>
        )}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-6xl w-[92vw] p-2 bg-background/95 backdrop-blur-md border border-border/80 shadow-2xl overflow-hidden flex items-center justify-center">
          <DialogTitle className="sr-only">
            {alt}
          </DialogTitle>

          <div className="relative w-full max-h-[85vh] flex items-center justify-center overflow-hidden rounded-lg p-1">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto max-h-[82vh] object-contain rounded-md shadow-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}