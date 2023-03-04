import styles from './index.module.scss';
import { FC, useEffect, useState } from 'react';
import { Chip } from '@mui/material';
import classnames from 'classnames';
import { StyleProps } from '../../types/styles';

export type SkillCardProps = StyleProps & {
  img: string;
  title: string;
  shouldReset?: boolean;
  circleClassName?: string;
};

export interface SkillSectionProps {
  title: string;
  labels: string[];
}

export const SkillSection: FC<SkillSectionProps> = ({ title, labels = [] }) => {
  return (
    <section className={styles.section}>
      <h3 className={'text-sm uppercase text-slate-100'}>{title}</h3>
      <div className={'mt-1 flex flex-wrap'}>
        {labels.map((label) => {
          return (
            <Chip
              key={label}
              variant={'filled'}
              size={'small'}
              label={label}
              color={'info'}
              className={'m-1 bg-zinc-400'}
            />
          );
        })}
      </div>
    </section>
  );
};

const SkillCard: FC<SkillCardProps> = ({
  img,
  title = 'Title',
  children,
  className,
  circleClassName,
  shouldReset,
}) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (shouldReset && active) {
      setActive(false);
    }
  }, [active, shouldReset]);
  return (
    <div
      className={classnames(
        styles.card,
        'border-1 rounded-3xl border-zinc-700',
        {
          [styles['card--active']]: active,
        },
        className
      )}
      onClick={() => {
        setActive((pre) => !pre);
      }}
    >
      <div className={classnames(styles.circle, circleClassName)}></div>
      <div className={styles.imgBx}>
        <img src={img} alt={'skill-image'} />
      </div>
      <div className={classnames(styles.contentBx)}>
        <h2 className={'text-center text-2xl text-slate-100'}>{title}</h2>
        <div className={'no-scrollbar h-[200px] overflow-y-scroll'}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
