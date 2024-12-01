"use client"
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icon } from "@iconify-icon/react";
import { menuItems } from "@/data/menu-itens";
import Link from "next/link";

const MenuMobile: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Icon icon="hugeicons:menu-04" width="24" height="24" />
        </SheetTrigger>
        <SheetContent side={"right"} className="p-6">
          <div className="flex flex-col justify-start gap-5  mt-10">
            {menuItems.map((item, i) => (
              <Link key={i} href={item.href}>
                <div
                  className={`menu-mobile ${
                    activeIndex === i
                      ? "text-rc_purple"
                      : "text-rc_slate hover:text-rc_purple dark:hover:text-rc_purple"
                  }`}
                  onClick={() => setActiveIndex(i)}
                >
                  <Icon icon={item.icon} width={24} height={24} />
                  <span>{item.alt}</span>
                </div>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MenuMobile;
