import { FC } from 'react';
import { StyleProps } from '../../types/styles';
import classnames from 'classnames';
import Image from 'next/image';
import styles from './index.module.scss';

export type GithubRibbonProps = StyleProps & {
  link: string;
  label?: string;
  color?: string;
  textClassName?: string;
};

const GithubRibbon: FC<GithubRibbonProps> = ({
  color = 'white',
  label = 'GitHub',
  link,
  className,
  textClassName,
}) => {
  return (
    <div
      className={classnames(
        styles.ribbon,
        styles['right'],
        styles[color],
        className
      )}
    >
      <a href={link} className={textClassName}>
        {label}
      </a>
    </div>
  );
};

export default GithubRibbon;
