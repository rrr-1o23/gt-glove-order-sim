"use client";

import { Button } from "@/components/ui/button";

type HandSelectorProps = {
  selectedHand: string | null;
  onHandChange: (hand: string) => void;
};

export function HandSelector({
  selectedHand,
  onHandChange,
}: HandSelectorProps) {
  const selectedRingStyle =
    "ring-2 ring-neutral-700 ring-inset focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-inset";

  return (
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <p className="max-w-md text-lg leading-8 mt-10 text-zinc-600 dark:text-zinc-400">
          利き腕を選択してください
        </p>

        <div className="flex flex-row gap-4">
          <Button
            variant="outline"
            onClick={() => onHandChange("right")}
            className={selectedHand === "right" ? selectedRingStyle : ""}
          >
            右投げ用
          </Button>
          <Button
            variant="outline"
            onClick={() => onHandChange("left")}
            className={selectedHand === "left" ? selectedRingStyle : ""}
          >
            左投げ用
          </Button>
        </div>
      </div>
  );
}
