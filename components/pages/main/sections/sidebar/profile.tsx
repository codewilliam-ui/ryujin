import Image from "next/image";
import React from "react";
import User from "@/components/common/user";

const Profile: React.FC = () => {
  return (
    <>
      <div className="relative left-0 top-0 h-auto">
        <Image
          className=" rounded-t-xl"
          src="/assets/images/profile/bg-profile.svg"
          alt="Papel de Parede"
          width={300}
          height={140}
        />
        <div className="absolute bottom-[-40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <User />
        </div>
      </div>
    </>
  );
};
export default Profile;
