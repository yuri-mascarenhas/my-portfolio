import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-semibold text-lg">
          Yuri Mascarenhas
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
