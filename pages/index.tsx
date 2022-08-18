import type { NextPage } from 'next';
import React, { useEffect, useMemo, useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import avatarPic from '../public/avatar.png';
import Typist from 'react-text-typist';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {
  const { locale } = useRouter();
  const { t, i18n } = useTranslation('home');

  useEffect(() => {
    console.log('locale', locale);
    console.log('heroTitle', t('heroTitle'));
    console.log('i18n', i18n.language);
  }, [locale, i18n]);

  const personalTags = useMemo(
    () => [
      t('fullstack'),
      t('indeDev'),
      t('web3Buidler'),
      t('skater'),
      t('bboy'),
    ],
    [i18n.language]
  );
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
              <h1
                className={classnames(
                  'text-3xl text-slate-900',
                  'tablet:text-6xl'
                )}
              >
                {t('hello')}
              </h1>
              <h1
                className={classnames(
                  'mt-1 text-3xl text-slate-900',
                  'tablet:mt-3 tablet:text-6xl'
                )}
              >
                {t('intro')}
              </h1>
              <h4
                className={classnames(
                  'text-md mt-1 text-slate-900',
                  'tablet:mt-4 tablet:text-2xl'
                )}
              >
                {t('headTitle')}
              </h4>
            </div>
            <div
              className={classnames(
                'h-28 w-28 rounded-full',
                'tablet:h-48 tablet:w-48'
              )}
            >
              <Image
                src={avatarPic}
                alt={'avatar'}
                className={'rounded-full'}
              />
            </div>
          </section>
          <section
            className={classnames(
              'mt-3 flex text-xl',
              'tablet:mt-6 tablet:text-3xl'
            )}
          >
            <span className={'mr-2 text-slate-900'}>{t('Iam')}</span>
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

          <section
            className={classnames(
              'mt-3 flex text-xl',
              'tablet:mt-6 tablet:text-3xl'
            )}
          >
            {t('studyAt')}
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
