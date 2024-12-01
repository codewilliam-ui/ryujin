import Header from "@/components/layout/header";
import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import Education from "@/components/pages/main/sections/education/education";
import HeroSection from "@/components/pages/main/sections/hero/hero-section";
import Services from "@/components/pages/main/sections/services/services";
import React from "react";

const Page: React.FC = () => {
  return (
    <div className="largeContainer px-5 xl:px-0 pt-8 relative">
      <div className="block lg2:flex md:items-start md:justify-center md:gap-8 relative">
        <Header />
        <Sidebar />
        <div className="block w-full max-w-5xl mx-auto">
          <main>
            <div id="home">
              <HeroSection />
            </div>
            <div id="services">
              <Services />
            </div>
            <div className="space-y-14 mt-14">
              <div id="education">
                <Education />
              </div>
            </div>
          </main>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Page;
