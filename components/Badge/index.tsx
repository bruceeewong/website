import React from "react";
import {StyleProps} from "../../types/styles";
import classnames from "classnames";
import styles from './index.module.scss';

export type BadgeType = 'primary' | 'default';
export type BadgeSize = 'small' | 'medium';
export type BadgeProps = StyleProps & {
  type?: BadgeType;
  size?: BadgeSize;
  onClick?: () => void;
}

const Badge: React.FC<BadgeProps> = (props) => {
  const {type = 'default', size='medium'} = props;
  return (
    <div className={classnames(props.className, styles.badge, {
      [styles.badgePrimary]: type === 'primary',
      [styles.badgeSmall]: size === 'small',
    })}
         style={props.style}
         onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

export default Badge;