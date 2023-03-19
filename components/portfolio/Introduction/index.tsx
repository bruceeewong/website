import React, { useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ParallaxText from '../../ParallaxText';
import Typist from '../../../components/Typist';
import Header from '../../Header';
import classnames from 'classnames';

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
      className={classnames(
        'relative flex h-full w-full flex-col items-center justify-center overflow-x-hidden p-8',
        ''
      )}
    >
      <Header
        className={classnames(
          'absolute top-0 z-10 px-6 py-4',
          'tablet:mx-auto tablet:max-w-[1440px] tablet:px-0 tablet:py-8'
        )}
      />
      <div
        className={classnames(
          'flex w-full flex-col',
          'mx-auto tablet:max-w-[1440px]'
        )}
      >
        <p
          className={classnames('text-2xl', 'tablet:text-4xl ')}
        >{`Hi 👋 My name is`}</p>
        <h1
          className={classnames(
            'linear-gradient-text text-4xl font-bold',
            'tablet:mt-2 tablet:text-6xl tablet:leading-snug'
          )}
        >
          Bruski Wang
        </h1>
        <p
          className={classnames('mt-4 text-2xl', 'tablet:mt-8 tablet:text-4xl')}
        >{`I'm a fullstack developer `}</p>
        <p
          className={classnames(
            'mb-2 mt-1 text-2xl',
            ' tablet:mb-4 tablet:mt-2 tablet:text-4xl'
          )}
        >{`with passions 🔥 for`}</p>

        <Typist
          className={classnames(
            'linear-gradient-text text-4xl font-bold',
            'tablet:text-6xl'
          )}
          sentences={personalTags}
          loop={true}
          showCursor={false}
          typingSpeed={100}
          deletingSpeed={50}
        />
      </div>

      <div className={'mt-32'}>
        <ParallaxText
          baseVelocity={-5}
          scrollClassName={classnames('text-gray-300', 'tablet:text-8xl')}
          containerRef={containerRef}
        >
          CLEAN CODE
        </ParallaxText>
        <ParallaxText
          baseVelocity={5}
          scrollClassName={classnames('text-gray-300', 'tablet:text-8xl')}
          containerRef={containerRef}
        >
          THAT WORKS
        </ParallaxText>
      </div>
    </div>
  );
};

export default Introduction;
