import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "オーダーグラブを始める | GT",
  description:
    "GTブランドの野球グローブのオーダーシミュレーションを開始します。あなただけのオリジナルグローブを自由にデザインし、注文まで行えます。",
};

export default function OrderPage() {
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
      </div>
    </PageLayout>
  );
}
