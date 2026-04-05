// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>Oops! Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Return Home</Link>
    </main>
  );
}