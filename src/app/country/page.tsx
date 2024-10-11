import Link from "next/link";

export default function CountryName() {
  return (
    <div>
      <h1>List Of Countries:</h1> <br />
      <ul className="flex gap-10">
        <li>
          <Link href="/country/pakistan">Pakistan</Link>
          <br />
        </li>
        <li>
          <Link href="/country/oman">Oman</Link>
          <br />
        </li>
        <li>
          <Link href="/country/turkey">Turkey</Link>
        </li>
        <li>
          <Link href="/country/iran">Iran</Link>
        </li>
        <li>
          <Link href="/country/saudi arab">Saudi Arab</Link>
        </li>
      </ul>
    </div>
  );
}
