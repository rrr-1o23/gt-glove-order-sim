import { Button } from "@/components/ui/button";

type CategorySelectorProps = {
  selectedCategory: string | null;
  onCategoryChange: (category: string) => void;
};

export function CategorySelector({
  selectedCategory,
  onCategoryChange,
}: CategorySelectorProps) {
  const selectedRingStyle =
    "ring-2 ring-neutral-700 ring-inset focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-inset";

  return (
    <>
      {/* --- 硬式 --- */}
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <p>硬式</p>
        <div className="flex flex-row gap-4">
          <Button
            variant="outline"
            onClick={() => onCategoryChange("h-baseball")}
            className={
              selectedCategory === "h-baseball" ? selectedRingStyle : ""
            }
          >
            野球用
          </Button>
          <Button
            variant="outline"
            onClick={() => onCategoryChange("h-softball")}
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
            onClick={() => onCategoryChange("s-baseball")}
            className={
              selectedCategory === "s-baseball" ? selectedRingStyle : ""
            }
          >
            野球用
          </Button>
          <Button
            variant="outline"
            onClick={() => onCategoryChange("s-softball")}
            className={
              selectedCategory === "s-softball" ? selectedRingStyle : ""
            }
          >
            ソフト用
          </Button>
        </div>
      </div>
    </>
  );
}
