import Header from "@/components/layout/header";
import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import HeroSection from "@/components/pages/main/sections/hero/hero-section";
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
          </main>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Page;
