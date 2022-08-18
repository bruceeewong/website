import React, { useState } from 'react';
import Layout from '../components/Layout';
import { isNonEmptyArray } from '../ utils/checker';
import classnames from 'classnames';
import Badge from '../components/Badge';
import { useTranslation } from 'react-i18next';

const TAG_BADGE_STYLE = new Map([
  ['academy', '!bg-green-500'],
  ['career', '!bg-amber-500'],
]);

const TYPE_POINT_STYLE = new Map([
  ['normal', '!bg-slate-400'],
  ['milestone', '!bg-sky-500'],
]);

type MyTag = 'all' | 'academy' | 'career';

const RoadmapPage: React.FC = (props) => {
  const { t } = useTranslation('roadmap');

  const filterOptions: { key: MyTag; label: string }[] = [
    { key: 'all', label: t('all') },
    { key: 'career', label: t('career') },
    { key: 'academy', label: t('academy') },
  ];
  const tagMetaMap = filterOptions.reduce((prev, current) => {
    return { ...prev, [current.key]: current.label };
  }, {}) as Record<string, string>;

  const myEvents = [
    {
      datetime: '2022-04-01',
      name: t('220401_neu'),
      tags: ['academy'],
      type: 'milestone',
      desc: t('220401_neu_desc'),
    },
    {
      datetime: '2021-12',
      name: t('2112_penincrypto'),
      tags: ['career'],
      type: 'milestone',
      desc: t('2112_penincrypto_desc'),
    },
    {
      datetime: '2020-10~2021-03-07',
      name: t('2010_210307_tme'),
      tags: ['career'],
      type: 'milestone',
      desc: t('2010_210307_tme_desc'),
    },
    {
      datetime: '2020-08',
      name: t('2008_marx'),
      tags: ['career'],
      type: 'normal',
      desc: t('2008_marx_desc'),
    },
    {
      datetime: '2019/09',
      name: t('1909_school_grad'),
      tags: ['academy'],
      type: 'normal',
      desc: t('1909_school_grad_desc'),
    },
    {
      datetime: '2019/07~2020/08',
      name: t('1907_2008_tencent'),
      tags: ['career'],
      type: 'milestone',
      desc: t('1907_2008_tencent_desc'),
    },
    {
      datetime: '2015/09~2019/06',
      name: t('1509_1906_hust'),
      tags: ['academy'],
      type: 'milestone',
      desc: t('1509_1906_hust_desc'),
    },
  ];
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
        <h1 className={classnames('text-2xl', 'tablet:text-4xl')}>
          {t('title')}
        </h1>
        <section
          className={classnames('scroll-view-x mt-4 flex', 'tablet:mt-6')}
        >
          {filterOptions.map((option) => (
            <Badge
              className={'mr-3 cursor-pointer'}
              key={option.key}
              type={option.key === filterTag ? 'primary' : 'default'}
              size={'small'}
              onClick={() => {
                setFilterTag(option.key);
              }}
            >
              {option.label}
            </Badge>
          ))}
        </section>
        <section className={'py-6'}>
          {myEvents
            .filter((e) => {
              if (filterTag === 'all') return true;
              return e.tags.includes(filterTag);
            })
            .map((e) => (
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
                            TAG_BADGE_STYLE.get(tag)
                          )}
                          key={tag}
                          size={'small'}
                        >
                          {tagMetaMap[tag]}
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
