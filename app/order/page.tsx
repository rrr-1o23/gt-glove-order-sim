import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
        alt="Next.js logo"
        width={50}
        height={50}
        priority
      />
    </PageLayout>
  );
}
