"use client";
import React, { useState } from "react";
import { ModeToggle } from "@/components/ui/mode-toogle";
import { menuItems } from "@/data/menu-itens";
import Link from "next/link";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; 

const Navbar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div
        className={`min-w-[77px] transition-all duration-500 ease h-[calc(100vh-2rem)] bg-white dark:bg-rc_default px-3.5 py-6 rounded-xl container-lg2 scrollbarStyle sticky top-5 mb-10 z-10`}>
        <div className="relative">
          <div className="relative w-full pb-6  z-20 text-center">
            <ModeToggle />
          </div>
          <div className="overflow-y-auto overflow-x-hidden flex-col-center gap-5 h-[calc(100vh-9rem)]">
            <TooltipProvider>
              {menuItems.map((item, i) => (
                <Link key={i} href={item.href}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className={`menu ${
                          activeIndex === i
                            ? "bg-rc_purple dark:bg-rc_purple text-white"
                            : "text-rc_slate hover:text-white hover:bg-rc_purple dark:hover:bg-rc_purple"
                        }`}
                        onClick={() => setActiveIndex(i)}>
                        <Icon icon={item.icon} width={24} height={24} />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="left"><p>{item.alt}</p></TooltipContent>
                  </Tooltip>
                </Link>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
