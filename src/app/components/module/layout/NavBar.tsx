"use client";

import Link from "next/link";
import { Button } from "../../ui/Button";

const links = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Retailers",
    href: "#",
  },
  {
    name: "Suppliers",
    href: "#",
  },
];

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <h2 className="text-2xl font-bold text-primary">Shift Vendor</h2>
        <div className="flex items-start gap-10">
          {links.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg transition ${
                index === 0
                  ? "border-b-2 border-orange-500 pb-1 font-semibold"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-7">
          <Button variant="outline" className="justify-center">Sign up</Button>

          <Button className="justify-center">Login</Button>
        </div>
      </nav>
    </header>
  );
}
