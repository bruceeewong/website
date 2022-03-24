import React, { useMemo, useRef, useState } from 'react';
import classnames from 'classnames';
import { Carousel } from 'antd';
import { StyleProps } from '../../types/styles';

export type CarouselCapsuleProps = StyleProps & {
  texts: string[];
};

function useSizeClassnames(size: string) {
  const sizeMap = useRef(new Map([['normal', 'w-32 h-8 leading-8']]));
  return useMemo(
    () => sizeMap.current.get(size) || sizeMap.current.get('normal'),
    [size]
  );
}

const CarouselCapsule: React.FC<CarouselCapsuleProps> = (props) => {
  const [size] = useState('normal');
  const sizeClassnames = useSizeClassnames(size);

  return (
    <Carousel
      className={classnames(
        props.className,
        'overflow-hidden rounded-full bg-sky-500',
        sizeClassnames
      )}
      autoplay={true}
      dotPosition={'left'}
      dots={false}
    >
      {props.texts.map((text) => (
        <div key={text}>
          <small
            className={classnames(
              'text-overflow-ellipsis flex items-center justify-center',
              'font-bold text-slate-50',
              sizeClassnames
            )}
          >
            {text}
          </small>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselCapsule;
