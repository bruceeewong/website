import React, { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import { WEBSITE_TITLE } from '../constants';
import Button from '../components/Button';
import { isNonEmptyArray } from '../ utils/checker';

const RoadmapPage: React.FC = () => {
  const [myEvents, setMyEvents] = useState([
    {
      datetime: '2021-03-07',
      name: '离职-腾讯音乐',
      tags: ['career'],
      type: 'normal',
      desc: '反内卷第一步！申请了美国的master，休养报警的身体，想要work-life balance，想all in web3',
    },
    {
      datetime: '2022-08',
      name: 'Marx火星移民计划——腾讯智慧零售比赛三等奖',
      tags: ['career'],
      type: 'milestone',
      desc: '',
    },
    {
      datetime: '2019-06',
      name: '本科毕业 - 华中科技大学',
      tags: ['academy'],
      type: 'normal',
      desc: '',
    },

    {
      datetime: '1997-03-25',
      name: '我出生啦',
      tags: [],
      type: 'normal',
      desc: '',
    },
  ]);
  return (
    <Layout>
      <Head>
        <title>Roadmap | {WEBSITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'page-edge'}>
        <h1 className={'m text-2xl font-bold'}>人生路线</h1>
        <section className={'scroll-view-x mt-4 flex'}>
          <Button size={'small'}>全部</Button>
          <Button size={'small'}>学业</Button>
          <Button size={'small'}>职业</Button>
          <Button size={'small'}>规划</Button>
          <Button size={'small'}>里程碑</Button>
        </section>
        <section className={'py-8'}>
          {myEvents.map((e) => (
            <div className={'flex'} key={e.name}>
              <div className={'relative flex w-6 items-center justify-center'}>
                <div className={'h-full w-2 bg-slate-100'} />
                <div
                  className={
                    'absolute top-8 z-10 h-5 w-5 rounded-full border-2 bg-sky-500'
                  }
                />
              </div>
              <div className={'flex-1 px-4 py-2'}>
                <small className={'text-xs'}>{e.datetime}</small>
                <h3
                  className={'text-overflow-ellipsis-2 text-md w-64 font-bold'}
                >
                  {e.name}
                </h3>
                {isNonEmptyArray(e.tags) ? (
                  <div className={'flex items-center'}>
                    {e.tags.map((tag) => (
                      <span className={'mr-2 text-xs'} key={tag}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                ) : null}

                {e.desc ? (
                  <p className={'text-overflow-ellipsis-4 mt-2 w-64 text-sm'}>
                    {e.desc}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default RoadmapPage;
