import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import { WEBSITE_TITLE } from '../constants';
import avatarPic from '../public/avatar.png';
import Typist from 'react-text-typist';

const Home: NextPage = () => {
  const [personalTags] = useState<string[]>([
    '全栈工程师',
    '独立工作者',
    'WEB3 BUIDLER',
    '滑板仔',
    'B-Boy',
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
        style={{
          backgroundImage: 'url(/layered-waves-haikei@23.svg)',
        }}
      >
        <section className={'flex justify-between'}>
          <div>
            <h1 className={'text-3xl'}>你好，</h1>
            <h1 className={'mt-1 text-3xl '}>我叫王思哲</h1>
            <h4 className={'text-md mt-1'}>95后反内卷独立青年</h4>
          </div>
          <div className={'h-28 w-28'}>
            <Image src={avatarPic} alt={'avatar'} className={'rounded-full'} />
          </div>
        </section>
        <section className={'mt-4 flex text-xl'}>
          <span className={'mr-1'}>我是一位</span>
          <Typist
            sentences={personalTags}
            loop={true}
            showCursor={false}
            typingSpeed={100}
            style={{
              background: '-webkit-linear-gradient(0deg, #0ea5e9, #8b5cf6)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
            }}
          />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
