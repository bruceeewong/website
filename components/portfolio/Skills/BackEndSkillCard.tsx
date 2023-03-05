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
        labels={['HTML', 'CSS', 'JavaScript', 'TypeScript']}
      />
      <SkillSection
        title={'Frameworks'}
        labels={[
          'React.js',
          'Vue.js',
          'Node.js',
          'Next.js',
          'Express.js',
          'GraphQL',
        ]}
      />
      <SkillSection
        title={'Tools'}
        labels={[
          'Redux',
          'React Router',
          'Vuex',
          'Vue Router',
          'Jest',
          'ESLint',
          'Husky',
          'LintStage',
          'Commitizen',
          'NPM',
          'Webpack',
          'Rollup',
          'Vite',
          'Postman',
        ]}
      />
      <SkillSection title={'IDE'} labels={['Webstorm', 'VS Code']} />
    </SkillCard>
  );
};
