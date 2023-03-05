import React from 'react';
import SkillCard, { SkillCardProps, SkillSection } from '../../SkillCard';

export const DatabaseSkillCard = (props: Partial<SkillCardProps>) => {
  return (
    <SkillCard
      title={'Database'}
      img={'/img/database--sm.png'}
      circleClassName={'bg-blue-500'}
      shouldReset={props.shouldReset}
    >
      <SkillSection title={'Languages'} labels={['SQL']} />
      <SkillSection
        title={'Databases'}
        labels={['MySQL', 'Redis', 'MongoDB']}
      />
      <SkillSection
        title={'Tools'}
        labels={['MySQL CLI', 'MySQL Bench', 'Redis CLI', 'MongoDB CLI']}
      />
      <SkillSection title={'IDE'} labels={['Vim', 'DataGrip']} />
    </SkillCard>
  );
};
