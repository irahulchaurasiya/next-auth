import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Link href="/signup">
        <button className="border p-2 bg-blue-500 rounded-lg">Signup</button>
      </Link>
    </div>
  );
}
