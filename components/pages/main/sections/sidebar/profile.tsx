"use client";
import Image from "next/image";
import React from "react";
import User from "@/components/common/user";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import { socialMedia } from "@/data/social-media";

interface ProfileProp {
  sheet?: boolean;
}

const Profile: React.FC<ProfileProp> = ({ sheet }) => {
  return (
    <>
      <div className="relative h-auto">
        <Image
          className=" lg:rounded-t-xl w-full"
          src="/assets/images/profile/bg-profile.svg"
          alt="Papel de Parede"
          width={309}
          height={140}
        />
        <div className="absolute bottom-[-50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <User sheet={sheet} />
        </div>
      </div>
      <div className="space-y-5 p-6">
        <div className="mt-6 flex-col-center gap-2">
          <span className="profile-text-base">@yx.will</span>
          <h3 className=".profile-text-lg">Franklin William</h3>
          <p className="profile-text-base text-center">
            Desenvolvedor | Inovando a Web
          </p>
        </div>
        <div>
          <ul className="flex items-center gap-5 justify-center">
            {socialMedia.map((item, i) => (
              <li key={i}>
                <Link href={item.href} target="_blank" rel="noopener">
                  <Icon
                    icon={item.icon}
                    width={24}
                    height={24}
                    className="text-rc_slate"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <p className="text-sm">
            Criando experiências digitais que não apenas conectam, mas inspiram
            e transformam
          </p>
        </div>
      </div>
    </>
  );
};
export default Profile;
