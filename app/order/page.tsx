"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import PageLayout from "@/components/PageLayout";
import { CategorySelector } from "@/components/order/CategorySelector";
import { HandSelector } from "@/components/order/HandSelector";
import { PositionSelector } from "@/components/order/PositionSelector";
import { BackStyleSelector } from "@/components/order/BackStyleSelector";

export default function OrderPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [selectedHand, setSelectedHand] = useState<string | null>(null);
  const [selectedBackStyle, setSelectedBackStyle] = useState<string | null>(
    null,
  );
  const backStyleSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectedPosition === "catcher" && backStyleSectionRef.current) {
      backStyleSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedPosition]);

  const isNextButtonDisabled = useMemo(() => {
    const baseRequirementsMet =
      selectedCategory && selectedPosition && selectedHand;

    if (!baseRequirementsMet) {
      return true;
    }

    if (selectedPosition === "catcher") {
      return !selectedBackStyle;
    }

    return false;
  }, [selectedCategory, selectedPosition, selectedHand, selectedBackStyle]);

  const queryParams = useMemo(() => {
    const params = new URLSearchParams();
    if (selectedCategory) params.set("category", selectedCategory);
    if (selectedPosition) params.set("position", selectedPosition);
    if (selectedHand) params.set("hand", selectedHand);

    if (selectedPosition === "catcher" && selectedBackStyle) {
      params.set("backStyle", selectedBackStyle);
    }

    return params.toString();
  }, [selectedCategory, selectedPosition, selectedHand, selectedBackStyle]);

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

        {/* --- 基本モデル選択 --- */}
        <CategorySelector
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* --- 利き腕選択 --- */}
        <HandSelector
          selectedHand={selectedHand}
          onHandChange={setSelectedHand}
        />

        {/* --- ポジション選択 --- */}
        <PositionSelector
          selectedPosition={selectedPosition}
          onPositionChange={setSelectedPosition}
        />

        {/* --- バックスタイル選択 (Catcher のみ) --- */}
        <BackStyleSelector
          ref={backStyleSectionRef}
          isVisible={selectedPosition === "catcher"}
          selectedBackStyle={selectedBackStyle}
          onBackStyleChange={setSelectedBackStyle}
        />

        <div className="w-full flex justify-center sm:justify-start mt-10">
          {isNextButtonDisabled ? (
            <Button size="lg" disabled={true}>
              次のステップへ
            </Button>
          ) : (
            <Button size="lg" asChild>
              <Link href={`/order/step2?${queryParams}`}>次のステップへ</Link>
            </Button>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
