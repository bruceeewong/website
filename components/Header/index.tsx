import { IoMenu, IoClose } from 'react-icons/io5';
import React, { useState } from 'react';
import { StyleProps } from '../../types/styles';
import classnames from 'classnames';
import Link from 'next/link';
import Menu from '../Menu';
import { useBreakpoint } from '../../ utils/breakpoint';

export type HeaderProps = StyleProps;

const Header: React.FC<HeaderProps> = (props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { isBreakpoint } = useBreakpoint();

  return (
    <header
      className={classnames(
        props.className,
        'glassmorphism relative flex w-full justify-between bg-white bg-opacity-70 align-middle'
      )}
    >
      <div
        className={classnames(
          'text-md flex items-center justify-center rounded-md bg-sky-500  px-2 font-bold text-white',
          'tablet:text-2xl'
        )}
      >
        <Link href={'/'}>BRUSKI</Link>
      </div>
      {isBreakpoint(['mobile', 'tablet']) ? (
        <div className={classnames('text-3xl', 'tablet:text-4xl')}>
          {showMenu ? (
            <IoClose
              onClick={() => {
                setShowMenu(false);
              }}
            />
          ) : (
            <IoMenu
              onClick={() => {
                setShowMenu(true);
              }}
            />
          )}
        </div>
      ) : null}

      <Menu
        className={classnames('absolute top-16 left-0 z-30', 'tablet:top-20', {
          hidden: isBreakpoint(['desktop']) ? false : !showMenu,
        })}
      />
    </header>
  );
};

export default Header;
