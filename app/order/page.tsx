"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";

export default function OrderPage() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  return (
    <PageLayout>
      <Image
        className="dark:invert"
        src="/gt.svg"
        alt="GT logo"
        width={50}
        height={50}
        priority
      />
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <p className="max-w-md text-lg leading-8 my-10 text-zinc-600 dark:text-zinc-400">
          基本モデルを選ぶ
        </p>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p>硬式</p>
          <div className="flex flex-row gap-4">
            <Button
              variant="outline"
              onClick={() => setSelectedButton("h-baseball")}
              className={
                selectedButton === "h-baseball"
                  ? "ring-2 ring-neutral-700 ring-inset"
                  : ""
              }
            >
              野球用
            </Button>
            <Button
              variant="outline"
              onClick={() => setSelectedButton("h-softball")}
              className={
                selectedButton === "h-softball"
                  ? "ring-2 ring-neutral-700 ring-inset"
                  : ""
              }
            >
              ソフト用
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p>軟式</p>
          <div className="flex flex-row gap-4">
            <Button
              variant="outline"
              onClick={() => setSelectedButton("s-baseball")}
              className={
                selectedButton === "s-baseball"
                  ? "ring-2 ring-neutral-700 ring-inset"
                  : ""
              }
            >
              野球用
            </Button>
            <Button
              variant="outline"
              onClick={() => setSelectedButton("s-softball")}
              className={
                selectedButton === "s-softball"
                  ? "ring-2 ring-neutral-700 ring-inset"
                  : ""
              }
            >
              ソフト用
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
