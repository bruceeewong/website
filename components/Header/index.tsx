import { IoMenu } from 'react-icons/io5';
import React from 'react';
import { StyleProps } from '../../types/styles';
import classnames from 'classnames';

const Header: React.FC<StyleProps> = ({ className }) => {
  return (
    <header
      className={classnames(
        className,
        'flex w-full justify-between bg-white bg-opacity-70 align-middle backdrop-blur-sm'
      )}
    >
      <div
        className={
          'flex items-center justify-center rounded-sm bg-sky-500 px-1  font-bold text-white'
        }
      >
        BRUSKI
      </div>
      <div>
        <IoMenu className={'text-3xl'} />
      </div>
    </header>
  );
};

export default Header;
