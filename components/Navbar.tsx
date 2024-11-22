"use client";
import React from "react";
import { AlignRight, Bitcoin } from "lucide-react";
import { navlinks } from "./navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="flex items-center justify-between h-24 border-b mb-8 px-12 md:px-24 lg:px-0">
      <Link href={"/"} className="flex items-center justify-center gap-2">
        <Image src={"/logo.png"} alt="x" height={32} width={32} />
        <p className="tracking-tighter text-2xl font-extrabold">
          <span className="text-primary">Crypto/</span>News.
        </p>
      </Link>

      <div className="hidden md:flex gap-2 border px-8 py-2 rounded-full border-slate-700 text-sm font-semibold">
        {navlinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`if ${
              pathName === link.href
                ? "text-primary font-bold hover:font-extrabold"
                : "text-muted-foreground hover:font-extrabold"
            } `}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="hidden md:flex">
          <ModeToggle />
        </div>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <AlignRight />
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="mb-10"></SheetTitle>
            <SheetDescription
              className="flex flex-col items-center justify-center gap-3
            "
            >
              {navlinks.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className={`if ${
                    pathName === link.href
                      ? "text-primary font-bold hover:font-extrabold"
                      : "text-muted-foreground hover:font-extrabold"
                  } `}
                >
                  {link.label}
                </Link>
              ))}
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
