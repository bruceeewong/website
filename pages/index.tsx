import type { NextPage } from 'next';
import React from 'react';
import dynamic from 'next/dynamic';
import {
  Container as FullPageContainer,
  Section as FullPageSection,
} from '../components/FullPage';
import Introduction from '../components/portfolio/Introduction';
import Head from 'next/head';
import { WEBSITE_TITLE } from '../constants';
const Skills = dynamic(() => import('../components/portfolio/Skills'), {
  ssr: false,
});
const Contacts = dynamic(() => import('../components/portfolio/Contacts'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <FullPageContainer>
      <Head>
        <title>{WEBSITE_TITLE}</title>
      </Head>
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
