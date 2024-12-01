import { TeamMenu } from "@/components/common/team-menu";
import { Badge } from "@/components/ui/badge";
import React from "react";

const Teams: React.FC = () => {
  return (
    <>
      <div>
        <div className="flex justify-between">
            <Badge variant={"default"}>All Teams</Badge>
            
            <TeamMenu/>
        </div>
      </div>
    </>
  );
};
export default Teams
