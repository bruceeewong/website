import Image from 'next/image';
import styles from './index.module.css';
import classnames from 'classnames';
import Chip from '../../Chip';
import GithubRibbon from '../../GithubRibbon';
// import Badge from '../../Badge';

const Suiet = () => {
  return (
    <section
      className={classnames('relative h-full w-full', styles['bg-suiet'])}
    >
      <GithubRibbon link={'https://suiet.app/'} label={'Website'} />
      {/*<Badge className={'absolute top-4 left-4'}>PROJECT</Badge>*/}
      <div
        className={classnames(
          'flex h-full w-full flex-col items-center justify-center',
          'tablet:mx-auto tablet:max-w-screen-tablet',
          styles['bg-suiet']
        )}
      >
        <div
          className={classnames(
            'ml-auto mr-12 text-right text-white',
            'tablet:mx-auto tablet:text-center'
          )}
        >
          <p className={classnames('text-3xl font-bold', 'tablet:text-5xl')}>
            A Crypto Wallet
          </p>
          <p
            className={classnames(
              'text-3xl font-bold',
              'tablet:my-4 tablet:text-5xl'
            )}
          >
            For Everyone
          </p>
          <small className={classnames('text-xl', 'tablet:text-3xl')}>
            on Sui blockchain
          </small>
        </div>
        <div
          className={classnames(
            'relative mt-12 h-[150px] w-[150px]',
            'tablet:h-[200px] tablet:w-[200px]'
          )}
        >
          <Image src={'/img/suiet-bare-logo.svg'} fill alt={'suiet-logo'} />
        </div>
        <div
          className={classnames(
            'mr-auto ml-12 mt-24 text-left text-white',
            'tablet:mx-auto tablet:text-center'
          )}
        >
          <h1 className={classnames('text-5xl font-bold', 'tablet:text-7xl')}>
            SUIET
          </h1>
          <div
            className={classnames(
              'mt-4 mr-12 flex  flex-wrap items-center gap-2',
              'tablet:justify-center'
            )}
          >
            <Chip>React.js</Chip>
            <Chip>Chrome Extension</Chip>
            <Chip>Open Source</Chip>
            <Chip>200,000+ users</Chip>
            <Chip>90+ stars</Chip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suiet;
