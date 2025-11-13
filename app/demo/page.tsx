"use client";

import Image from "next/image";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { CategorySelector } from "@/components/order/CategorySelector";
import { PositionSelector } from "@/components/order/PositionSelector";

export default function OrderPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

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

        <CategorySelector
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <PositionSelector
          isVisible={selectedCategory !== null}
          selectedPosition={selectedPosition}
          onPositionChange={setSelectedPosition}
        />
      </div>
    </PageLayout>
  );
}
