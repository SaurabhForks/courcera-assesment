import Link from "next/link";
import { Search } from "./search";

export const Navbar = () => {
  console.log("Navbar");
  return (
    <nav>
      <h1>Navbar Component</h1>
      <div>
        <Link href="/">Home</Link> | <Link href="/products/1">Product 1</Link>
        <Link href="/products/2">Product 2</Link>
        <Link href="/products/3">Product 3</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Search />
      </div>
    </nav>
  );
};
