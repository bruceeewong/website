import Link from 'next/link';
import { StyleProps } from '../../types/styles';
import React, { useState } from 'react';
import classnames from 'classnames';
import { projects } from '../../constants/projects';
import { isNonEmptyArray } from '../../ utils/checker';

const Menu: React.FC<StyleProps> = ({ className }) => {
  const [links] = useState([
    { key: 'home', path: '/' },
    { key: 'blog', path: 'https://www.bruski.wang/' },
    {
      key: 'project',
      path: isNonEmptyArray(projects) ? `/project/${projects[0].name}` : '/',
    },
    { key: 'roadmap', path: '/roadmap' },
    { key: 'nft_gallery', path: '/nft_gallery' },
  ]);
  function menuName(key: string): string {
    const map: Record<string, string> = {
      home: '首页',
      blog: '博客',
      project: '项目',
      roadmap: '人生路线',
      nft_gallery: 'NFT藏品',
    };
    return map[key] || '';
  }
  return (
    <div
      className={classnames(
        className,
        'glassmorphism h-screen w-screen overflow-scroll  bg-white bg-opacity-90'
      )}
    >
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.key} className={classnames('px-8')}>
              <Link href={link.path}>
                <div className={'border-b-2 py-3 text-lg font-bold'}>
                  {menuName(link.key)}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
