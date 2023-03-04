import type { NextPage } from 'next';
import React from 'react';
import {
  Container as FullPageContainer,
  Section as FullPageSection,
} from '../components/FullPage';
import Introduction from '../components/portfolio/Introduction';
import Skills from '../components/portfolio/Skills';
import Contacts from '../components/portfolio/Contacts';

const Home: NextPage = () => {
  return (
    <FullPageContainer>
      {/*<FullPageSection>*/}
      {/*  <Introduction />*/}
      {/*</FullPageSection>*/}
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
