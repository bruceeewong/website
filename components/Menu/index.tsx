import Link from 'next/link';
import { StyleProps } from '../../types/styles';
import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { projects } from '../../constants/projects';
import { isNonEmptyArray } from '../../ utils/checker';
import { useBreakpoint } from '../../ utils/breakpoint';
import { useRouter } from 'next/router';

const Menu: React.FC<StyleProps> = ({ className }) => {
  const { isBreakpoint } = useBreakpoint();
  const [activeItem, setActiveItem] = useState('/');
  const { pathname } = useRouter();
  const [links] = useState([
    { key: 'home', path: '/' },
    { key: 'blog', path: 'https://www.bruski.wang/' },
    {
      key: 'project',
      path: isNonEmptyArray(projects) ? `/project/${projects[0].name}` : '/',
    },
    { key: 'roadmap', path: '/roadmap' },
    // { key: 'nft_gallery', path: '/nft_gallery' },
  ]);
  function menuName(key: string): string {
    const map: Record<string, string> = {
      home: '首页',
      blog: '博客',
      project: '项目',
      roadmap: '人生路线',
      // nft_gallery: 'NFT藏品',
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
          <li key={link.key} className={classnames('px-8', 'desktop:px-4')}>
            <Link href={link.path}>
              <a
                className={classnames(
                  'link block border-b-2 py-3 text-lg',
                  'desktop:hover: desktop:border-0 desktop:py-0 desktop:hover:outline-1',
                  {
                    'link--active': activeItem === link.key,
                  }
                )}
              >
                {menuName(link.key)}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .link {
          position: relative;
          transition: color 0.3s;
        }
        .link:hover {
          color: #0ea5e9;
        }
        .link--active {
          color: #0ea5e9;
        }
        .link:hover:after,
        .link--active:after {
          content: '';
          opacity: 1;
          display: block;
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: #0ea5e9;
        }
      `}</style>
    </nav>
  );

  if (isBreakpoint(['desktop'])) {
    return Nav;
  }
  return (
    <div
      className={classnames(
        className,
        'glassmorphism h-screen w-screen overflow-scroll  bg-white bg-opacity-90'
      )}
    >
      {Nav}
    </div>
  );
};

export default Menu;
