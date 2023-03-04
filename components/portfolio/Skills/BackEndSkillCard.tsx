import React from 'react';
import SkillCard, { SkillSection } from '../../SkillCard';

export const BackEndSkillCard = () => {
  return (
    <SkillCard
      title={'BackEnd'}
      img={'/img/fe-logo.png'}
      className={'bg-slate-500'}
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
