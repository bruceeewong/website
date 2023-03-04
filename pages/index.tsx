import type { NextPage } from 'next';
import React from 'react';
import dynamic from 'next/dynamic';
import {
  Container as FullPageContainer,
  Section as FullPageSection,
} from '../components/FullPage';
import Introduction from '../components/portfolio/Introduction';
const Skills = dynamic(() => import('../components/portfolio/Skills'), {
  ssr: false,
});
const Contacts = dynamic(() => import('../components/portfolio/Contacts'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <FullPageContainer>
      <FullPageSection>
        <Introduction />
      </FullPageSection>
      <FullPageSection>
        <Skills />
      </FullPageSection>
      <FullPageSection>
        <Contacts />
      </FullPageSection>
    </FullPageContainer>
  );
};

export default Home;
