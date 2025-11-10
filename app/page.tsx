import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/gt.svg"
          alt="Next.js logo"
          width={50}
          height={50}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            GT Glove Order System
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:w-auto"
            href="/"
            rel="noopener noreferrer"
          >
            オーダーを始める
          </Link>
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            会社概要
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <strong className="font-bold">住所:</strong> 〒000-0000
            東京都新宿区西新宿２丁目８−１
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <strong className="font-bold">E-mail:</strong> info@gt-glove.jp
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <strong className="font-bold">Tel:</strong> 000-0000-0000
          </p>
        </div>
      </main>
    </div>
  );
}
