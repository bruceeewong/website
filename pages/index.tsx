import type { NextPage } from 'next';
import Head from 'next/head';
import classnames from 'classnames';
// import Image from 'next/image';
import { Carousel } from 'antd';
import { useState } from 'react';
import Layout from '../components/Layout';

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

      <main
        className={classnames(
          'relative flex w-screen flex-1 flex-col  bg-cover bg-right',
          'mt-16 px-8'
        )}
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
        <section className={'pt-12 font-bold'}>
          <h1 className={'font-b old text-4xl'}>你好，</h1>
          <h1 className={'mt-2 text-4xl '}>我叫王思哲</h1>
          <h4 className={'mt-4 text-xl'}>95后反内卷独立青年</h4>
        </section>
        <section className={'mt-12 flex flex-col justify-center'}>
          {/*<div*/}
          {/*  className={classnames(*/}
          {/*    'flex justify-center self-start overflow-hidden px-2',*/}
          {/*    'border-radius-2  rounded-full  border-2 border-sky-600 bg-sky-500'*/}
          {/*  )}*/}
          {/*>*/}
          {/*  <Carousel*/}
          {/*    autoplay={true}*/}
          {/*    dotPosition={'left'}*/}
          {/*    dots={false}*/}
          {/*    className={'w-36'}*/}
          {/*  >*/}
          {/*    {personalTags.map((tag) => (*/}
          {/*      <div*/}
          {/*        key={tag}*/}
          {/*        className={*/}
          {/*          'text-center text-sm font-bold leading-8 text-slate-50'*/}
          {/*        }*/}
          {/*      >*/}
          {/*        {tag}*/}
          {/*      </div>*/}
          {/*    ))}*/}
          {/*  </Carousel>*/}
          {/*</div>*/}
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
      </main>
    </Layout>
  );
};

export default Home;
