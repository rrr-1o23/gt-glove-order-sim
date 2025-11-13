"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";

export default function OrderPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 選択時のスタイルを共通化（フォーカス対応含む）
  const selectedRingStyle =
    "ring-2 ring-neutral-700 ring-inset focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-inset";

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

        {/* --- 硬式 --- */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p>硬式</p>
          <div className="flex flex-row gap-4">
            <Button
              variant="outline"
              onClick={() => setSelectedCategory("h-baseball")}
              className={
                selectedCategory === "h-baseball" ? selectedRingStyle : ""
              }
            >
              野球用
            </Button>
            <Button
              variant="outline"
              onClick={() => setSelectedCategory("h-softball")}
              className={
                selectedCategory === "h-softball" ? selectedRingStyle : ""
              }
            >
              ソフト用
            </Button>
          </div>
        </div>

        {/* --- 軟式 --- */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p>軟式</p>
          <div className="flex flex-row gap-4">
            <Button
              variant="outline"
              onClick={() => setSelectedCategory("s-baseball")}
              className={
                selectedCategory === "s-baseball" ? selectedRingStyle : ""
              }
            >
              野球用
            </Button>
            <Button
              variant="outline"
              onClick={() => setSelectedCategory("s-softball")}
              className={
                selectedCategory === "s-softball" ? selectedRingStyle : ""
              }
            >
              ソフト用
            </Button>
          </div>
        </div>

        {/* --- 👇 ここを変更 --- */}
        <div
          className={`
            transition-all duration-500 ease-in-out overflow-hidden
            ${selectedCategory !== null ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <p className="max-w-md text-lg leading-8 my-10 text-zinc-600 dark:text-zinc-400">
              ポジションを選択してください
            </p>
            {/* (ここに次の選択肢のボタンを配置) */}
          </div>
        </div>
        {/* --- 👆 ここまで変更 --- */}
      </div>
    </PageLayout>
  );
}
