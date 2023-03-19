import React, { FC, ReactNode, useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FrontEndSkillCard } from './FrontEndSkillCard';
import { EffectCards, EffectCoverflow, Pagination } from 'swiper';
import { BackEndSkillCard } from './BackEndSkillCard';
import { NetworkSkillCard } from './NetworkSkillCard';
import { DatabaseSkillCard } from './DatabaseSkillCard';
import classnames from 'classnames';
import { Breakpoint, useBreakpoint } from '../../../ utils/breakpoint';

export const Skills = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const { breakpoint } = useBreakpoint();

  const getSwiper = function (breakpoint: Breakpoint) {
    if (breakpoint === 'desktop') {
      const PCSwiper: FC = (props) => {
        return (
          <Swiper
            className={classnames('w-full')}
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            grabCursor={true}
            initialSlide={1}
          >
            <SwiperSlide className={'rounded-3xl'}>
              <FrontEndSkillCard />
            </SwiperSlide>
            <SwiperSlide className={'rounded-3xl'}>
              <BackEndSkillCard />
            </SwiperSlide>
            <SwiperSlide className={'rounded-3xl'}>
              <DatabaseSkillCard />
            </SwiperSlide>
            <SwiperSlide className={'rounded-3xl'}>
              <NetworkSkillCard />
            </SwiperSlide>
          </Swiper>
        );
      };
      return PCSwiper;
    } else {
      const MobileSwiper: FC = (props) => {
        return (
          <Swiper
            className={classnames('h-[400px] w-[280px]')}
            effect={'cards'}
            modules={[EffectCards, Pagination]}
            grabCursor={true}
            pagination={{
              bulletActiveClass: 'bg-white',
            }}
            onSlideChange={({ activeIndex }) => {
              setActiveCardIndex(activeIndex);
            }}
          >
            <SwiperSlide className={'rounded-3xl'}>
              <FrontEndSkillCard shouldReset={activeCardIndex !== 0} />
            </SwiperSlide>
            <SwiperSlide className={'rounded-3xl'}>
              <BackEndSkillCard shouldReset={activeCardIndex !== 1} />
            </SwiperSlide>
            <SwiperSlide className={'rounded-3xl'}>
              <DatabaseSkillCard shouldReset={activeCardIndex !== 2} />
            </SwiperSlide>
            <SwiperSlide className={'rounded-3xl'}>
              <NetworkSkillCard shouldReset={activeCardIndex !== 3} />
            </SwiperSlide>
          </Swiper>
        );
      };
      return MobileSwiper;
    }
  };

  const CustomSwiper = useMemo(() => {
    if (!breakpoint) return () => <div />;
    return getSwiper(breakpoint);
  }, [breakpoint]);

  return (
    <div className={'flex h-full w-full flex-col items-center justify-center'}>
      <div className={'text-center'}>
        <p className={classnames('text-xl', 'tablet:text-4xl')}>Check out my</p>
        <h1
          className={classnames(
            'linear-gradient-text mt-2 text-4xl font-bold',
            'tablet:my-2 tablet:text-6xl '
          )}
        >
          SKILL SETS
        </h1>
      </div>
      <div className={'mt-8 mb-16 w-full overflow-hidden'}>
        <CustomSwiper />
      </div>
      <div className={classnames('text-center', 'tablet:mt-12')}>
        <p className={classnames('text-xl', 'tablet:text-4xl')}>and my</p>
        <h1
          className={classnames(
            'linear-gradient-text text-4xl font-bold',
            'tablet:my-2 tablet:text-6xl'
          )}
        >
          PROJECTS
        </h1>
        <p className={classnames('text-xl', 'tablet:text-4xl')}>👇🏻👇🏻👇🏻</p>
      </div>
    </div>
  );
};

export default Skills;
