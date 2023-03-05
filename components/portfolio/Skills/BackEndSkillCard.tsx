import React from 'react';
import SkillCard, { SkillCardProps, SkillSection } from '../../SkillCard';

export const BackEndSkillCard = (props: Partial<SkillCardProps>) => {
  return (
    <SkillCard
      title={'BackEnd'}
      img={'/img/backend--sm.png'}
      circleClassName={'bg-green-500'}
      shouldReset={props.shouldReset}
    >
      <SkillSection
        title={'Languages'}
        labels={['Python', 'Node.js', 'Java', 'Shell Scripting']}
      />
      <SkillSection
        title={'Frameworks'}
        labels={['Flask', 'Express.js', 'Nest.js']}
      />
      <SkillSection
        title={'Tools'}
        labels={[
          'Docker',
          'Nginx',
          'Apache',
          'GraphQL',
          'Domains',
          'CDN',
          'OSS',
          'Cloud VM',
        ]}
      />
      <SkillSection
        title={'IDE'}
        labels={['Vim', 'PyCharm', 'VS Code', 'Intellij IDEA']}
      />
    </SkillCard>
  );
};
