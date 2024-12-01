import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import User from "./user";
import Profile from "@/components/pages/main/sections/sidebar/profile";
import Information from "@/components/pages/main/sections/sidebar/information";
import Teams from "@/components/pages/main/sections/sidebar/teams";
import MajorSkills from "@/components/pages/main/sections/sidebar/major-skills";
import ExtraSkills from "@/components/pages/main/sections/sidebar/extra-skills";
import CV from "@/components/pages/main/sections/sidebar/cv";

const SheetSidebar: React.FC = () => {
  return (
    <div>
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
                <MajorSkills />
                <ExtraSkills />
                <CV/>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetSidebar;
