import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "オーダーグラブを始める | GT",
  description:
    "GTブランドの野球グローブのオーダーシミュレーションを開始します。あなただけのオリジナルグローブを自由にデザインし、注文まで行えます。",
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
