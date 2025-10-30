export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500 mt-16 border-t pt-4">
      © {new Date().getFullYear()} Yuri Mascarenhas. All rights reserved. |
      <a href="/.well-known/security.txt" className="ml-1 underline">
        Security
      </a>
    </footer>
  );
}
