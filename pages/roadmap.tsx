import React, { useState } from 'react';
import Layout from '../components/Layout';
import { isNonEmptyArray } from '../ utils/checker';
import classnames from 'classnames';
import Badge from "../components/Badge";

const TAG_BADGE_STYLE = new Map([
  ['academy', '!bg-green-500'],
  ['career', '!bg-amber-500'],
])

const TYPE_POINT_STYLE = new Map([
  ['normal', '!bg-slate-400'],
  ['milestone', '!bg-sky-500'],
])

type MyTag = 'all' | 'academy' | 'career'

const filterOptions: {key: MyTag, label: string}[] = [
  { key: 'all', label: '全部' },
  { key: 'career', label: '职业' },
  { key: 'academy', label: '学业' },
]

const RoadmapPage: React.FC = (props) => {
  const [myEvents] = useState([
    {
      datetime: '2022-04-01',
      name: 'Master录取-Northeastern University',
      tags: ['academy'],
      type: 'milestone',
      desc: 'Electronic and Computer Engineering / Computer Network and Security',
    },
    {
      datetime: '2021-12',
      name: 'PeninCrypto成立',
      tags: ['career'],
      type: 'milestone',
      desc: 'ALL IN WEB3, LFG!',
    },
    {
      datetime: '2021-03-07',
      name: '离职-腾讯音乐（深圳）',
      tags: ['career'],
      type: 'milestone',
      desc: '反内卷第一步！申请了美国的master，休养报警的身体，想要work-life balance，想all in web3',
    },
    {
      datetime: '2020-10',
      name: '入职-腾讯音乐（深圳）',
      tags: ['career'],
      type: 'milestone',
      desc: 'Web前端开发工程师',
    },
    {
      datetime: '2020-08',
      name: '获腾讯智慧零售比赛三等奖',
      tags: ['career'],
      type: 'normal',
      desc: '《Marx火星移民计划》',
    },
    {
      datetime: '2019/09',
      name: '获华中科技大学校级优秀毕业设计',
      tags: ['academy'],
      type: 'normal',
      desc: '《漫游华科》',
    },
    {
      datetime: '2019/07',
      name: '入职-腾讯（深圳）',
      tags: ['career'],
      type: 'milestone',
      desc: '技术工程事业群/运营开发',
    },
    {
      datetime: '2019/06',
      name: '本科毕业-华中科技大学',
      tags: ['academy'],
      type: 'milestone',
      desc: '软件学院/数字媒体技术',
    },
  ]);
  const [filterTag, setFilterTag] = useState<MyTag>('all');
  return (
    <Layout title={'Roadmap'}>
      <div
        className={classnames(
          'px-8',
          'tablet:px-16',
          'desktop:mx-auto desktop:w-[56rem]'
        )}
      >
        <h1 className={classnames('text-2xl', 'tablet:text-4xl')}>个人履历</h1>
        <section className={classnames('scroll-view-x mt-4 flex', 'tablet:mt-6')}>
          {filterOptions.map(option => (
            <Badge className={'mr-3 cursor-pointer'} key={option.key}
              type={option.key === filterTag ? 'primary' : 'default'}
                   size={'small'}
                   onClick={() => {setFilterTag(option.key)}}
            >{option.label}</Badge>
          ))}
        </section>
        <section className={'py-6'}>
          {myEvents.filter(e => {
            if (filterTag === 'all') return true;
            return e.tags.includes(filterTag);
          }).map((e) => (
            <div className={'flex'} key={e.name}>
              <div
                className={classnames(
                  'relative flex w-6 items-center justify-center',
                  'tablet:w-8'
                )}
              >
                <div
                  className={classnames(
                    'h-full w-2 bg-slate-100',
                    'tablet:w-3'
                  )}
                />
                <div
                  className={classnames(
                    'absolute top-8 z-10 h-5 w-5 rounded-full border-2 bg-sky-500',
                    'tablet:h-8 tablet:w-8 tablet:border-4',
                    TYPE_POINT_STYLE.get(e.type)
                  )}
                />
              </div>
              <div
                className={classnames(
                  'flex-1 px-4 py-2',
                  'tablet:px-6 tablet:py-4'
                )}
              >
                <small className={classnames('text-xs', 'tablet:text-lg')}>
                  {e.datetime}
                </small>
                <h3
                  className={classnames(
                    'text-overflow-ellipsis-2 text-md',
                    'tablet:text-xl'
                  )}
                >
                  {e.name}
                </h3>
                {isNonEmptyArray(e.tags) ? (
                  <div className={'mt-1 flex items-center'}>
                    {e.tags.map((tag) => (
                      <Badge
                        className={classnames(
                          'mr-2',
                          'tablet:text-lg',
                          TAG_BADGE_STYLE.get(tag),
                        )}
                        key={tag}
                        size={'small'}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                ) : null}

                {e.desc ? (
                  <p
                    className={classnames(
                      'text-overflow-ellipsis-4 mt-1 text-sm text-slate-500',
                      'tablet:text-lg'
                    )}
                  >
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
