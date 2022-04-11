import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import { WEBSITE_TITLE } from '../constants';
import avatarPic from '../public/avatar.png';
import Typist from 'react-text-typist';
import classnames from 'classnames';

const Home: NextPage = () => {
  const [personalTags] = useState<string[]>([
    '全栈工程师',
    '独立工作者',
    'WEB3 BUIDLER',
    '滑板仔',
    'B-Boy',
  ]);
  return (
    <Layout title={'Home'}>
      <div
        className={classnames(
          'bg relative mt-6 flex flex-1  flex-col bg-cover bg-right px-8',
          'tablet:px-16'
        )}
      >
        <div className={classnames('desktop:mx-auto desktop:w-[56rem]')}>
          <section className={classnames('flex justify-between')}>
            <div>
              <h1 className={classnames('text-3xl', 'tablet:text-6xl')}>
                你好，
              </h1>
              <h1
                className={classnames(
                  'mt-1 text-3xl',
                  'tablet:mt-3 tablet:text-6xl'
                )}
              >
                我叫王思哲
              </h1>
              <h4
                className={classnames(
                  'text-md mt-1',
                  'tablet:mt-3 tablet:text-3xl'
                )}
              >
                95后反内卷独立青年
              </h4>
            </div>
            <div className={classnames('h-28 w-28', 'tablet:h-48 tablet:w-48')}>
              <Image
                src={avatarPic}
                alt={'avatar'}
                className={'rounded-full'}
              />
            </div>
          </section>
          <section
            className={classnames(
              'mt-2 flex text-xl',
              'tablet:mt-4 tablet:text-4xl'
            )}
          >
            <span className={'mr-1'}>我是一位</span>
            <Typist
              sentences={personalTags}
              loop={true}
              showCursor={false}
              typingSpeed={100}
              style={{
                background: '-webkit-linear-gradient(0deg, #0ea5e9, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            />
          </section>
        </div>
      </div>

      <style jsx>{`
        .bg {
          background-image: url('/layered-waves-haikei@23.svg');
          background-repeat: no-repeat;
          background-position-y: bottom;
        }
        @media (min-width: 1280px) {
          .bg {
            background-image: url('/layered-waves-haikei@169.svg');
          }
        }
      `}</style>
    </Layout>
  );
};

export default Home;
