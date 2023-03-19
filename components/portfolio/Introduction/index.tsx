import React, { useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ParallaxText from '../../ParallaxText';
import Typist from '../../../components/Typist';
import Header from '../../Header';

export const Introduction = () => {
  const { t, i18n } = useTranslation('home');
  const containerRef = useRef(null);

  const personalTags = useMemo(
    () => [t('frontend'), t('backend'), t('networks'), t('blockchain')],
    [i18n.language]
  );

  return (
    <div
      ref={containerRef}
      className={
        'relative flex h-full w-full flex-col items-center justify-center overflow-x-hidden p-8'
      }
    >
      <Header className={'absolute top-0 z-10 px-6 py-4'} />
      <div className={'flex w-full flex-col '}>
        <p className={'text-2xl'}>{`Hi 👋 My name is`}</p>
        <h1
          className={'mt-1 text-4xl font-bold'}
          style={{
            background: '-webkit-linear-gradient(0deg, #0ea5e9, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Bruski Wang
        </h1>
        <p
          className={'mt-4 mb-2 text-2xl'}
        >{`I'm a fullstack developer with burning passions for `}</p>
        <Typist
          className={'text-4xl font-bold'}
          sentences={personalTags}
          loop={true}
          showCursor={false}
          typingSpeed={100}
          deletingSpeed={50}
          style={{
            background: '-webkit-linear-gradient(0deg, #0ea5e9, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        />
      </div>

      <div className={'mt-32'}>
        <ParallaxText
          baseVelocity={-5}
          scrollClassName={'text-gray-300'}
          containerRef={containerRef}
        >
          CLEAN CODE
        </ParallaxText>
        <ParallaxText
          baseVelocity={5}
          scrollClassName={'text-gray-300'}
          containerRef={containerRef}
        >
          THAT WORKS
        </ParallaxText>
      </div>
    </div>
  );
};

export default Introduction;
