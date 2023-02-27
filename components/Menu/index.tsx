import Link from 'next/link';
import { StyleProps } from '../../types/styles';
import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { projectIndex } from '../../constants/project-index';
import { isNonEmptyArray } from '../../ utils/checker';
import { useBreakpoint } from '../../ utils/breakpoint';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

const Menu: React.FC<StyleProps> = ({ className }) => {
  const { isBreakpoint } = useBreakpoint();
  const [activeItem, setActiveItem] = useState('/');
  const { pathname } = useRouter();
  const { t } = useTranslation('menu');

  const [links] = useState([
    { key: 'home', path: '/' },
    { key: 'blog', path: 'https://blog.bruski.wang/' },
    // {
    //   key: 'project',
    //   path: isNonEmptyArray(projectIndex)
    //     ? `/project/${projectIndex[0].name}`
    //     : '/',
    // },
    // { key: 'roadmap', path: '/roadmap' },
  ]);
  function menuName(key: string): string {
    const map: Record<string, string> = {
      home: t('home'),
      blog: t('blog'),
      project: t('project'),
      roadmap: t('roadmap'),
    };
    return map[key] || '';
  }

  useEffect(() => {
    if (pathname === '/') {
      setActiveItem('home');
      return;
    }

    // get the prefix to highlight the menu item
    const pathList = pathname.split('/');
    if (isNonEmptyArray(pathList) && pathList.length >= 2) {
      setActiveItem(pathList[1]);
      return;
    }
  }, [pathname]);

  const Nav = (
    <nav>
      <ul className={classnames('desktop:flex')}>
        {links.map((link) => (
          <li
            key={link.key}
            className={classnames('px-8', 'tablet:px-16', 'desktop:px-4')}
          >
            <Link
              href={link.path}
              className={classnames(
                styles['link'],
                'block border-b-2 py-3 text-lg',
                'tablet:py-6 tablet:text-2xl',
                'desktop:hover: desktop:border-0 desktop:py-0',
                {
                  [styles['link--active']]: activeItem === link.key,
                }
              )}
            >
              {menuName(link.key)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  if (isBreakpoint(['desktop'])) {
    return Nav;
  }
  return (
    <div
      className={classnames(
        className,
        ' h-screen w-screen overflow-scroll bg-white'
      )}
    >
      {Nav}
    </div>
  );
};

export default Menu;
