import React from "react";
import Profile from "@/components/pages/main/sections/sidebar/profile";
import Information from "../pages/main/sections/sidebar/information";

const Sidebar: React.FC = () => {
  return (
    <div>
      <div className="w-[309px] shrink-0 desktop_sidebar sticky top-5 mb-10 z-10 container-lg2">
        <div className="overflow-y-auto scrollbarStyle h-[calc(100vh-2rem)]">
          <div className="bg-white dark:bg-rc_default rounded-xl">
            <Profile />
            <div className="space-y-10 p-6">
              <Information/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar
