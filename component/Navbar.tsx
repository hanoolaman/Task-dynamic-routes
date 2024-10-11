import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul className="flex gap-10">
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="/country">Country</Link>
        </li>
      </ul>
    </div>
  );
}
