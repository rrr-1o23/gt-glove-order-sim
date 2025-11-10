import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

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
