import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import { FrontEndSkillCard } from './FrontEndSkillCard';
import { EffectCards, Pagination } from 'swiper';
import { BackEndSkillCard } from './BackEndSkillCard';
import { NetworkSkillCard } from './NetworkSkillCard';

export const Skills = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  return (
    <div className={'flex flex-col items-center'}>
      <div className={'mt-12 text-center'}>
        <p className={'text-xl'}>Check out my</p>
        <h1 className={'text-4xl font-bold'}>SKILL SETS</h1>
      </div>
      <div className={'mt-12 w-full overflow-hidden'}>
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
            <NetworkSkillCard shouldReset={activeCardIndex !== 2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
