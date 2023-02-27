import type { NextPage } from 'next';
import React from 'react';
import {
  Container as FullPageContainer,
  Section as FullPageSection,
} from '../components/FullPage';
import Introduction from '../components/portfolio/Introduction';
import Header from '../components/Header';
import classnames from 'classnames';
import Interests from '../components/portfolio/Interests';
import Skills from '../components/portfolio/Skills';
import Contacts from '../components/portfolio/Contacts';

const Home: NextPage = () => {
  return (
    <FullPageContainer>
      {/*<Header*/}
      {/*  className={classnames(*/}
      {/*    'fixed top-0 z-40 px-8 py-6',*/}
      {/*    'tablet:px-16 tablet:py-6'*/}
      {/*  )}*/}
      {/*/>*/}
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
