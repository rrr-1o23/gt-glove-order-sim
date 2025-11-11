import React from "react";
import Image from "next/image";

// children: このコンポーネントで囲むコンテンツ（ページ本体）を受け取る
type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-16 px-16 bg-white dark:bg-black sm:items-start">
        {children}
      </main>
    </div>
  );
}
