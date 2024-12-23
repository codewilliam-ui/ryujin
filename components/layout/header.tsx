import React from "react";
import { ModeToggle } from "@/components/ui/mode-toogle";
import MenuMobile from "@/components/common/menu-mobile";
import SheetSidebar from "../common/sheet-sidebar";

const Header: React.FC = () => {
  return (
    <>
      <div className="responsive_status max-w-5xl mx-auto lg2:hidden">
        <div className="flex items-center justify-between px-3 py-2 rounded-full bg-white dark:bg-rc_default border border-base-content/5 mb-12 sm:mb-16 h-[60px]">
          <div>
            <SheetSidebar />
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <MenuMobile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
