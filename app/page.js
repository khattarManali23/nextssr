import Image from "next/image";
import Link from "next/link";

//  Use next/navigation instead.

export default function Home() {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex">
      {number.map((num) => (
        <div
          key={num}
          className="flex  items-center justify-center w-full h-screen bg-gray-800"
        >
          <Link
            className="px-4 py-2 text-white bg-blue-500 rounded-md"
            href={`/${num}`}
          >
            {num}
          </Link>
        </div>
      ))}
    </div>
  );
}
