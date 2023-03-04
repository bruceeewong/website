import React from 'react';
import SkillCard, { SkillSection } from '../../SkillCard';

export const NetworkSkillCard = () => {
  return (
    <SkillCard
      title={'Network'}
      img={'/img/fe-logo.png'}
      className={'bg-green-500'}
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
