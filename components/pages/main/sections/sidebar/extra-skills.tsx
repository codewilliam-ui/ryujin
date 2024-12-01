import { Button } from "@/components/ui/button";
import { extraSkillsCard } from "@/data/card-skills";
import React from "react";

const ExtraSkills: React.FC = () => {
  return (
    <>
      <div className="profile-card">
        <h3 className="text-lg">Principais Habilidades</h3>
        <ul className="flex flex-wrap justify-between gap-y-4 gap-x-2">
          {extraSkillsCard.map((item, index) => (
            <li key={index} className="min-w-[80px] lg2:min-w-[50px]">
              <Button
                size={"sm"}
                variant={"tertiary"}
                className="font-medium text-sm py-1 h-5"
              >
                <span>{item.extraSkill}</span>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExtraSkills;
