import { StyleProps } from '../../types/styles';
import classnames from 'classnames';
import { FC } from 'react';

export const Container: FC<StyleProps> = (props) => {
  return (
    <div
      className={classnames(
        'relative mx-auto w-full',
        // 'h-[100vh] snap-y snap-mandatory overflow-y-auto',
        props.className
      )}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
