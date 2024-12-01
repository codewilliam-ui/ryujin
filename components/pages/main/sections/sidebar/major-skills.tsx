import { Progress } from "@/components/ui/progress";
import { majorSkillsCard } from "@/data/card-major-skills";
import React from "react";

const MajorSkills: React.FC = () => {
  return (
    <>
      <div className="profile-card">
        <h3 className="text-lg">Principais Habilidades</h3>
        <ul className="space-y-4">
            {majorSkillsCard.map((item, i) => (
            <li key={i} className="text-md space-y-2">
                <div className="flex justify-between">
                    <h3>{item.skill}</h3>
                    <span className="text-rc_slate">{item.value}%</span>
                </div>
                <Progress index={i} value={item.value} className="h-[5px]" />
            </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default MajorSkills;
