import { Button } from "@/components/ui/button";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import Link from "next/link";
import React from "react";

const CV: React.FC = () => {
  return (
    <>
      <div className="my-10 flex justify-center">
        <Link href="/assets/pdf/CV - Franklin William.pdf" target="_blank" className="w-full">
            <Button
              size={"lg"}
              variant={"action"}
              className="bg-rc_pink text-white w-full h-[50px]"
            >
              <h3 className="text-base font-semibold">DOWNLOAD CV</h3>
              <Icon
                icon="fluent:cloud-download-24-regular"
                width="28"
                height="28"
              />
            </Button>
        </Link>
      </div>
    </>
  );
};

export default CV;
