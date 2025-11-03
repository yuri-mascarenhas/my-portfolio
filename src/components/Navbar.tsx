import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-inherit shadow-sm border-b">
      <div className=" mx-auto px-4 py-3 flex justify-between items-center text-white">
        <Link href="/" className="font-semibold text-lg">
          YSM
        </Link>
        <div className="space-x-4 text-sm">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/lab">Lab</Link>
        </div>
      </div>
    </nav>
  );
}
