"use client";

import Link from "next/link";
import { LinkToHome } from "../_components/LinkToHome";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-center pt-5">
      <h1 className="text-lg font-semibold">Something went wrong!</h1>
      <p className="mt-4 mb-4">{error.message}</p>
      <button
        className="bg-red-400 text-white p-3 rounded-md"
        onClick={() => reset()}
      >
        Try again
      </button>
      <LinkToHome />
    </div>
  );
}
