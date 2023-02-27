import React from 'react';
import SkillCard, { SkillSection } from '../../SkillCard';

export const Skills = () => {
  return (
    <div className={'flex h-full w-full flex-col items-center px-8 pb-24'}>
      <div className={'mt-8 text-center'}>
        <p className={'text-xl'}>Check out my</p>
        <h1 className={'text-4xl font-bold'}>SKILL SETS</h1>
      </div>
      <div className={'mt-6'}>
        <SkillCard title={'FrontEnd'} img={'/img/fe-logo.png'}>
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
      </div>
    </div>
  );
};

export default Skills;
