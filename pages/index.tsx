import type { NextPage } from 'next';
import React from 'react';
import {
  Container as FullPageContainer,
  Section as FullPageSection,
} from '../components/FullPage';

const Home: NextPage = () => {
  return (
    <FullPageContainer>
      <FullPageSection style={{ backgroundColor: 'red' }}></FullPageSection>
      <FullPageSection style={{ backgroundColor: 'green' }}></FullPageSection>
      <FullPageSection style={{ backgroundColor: 'blue' }}></FullPageSection>
    </FullPageContainer>
  );
};

export default Home;
