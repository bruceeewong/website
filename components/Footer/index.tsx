import React from 'react';
import { StyleProps } from '../../types/styles';
import {
  IoLogoDiscord,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoWechat,
  IoMail,
} from 'react-icons/io5';
import { FaTelegramPlane } from 'react-icons/fa';
import classnames from 'classnames';

const Footer: React.FC<StyleProps> = ({ className }) => {
  return (
    <footer
      className={classnames(
        'flex flex-col items-center justify-center py-12',
        className
      )}
    >
      <section
        className={
          'grid w-full grid-cols-3 items-center items-center justify-items-center gap-6 text-4xl'
        }
      >
        <IoLogoWechat />
        <IoMail />
        <IoLogoGithub />
        <IoLogoTwitter />
        <FaTelegramPlane />
        <IoLogoDiscord />
      </section>

      <section className={'mt-10'}>
        <span>Made with ❤️ by Brrruski</span>
      </section>
    </footer>
  );
};

export default Footer;
