import Link from "next/link";

export function LinkToHome() {
  return (
    <Link className="bg-green-400 text-white p-3 rounded-md" href="/">
      Go to main page
    </Link>
  );
}
