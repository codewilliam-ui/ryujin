import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserProp {
  sheet?: boolean;
}

const User: React.FC<UserProp> = ({ sheet }) => {
  return (
    <>
      <Avatar 
        className={`${
          sheet ? "w-20 h-20" : "w-10 lg2:w-14 h-auto"
        } lg2:border-[3px] lg2:border-white`}
      >
        <AvatarImage src="/assets/images/profile/user.png" alt="Foto de Perfil" />
        <AvatarFallback>Franklin</AvatarFallback>
      </Avatar>
    </>
  );
};

export default User;
