import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FrontEndSkillCard } from './FrontEndSkillCard';
import { EffectCards, Pagination } from 'swiper';
import { BackEndSkillCard } from './BackEndSkillCard';
import { NetworkSkillCard } from './NetworkSkillCard';
import { DatabaseSkillCard } from './DatabaseSkillCard';

export const Skills = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  return (
    <div className={'flex h-full w-full flex-col items-center justify-center'}>
      <div className={'text-center'}>
        <p className={'text-xl'}>Check out my</p>
        <h1 className={'text-4xl font-bold'}>SKILL SETS</h1>
      </div>
      <div className={'mt-8 mb-16 w-full overflow-hidden'}>
        <Swiper
          className={'h-[400px] w-[280px]'}
          effect={'cards'}
          grabCursor={true}
          pagination={{
            bulletActiveClass: 'bg-white',
          }}
          modules={[EffectCards, Pagination]}
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
      </div>
      <div className={'text-center'}>
        <p className={'text-xl'}>and my</p>
        <h1 className={'text-4xl font-bold'}>PROJECTS</h1>
        <p className={'text-xl'}>👇🏻👇🏻👇🏻</p>
      </div>
    </div>
  );
};

export default Skills;
