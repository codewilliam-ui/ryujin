import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import User from "./user";
import Profile from "../pages/main/sections/sidebar/profile";
import Information from "../pages/main/sections/sidebar/information";
import Teams from "../pages/main/sections/sidebar/teams";

const SheetSidebar: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <User />
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0">
      <div className="overflow-y-auto scrollbarStyle h-full">
          <div className="bg-white dark:bg-rc_default rounded-xl">
            <Profile sheet={true} />
            <div className="space-y-10 p-6">
              <Information />
              <Teams />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetSidebar;
