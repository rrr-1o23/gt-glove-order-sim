"use client";

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

type PositionSelectorProps = {
  isVisible: boolean;
  selectedPosition: string | null;
  onPositionChange: (position: string) => void;
};

export function PositionSelector({
  isVisible,
  selectedPosition,
  onPositionChange,
}: PositionSelectorProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onPositionChange(event.target.value);
  };

  return (
    <div
      className={`
        transition-all duration-500 ease-in-out overflow-hidden
        ${isVisible ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
      `}
    >
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <p className="max-w-md text-lg leading-8 mt-10 text-zinc-600 dark:text-zinc-400">
          ポジションを選択してください
        </p>

        <NativeSelect
          value={selectedPosition || ""}
          onChange={handleChange}
          className={
            "focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-inset"
          }
        >
          {!selectedPosition && (
            <NativeSelectOption value="" disabled>
              選択してください
            </NativeSelectOption>
          )}

          {/* --- ポジションの選択肢 --- */}
          <NativeSelectOption value="catcher">
            キャッチャー用
          </NativeSelectOption>
          <NativeSelectOption value="pitcher">ピッチャー用</NativeSelectOption>
          <NativeSelectOption value="pitcher-compact">
            ピッチャー用（コンパクト）
          </NativeSelectOption>
          <NativeSelectOption value="first">ファースト用</NativeSelectOption>
          <NativeSelectOption value="second">セカンド用</NativeSelectOption>
          <NativeSelectOption value="third">サード用</NativeSelectOption>
          <NativeSelectOption value="short">ショート用</NativeSelectOption>
          <NativeSelectOption value="second-short">
            セカンド・ショート用
          </NativeSelectOption>
          <NativeSelectOption value="all-position">
            オールポジション用
          </NativeSelectOption>
          <NativeSelectOption value="outfield">
            アウトフィルダー用
          </NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  );
}
