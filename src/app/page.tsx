import Image from "next/image";

export default async function HomePage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p className="text-gray-500 dark:text-gray-400 mt-2">
        This is the home page made with Next.js, Tailwind CSS, and Pocketbase.
      </p>
      <div className="flex justify-center items-center h-96 w-full bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mt-6">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </div>
  );
}
