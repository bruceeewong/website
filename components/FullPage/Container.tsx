import { StyleProps } from '../../types/styles';
import classnames from 'classnames';
import { FC } from 'react';

export const Container: FC<StyleProps> = (props) => {
  return (
    <div
      className={classnames(
        'relative mx-auto h-[100vh] w-full snap-y snap-mandatory overflow-y-auto',
        props.className
      )}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
