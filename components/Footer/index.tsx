import React from 'react';
import { StyleProps } from '../../types/styles';
import { IoLogoGithub, IoLogoTwitter, IoMail } from 'react-icons/io5';
import { FaTelegramPlane } from 'react-icons/fa';
import classnames from 'classnames';
import Link from 'next/link';

const Footer: React.FC<StyleProps> = ({ className }) => {
  const links = [
    {
      name: 'twitter',
      url: 'https://twitter.com/brrruski',
      icon: IoLogoTwitter,
    },
    {
      name: 'mail',
      url: 'mailto:size4real@gmail.com',
      icon: IoMail,
    },
    {
      name: 'telegram',
      url: 'https://t.me/brrruski',
      icon: FaTelegramPlane,
    },
    {
      name: 'github',
      url: 'https://github.com/bruceeewong',
      icon: IoLogoGithub,
    },
  ];

  return (
    <footer
      className={classnames(
        'flex flex-col items-center justify-center py-8',
        className
      )}
    >
      <section
        className={classnames(
          'grid w-64 grid-cols-4 items-center items-center justify-items-center gap-4 text-3xl',
          'text-slate-400'
        )}
      >
        {links.map((link) => (
          <Link key={link.name} href={link.url}>
            <a target={'_blank'}>
              <link.icon />
            </a>
          </Link>
        ))}
      </section>

      <section className={'mt-6'}>
        <span className={'text-slate-400'}>Made with ❤️ by Brrruski</span>
      </section>
    </footer>
  );
};

export default Footer;
