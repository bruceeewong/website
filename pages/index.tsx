import type { NextPage } from 'next';
import Head from 'next/head';
import classnames from 'classnames';
// import Image from 'next/image';
import { Carousel } from 'antd';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import CarouselCapsule from '../components/CarouselCapsule';
const Home: NextPage = () => {
  const [personalTags] = useState<string[]>([
    '👨‍💻全栈工程师',
    '👨‍💼独立工作者',
    '👾WEB3 BUIDLER',
    '🛹滑板仔',
    '🕺B-Boy',
  ]);
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={'relative flex w-screen  flex-col  bg-cover bg-right px-8'}
      >
        {/*<section className={'absolute right-0 top-8 -z-10 h-60 w-60'}>*/}
        {/*  <Image*/}
        {/*    src={*/}
        {/*      'https://gitee.com/bruceeewong/image-bed/raw/master/2022-3-20/1647787314079-profile.jpg'*/}
        {/*    }*/}
        {/*    className={'translate-x-16 rounded-full object-cover'}*/}
        {/*    layout={'fill'}*/}
        {/*  />*/}
        {/*</section>*/}
        <section className={'pt-8 font-bold'}>
          <h1 className={'font-b old text-4xl'}>你好，</h1>
          <h1 className={'mt-2 text-4xl '}>我叫王思哲</h1>
          <h4 className={'mt-4 text-xl'}>95后反内卷独立青年</h4>
        </section>
        <section className={'mt-8'}>
          <CarouselCapsule texts={personalTags} />
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
