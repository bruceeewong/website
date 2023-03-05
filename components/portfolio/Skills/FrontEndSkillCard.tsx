import React from 'react';
import SkillCard, { SkillCardProps, SkillSection } from '../../SkillCard';

export const FrontEndSkillCard = (props: Partial<SkillCardProps>) => {
  return (
    <SkillCard
      title={'FrontEnd'}
      img={'/img/frontend--sm.png'}
      circleClassName={'bg-amber-500'}
      shouldReset={props.shouldReset}
    >
      <SkillSection
        title={'Languages'}
        labels={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Dart']}
      />
      <SkillSection
        title={'Frameworks'}
        labels={[
          'React.js',
          'Vue.js',
          'Node.js',
          'Next.js',
          'React Native',
          'Flutter',
        ]}
      />
      <SkillSection
        title={'Tools'}
        labels={[
          'Redux',
          'React Router',
          'Vuex',
          'Vue Router',
          'SWR',
          'React Query',
          'Apollo GraphQL',
          'ESLint',
          'Jest',
          'Enzyme',
          'React Testing Library',
          'Storybook',
          'NPM',
          'Webpack',
          'Rollup',
          'Vite',
        ]}
      />
      <SkillSection title={'IDE'} labels={['Webstorm', 'VS Code']} />
    </SkillCard>
  );
};
