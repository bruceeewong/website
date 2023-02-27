import styles from './index.module.scss';
import { FC } from 'react';
import { Chip } from '@mui/material';
import classnames from 'classnames';

export interface SkillCardProps {
  img: string;
  title: string;
}

export interface SkillSectionProps {
  title: string;
  labels: string[];
}

export const SkillSection: FC<SkillSectionProps> = ({ title, labels = [] }) => {
  return (
    <section className={styles.section}>
      <h3 className={'text-sm uppercase text-white'}>{title}</h3>
      <div className={'mt-1 flex flex-wrap'}>
        {labels.map((label) => {
          return (
            <Chip
              key={label}
              variant={'filled'}
              size={'small'}
              label={label}
              color={'info'}
              className={'m-1 bg-neutral-400'}
            />
          );
        })}
      </div>
    </section>
  );
};

const SkillCard: FC<SkillCardProps> = ({ img, title = 'Title', children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgBx}>
          <img src={img} />
        </div>
        <div className={classnames(styles.contentBx)}>
          <h2 className={'text-center text-2xl'}>{title}</h2>
          <div className={'hide-scrollbar h-[200px] overflow-y-scroll'}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
