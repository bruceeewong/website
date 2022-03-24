import React from 'react';
import classnames from 'classnames';
import { StyleProps } from '../../types/styles';
import styles from './index.module.scss';

export type ButtonProps = StyleProps & {
  size?: 'normal' | 'small' | 'large';
};

const Button: React.FC<ButtonProps> = (props) => {
  const { size = 'normal' } = props;
  return (
    <button
      className={classnames(
        props.className,
        'flex bg-gray-200 shadow duration-300 hover:opacity-60',
        {
          [styles['button--small']]: size === 'small',
          [styles.button]: size === 'normal',
        }
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
