import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "テストページ（開発用） | GT",
  description: "これはテストページです．",
};

export default function DemoPage() {
  return (
    <PageLayout>
      <Image
        className="dark:invert"
        src="/gt.svg"
        alt="Next.js logo"
        width={50}
        height={50}
        sizes="(max-width: 640px) 50px, 50px"
        priority
      />
    </PageLayout>
  );
}
