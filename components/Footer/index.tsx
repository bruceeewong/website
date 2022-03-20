import React, { useState } from 'react';
import { StyleProps } from '../../types/styles';
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoWechat,
  IoMail,
} from 'react-icons/io5';
import { FaTelegramPlane } from 'react-icons/fa';
import classnames from 'classnames';
import Link from 'next/link';

const Footer: React.FC<StyleProps> = ({ className }) => {
  const [socialLinks] = useState<Record<string, string>>({
    github: 'https://github.com/bruceeewong',
    mail: 'mailto://size4real@gmail.com',
    twitter: 'https://twitter.com/brrruski',
    telegram: 'https://t.me/brrruski',
  });
  return (
    <footer
      className={classnames(
        'flex flex-col items-center justify-center py-12',
        className
      )}
    >
      <section
        className={classnames(
          'grid w-full grid-cols-4 items-center items-center justify-items-center gap-6 text-4xl',
          'text-slate-500'
        )}
      >
        <Link href={socialLinks.twitter}>
          <IoLogoTwitter />
        </Link>
        <Link href={socialLinks.telegram}>
          <FaTelegramPlane />
        </Link>

        <Link href={socialLinks.mail}>
          <IoMail />
        </Link>

        <Link href={socialLinks.github}>
          <IoLogoGithub />
        </Link>
      </section>

      <section className={'mt-10'}>
        <span className={'text-slate-500'}>Made with ❤️ by Brrruski</span>
      </section>
    </footer>
  );
};

export default Footer;
