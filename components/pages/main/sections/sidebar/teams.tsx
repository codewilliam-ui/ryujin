import { TeamMenu } from "@/components/common/team-menu";
import { Badge } from "@/components/ui/badge";
import { teamCard } from "@/data/card-team";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Teams: React.FC = () => {
  return (
    <>
      <div className="profile-card">
        <div className="flex justify-between">
          <Badge variant={"default"}>All Teams</Badge>
          <TeamMenu />
        </div>
        {teamCard.map((item, i) => (
        <Link key={i} href={item.link} className="group flex justify-between gap-2">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            width={38}
            height={43}
            className="rounded-md object-cover border-image group-hover:border-rc_purple"
          />
          <div className="space-y-2 w-full">
            <div className="flex justify-between ">
              <h3 className="text-md group-hover:text-rc_purple transition-color">
                {item.title}
              </h3>
              <Badge variant={"secondary"}>{item.badge}</Badge>
            </div>
            <span className="text-xs text-rc_slate">
              {item.members} membros
            </span>
          </div>
        </Link>
        ))}
      </div>
    </>
  );
};
export default Teams;
