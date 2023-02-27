import React, { useRef } from 'react';
import FloatingBubbles from '../../FloatingBubbles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Bubble from '../../Bubble';

export const Contacts = () => {
  const year = useRef(new Date().getFullYear());
  return (
    <FloatingBubbles
      className={'flex h-full w-full flex-col items-center px-8 pb-12'}
    >
      <div className={'mt-12 text-center'}>
        <p className={'text-xl'}>Feel free to</p>
        <h1 className={'text-4xl font-bold'}>CONTACT ME</h1>
      </div>
      <div className={'mt-24 grid grid-cols-2 gap-6'}>
        <Bubble
          icon={<LinkedInIcon className={'text-6xl'} />}
          color={'sky'}
          url={'https://www.linkedin.com/in/sizhewang97/'}
        />
        <Bubble
          icon={<EmailIcon className={'text-6xl'} />}
          color={'teal'}
          url={'mailto:sizhe4real@gmail.com'}
        />
        <Bubble
          icon={<GitHubIcon className={'text-6xl'} />}
          color={'gray'}
          url={'https://github.com/bruceeewong'}
        />
        <Bubble
          icon={<TwitterIcon className={'text-6xl'} />}
          color={'blue'}
          url={'https://twitter.com/brrruski'}
        />
      </div>
      <footer className={'mt-auto'}>
        <div
          className={
            'glassmorphism rounded-full bg-slate-200 bg-opacity-70 px-4 py-2 text-sm text-slate-800'
          }
        >
          Made with ❤️ by Bruski️ &#169; {year.current}
        </div>
      </footer>
    </FloatingBubbles>
  );
};

export default Contacts;
