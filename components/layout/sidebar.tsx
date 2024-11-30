import React from "react";
import Profile from "@/components/pages/main/sections/sidebar/profile";

const Sidebar: React.FC = () => {
  return (
    <div>
      <div className="w-[300px] shrink-0 desktop_sidebar sticky top-5 mb-10 z-10 container-lg2">
        <div className="overflow-y-auto scrollbarStyle h-[calc(100vh-2rem)]">
          <div className="bg-white dark:bg-rc_default rounded-xl">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar
