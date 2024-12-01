import { Badge } from "@/components/ui/badge";
import React from "react";

interface ProfessionalCardProps {
  data: {
    id: number;
    date: string;
    title: string;
    institution: string;
    description: string;
  }[];
  sectionTitle: string;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ data, sectionTitle }) => {
  return (
    <div>
      <div className="section-title mb-10">{sectionTitle}</div>
      <div className="section flex flex-col gap-8 md:gap-10">
        {data.map((index, i) => (
          <div key={i}>
            <div
              className={`professional-card ${
                i === data.length - 1 ? "border-none pb-0 xl:pb-0" : ""
              }`}
            >
              <div className="w-full xl:max-w-[315px]">
                <div className="flex flex-col items-start gap-4 mt-2 xl:mt-3">
                  <Badge className="hidden xl:block badge">
                    {index.date}
                  </Badge>
                  <div className="space-y-3 xl:space-y-1">
                    <h5 className="professional-card-title">{index.title}</h5>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-base font-normal text-rc_purple">
                        {index.institution}
                      </span>
                      <Badge className="xl:hidden rounded-full">{index.date}</Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="professional-card-description">{index.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalCard;
