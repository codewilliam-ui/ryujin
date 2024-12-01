import ProfessionalCard from '@/components/common/professional-card'
import { cardEducation } from '@/data/card-professional'
import React from 'react'

const Education: React.FC = () => {
  return (
    <>
      <ProfessionalCard
      data={cardEducation}
      sectionTitle='Formação Acadêmica e Certificações'
      />
    </>
  )
}

export default Education