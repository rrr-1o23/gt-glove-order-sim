"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import "./BackStyleSelector.css";

type BackStyleSelectorProps = {
  isVisible: boolean;
  selectedBackStyle: string | null;
  onBackStyleChange: (style: string) => void;
};

export const BackStyleSelector = React.forwardRef<
  HTMLDivElement,
  BackStyleSelectorProps
>(function BackStyleSelector(
  { isVisible, selectedBackStyle, onBackStyleChange },
  ref,
) {
  const selectedRingStyle =
    "ring-2 ring-neutral-700 ring-inset focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-inset";

  const animationClass = isVisible ? "slide-in" : "slide-out";

  return (
    <div ref={ref} className={`back-style-container ${animationClass}`}>
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <p className="max-w-md text-lg leading-8 mt-10 text-zinc-600 dark:text-zinc-400">
          バックスタイルを選択してください
        </p>

        <div className="flex flex-row gap-4">
          <Button
            variant="outline"
            onClick={() => onBackStyleChange("normal")}
            className={selectedBackStyle === "normal" ? selectedRingStyle : ""}
          >
            ノーマルタイプ
          </Button>
          <Button
            variant="outline"
            onClick={() => onBackStyleChange("belt")}
            className={selectedBackStyle === "belt" ? selectedRingStyle : ""}
          >
            ベルトタイプ
          </Button>
        </div>
      </div>
    </div>
  );
});
