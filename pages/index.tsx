import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import classnames from 'classnames';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header className={'px-8 py-8'} />

      <main className={'relative flex max-w-full flex-col justify-center px-8'}>
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
        <section className={'mt-12 h-64 w-full bg-gray'}></section>
      </main>

      <Footer className={'mt-12 w-full bg-gray-light px-8'} />
    </div>
  );
};

export default Home;
