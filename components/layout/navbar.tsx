"use client";
import React from "react";
import { ModeToggle } from "@/components/ui/mode-toogle";
import Image from "next/image";
import { menuItems } from "@/data/menu-itens";
import Link from "next/link";

const Navbar: React.FC = () => {


  return (
    <>
      <div
        className={`min-w-[77px] transition-all duration-500 ease h-[calc(100vh-2rem)] bg-white dark:bg-rc_default px-3.5 py-6 rounded-xl container-lg2 scrollbarStyle sticky top-5 mb-10 z-10`}>
        <div className="relative">
          <div className="relative w-full pb-6  z-20 text-center">
            <ModeToggle />
          </div>
          <div className="overflow-y-auto overflow-x-hidden flex-col-center gap-5 h-[calc(100vh-9rem)]">
            {menuItems.map((item, i) => (
              <Link key={i} href={item.href}>
                <div className="text-center flex items-center justify-start gap-3 menu-hover">
                  <Image
                    className="text-rc_slate hover:text-white"
                    src={item.src}
                    alt={item.alt}
                    width={20}
                    height={20}
                    style={{color: "white"}}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
