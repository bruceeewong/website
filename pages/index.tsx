import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import classnames from 'classnames';
import Footer from '../components/Footer';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className=" flex min-h-screen w-screen flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header className={'sticky top-0 z-10 px-8 py-4'} />

      <main
        className={
          'relative flex w-screen flex-1 flex-col  bg-cover bg-right px-8'
        }
      >
        <section className={'absolute right-0 top-8 -z-10 h-64 w-64'}>
          <Image
            src={
              'https://gitee.com/bruceeewong/image-bed/raw/master/2022-3-20/1647787314079-profile.jpg'
            }
            className={'translate-x-20 rounded-full object-cover'}
            layout={'fill'}
            priority
          />
        </section>
        <section className={'pt-8'}>
          <h1 className={'text-4xl font-bold'}>你好，</h1>
          <h1 className={'mt-2 text-4xl font-bold'}>我叫王思哲</h1>
          <h4 className={'mt-4 text-xl font-bold'}>95后反内卷独立青年</h4>
        </section>
        <section className={'mt-12 flex flex-col justify-center'}>
          <div
            className={classnames(
              'border-radius-2  self-start rounded-full border-2 border-solid px-4  py-1'
            )}
          >
            <span>全栈开发者</span>
          </div>
          <div
            className={classnames(
              'border-radius-2  self-start rounded-full border-2 border-solid px-4 py-1',
              'mt-4'
            )}
          >
            <span>🤣</span>
            <span className={'ml-2'}>WEB3 ONBOARDING</span>
          </div>
        </section>
      </main>

      <Footer className={'w-full bg-gray-light px-8'} />
    </div>
  );
};

export default Home;
