import { IoMenu, IoClose } from 'react-icons/io5';
import React, { useEffect, useState } from 'react';
import { StyleProps } from '../../types/styles';
import classnames from 'classnames';
import Link from 'next/link';
import Menu from '../Menu';
import { useBreakpoint } from '../../ utils/breakpoint';
import Badge from '../Badge';
import { useTranslation } from 'react-i18next';

export type HeaderProps = StyleProps;

const Header: React.FC<HeaderProps> = (props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { isBreakpoint } = useBreakpoint();
  const { i18n } = useTranslation();

  return (
    <header
      className={classnames(
        props.className,
        'flex w-full justify-between bg-white align-middle'
      )}
    >
      <Badge
        type={'primary'}
        className={classnames('font-bold tablet:text-2xl')}
      >
        <Link href={'/'}>BRUSKI</Link>
      </Badge>

      <div className={'flex items-center'}>
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
          className={classnames(
            'absolute top-16 left-0 z-30',
            'tablet:top-20',
            {
              hidden: isBreakpoint(['desktop']) ? false : !showMenu,
            }
          )}
        />
        {/*<I18nSwitch*/}
        {/*  className={'ml-2'}*/}
        {/*  onClick={() => {*/}
        {/*    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');*/}
        {/*  }}*/}
        {/*/>*/}
      </div>
    </header>
  );
};

export default Header;
