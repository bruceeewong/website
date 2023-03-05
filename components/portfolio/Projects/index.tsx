import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './index.module.css';
import Suiet from './Suiet';

export default function App() {
  return (
    <div className={'h-full w-full'}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles['swiper-slide']}>
          <Suiet />
        </SwiperSlide>
        {/*<SwiperSlide className={styles['swiper-slide ']}>Slide 2</SwiperSlide>*/}
        {/*<SwiperSlide className={styles['swiper-slide ']}>Slide 3</SwiperSlide>*/}
      </Swiper>
    </div>
  );
}
