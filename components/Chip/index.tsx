import { FC } from 'react';
import { StyleProps } from '../../types/styles';
import classnames from 'classnames';

const Chip: FC<StyleProps> = ({ children, className }) => {
  return (
    <span
      className={classnames(
        'rounded-full bg-white px-2 py-1 text-xs text-zinc-500',
        className
      )}
    >
      {children}
    </span>
  );
};

export default Chip;
