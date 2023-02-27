import React from 'react';
import styles from './index.module.scss';

export const Interests = () => {
  return (
    <div className={'flex h-full w-full flex-col items-center px-8 pb-24'}>
      <p className={'mt-12 text-xl'}>These are my</p>
      <h1 className={'text-3xl'}>INTERESTS</h1>

      <ul className={styles['words']}>
        <li className={styles['words-line']}>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>CSS Only</p>
        </li>
        <li className={styles['words-line']}>
          <p className={styles.p}>CSS Only</p>
          <p className={styles.p}>Perspective</p>
        </li>
        <li className={styles['words-line']}>
          <p className={styles.p}>Perspective</p>
          <p className={styles.p}>Text Effect</p>
        </li>
        <li className={styles['words-line']}>
          <p className={styles.p}>Text Effect</p>
          <p className={styles.p}>by</p>
        </li>
        <li className={styles['words-line']}>
          <p className={styles.p}>by</p>
          <p className={styles.p}>James</p>
        </li>
        <li className={styles['words-line']}>
          <p className={styles.p}>James</p>
          <p className={styles.p}>Bosworth</p>
        </li>
        <li className={styles['words-line']}>
          <p className={styles.p}>Bosworth</p>
          <p className={styles.p}>&nbsp;</p>
        </li>
      </ul>
    </div>
  );
};

export default Interests;
