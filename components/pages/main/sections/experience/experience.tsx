import ProfessionalCard from "@/components/common/professional-card";
import { cardExperience } from "@/data/card-professional";
import React from "react";

const Experience: React.FC = () => {
  return (
    <>
      <ProfessionalCard
        data={cardExperience}
        sectionTitle="Experiência Profissional"
      />
    </>
  );
};

export default Experience