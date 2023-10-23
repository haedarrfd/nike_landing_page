"use client";

import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import { headerLogo } from "@/public/images";
import { hamburger } from "@/public/icons";

const Navbar = () => {
  return (
    <header className="padding_x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max_container">
        <Link href="/">
          <Image src={headerLogo} alt="Nike Logo" width={130} height={30} />
        </Link>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="Hamburger Menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
