import { IoMenu } from 'react-icons/io5';
import React from 'react';
import { StyleProps } from '../../types/styles';
import classnames from 'classnames';
import Link from 'next/link';

export type HeaderProps = StyleProps & {
  onClickMenu: () => void;
};

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header
      className={classnames(
        props.className,
        'glassmorphism  flex w-full justify-between bg-white bg-opacity-70 align-middle'
      )}
    >
      <div
        className={
          'text-md flex items-center justify-center rounded-md bg-sky-500  px-2 font-bold text-white'
        }
      >
        <Link href={'/'}>BRUSKI</Link>
      </div>
      <div>
        <IoMenu className={'text-3xl'} onClick={props.onClickMenu} />
      </div>
    </header>
  );
};

export default Header;
