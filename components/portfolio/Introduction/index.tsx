import React, { useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ParallaxText from '../../ParallaxText';
import Typist from '../../../components/Typist';

export const Introduction = () => {
  const { t, i18n } = useTranslation('home');
  const containerRef = useRef(null);

  const personalTags = useMemo(
    () => [t('frontend'), t('web3Buidler'), t('skater'), t('basketball')],
    [i18n.language]
  );

  return (
    <div
      ref={containerRef}
      className={
        'flex h-full w-full flex-col items-center justify-center overflow-x-hidden p-8'
      }
    >
      <div className={'flex w-full flex-col items-center'}>
        <p className={'text-xl'}>{`Hi, I'm a`}</p>
        <h1 className={'mt-1 text-3xl font-bold'}>Bruski Wang</h1>
        <p className={'mt-10 mb-2 text-2xl '}>a.k.a</p>
        <Typist
          className={'text-4xl font-bold'}
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
      </div>

      <div className={'mt-20'}>
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
