import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import CarouselCapsule from '../components/CarouselCapsule';
import { WEBSITE_TITLE } from '../constants';

const Home: NextPage = () => {
  const [personalTags] = useState<string[]>([
    '👨‍💻全栈工程师',
    '👨‍💼独立工作者',
    '👾WEB3',
    '🛹滑板仔',
    '🕺B-Boy',
  ]);
  return (
    <Layout>
      <Head>
        <title>Home | {WEBSITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={
          'relative mt-6 flex w-screen flex-1 flex-col  bg-cover bg-right px-8'
        }
      >
        <section className={'absolute right-0 bottom-0 -z-10 w-2/3'}>
          <img
            src={
              'https://gitee.com/bruceeewong/image-bed/raw/master/2022-3-24/1648129483996-bruski_wang.png'
            }
            className={'max-w-full'}
          />
        </section>
        <section className={' font-bold opacity-80'}>
          <h1 className={'font-b old text-4xl'}>你好，</h1>
          <h1 className={'mt-1 text-4xl '}>我叫王思哲</h1>
          <h4 className={'mt-1 text-lg'}>95后反内卷独立青年</h4>
        </section>
        <section className={'mt-5'}>
          <CarouselCapsule className={'opacity-90'} texts={personalTags} />
          {/*<div*/}
          {/*  className={classnames(*/}
          {/*    'border-radius-2   rounded-full border-2 text-slate-500',*/}
          {/*    'mt-4 self-start px-4 py-1'*/}
          {/*  )}*/}
          {/*>*/}
          {/*  <span>🤣</span>*/}
          {/*  <span className={'ml-2'}>WEB3 ONBOARDING</span>*/}
          {/*</div>*/}
        </section>
      </div>
    </Layout>
  );
};

export default Home;
