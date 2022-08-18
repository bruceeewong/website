import React, { CSSProperties } from 'react';
import { IoLanguageSharp } from 'react-icons/io5';
import classnames from 'classnames';
import styles from './index.module.scss';

const I18nSwitch: React.FC<{
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}> = (props) => {
  return (
    <div
      {...props}
      className={classnames(styles['i18n-switch'], props.className)}
    >
      <IoLanguageSharp />
    </div>
  );
};

export default I18nSwitch;
