import Layout from '../components/Layout';
import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';
import { MDXProvider } from '@mdx-js/react';
import { StyleProps } from '../types/styles';
import { useRouter } from 'next/router';
import { isNonEmptyArray } from '../ utils/checker';
import { projectIndex } from '../constants/project-index';
import Image from 'next/image';
import styles from './project.module.scss';
import { Stack, Chip } from '@mui/material';
import { Home as IconHome, GitHub as IconGithub } from '@mui/icons-material';
export type ProjectPageProps = {
  meta: Record<string, any>;
};

type NavBarProps = StyleProps & {
  items: { name: string; label: string }[];
  activeItemName: string;
  onSelect: (name: string) => void;
};

const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <nav
      className={classnames(
        props.className,
        'scroll-view-x w-screen bg-slate-100'
      )}
      style={props.style}
    >
      <div
        className={classnames(
          'flex py-4 pl-8',
          'tablet:pl-16',
          'desktop:mx-auto desktop:w-[56rem]'
        )}
      >
        {props.items.map((item, index) => (
          <div
            key={item.name}
            className={classnames(
              'mr-4 min-w-[28px] flex-shrink-0 cursor-pointer gap-4 rounded-lg bg-white px-4 py-2 shadow',
              {
                '!bg-sky-500 text-white': props.activeItemName === item.name,
              }
            )}
            onClick={() => {
              props.onSelect && props.onSelect(item.name);
            }}
          >
            <p className={'text-sm'}>0x{index + 1}</p>
            <p className={'text-overflow-ellipsis'}>{item.label}</p>
          </div>
        ))}
      </div>
    </nav>
  );
};

function projectName(key: string) {
  const map: Record<string, string> = {
    suiet_wallet: 'Suiet Wallet',
    marx: 'Marx',
    roam_in_hust: '漫游华科',
  };
  return map[key] || '';
}

const ProjectPage: React.FC<ProjectPageProps> = (props) => {
  const router = useRouter();
  const [activeProj, setActiveProj] = useState<string>('');
  const meta = useMemo(() => props.meta, [props.meta]);

  useEffect(() => {
    const pathList = router.route.split('/');
    // handle `pathList` like ['', 'project', 'marx']
    if (isNonEmptyArray(pathList) && pathList.length >= 3) {
      setActiveProj(pathList[2]);
    }
  }, [router.route]);

  const projectInfoList = useMemo(
    () =>
      projectIndex.map((item) => ({
        name: item.name,
        label: projectName(item.name),
      })),
    []
  );

  async function handleRouteTo(projName: string) {
    await router.push(`/project/${projName}`);
  }

  function coverImage() {
    if (!meta.cover_image) return null;
    return (
      <section className={styles['cover-image']}>
        <Image
          src={meta.cover_image}
          layout={'fill'}
          alt={'cover image'}
          className={'object-cover'}
        ></Image>
      </section>
    );
  }

  function linkIcon(name: string) {
    const supported: Record<string, ReactElement> = {
      home: <IconHome />,
      github: <IconGithub />,
    };
    return supported[name];
  }

  function links() {
    if (!meta.links) return null;
    const keys = Object.keys(meta.links);
    return (
      <Stack direction="row" spacing={1} className={'my-1.5'}>
        {keys.map((key) => (
          <Chip
            key={key}
            label={key}
            icon={linkIcon(key)}
            component="a"
            href={meta.links[key]}
            target={'__blank'}
            variant="outlined"
            clickable={true}
            size={'small'}
          ></Chip>
        ))}
      </Stack>
    );
  }

  function description() {
    if (!meta.desc) return null;
    return <p className={'text-slate-500'}>{meta.desc}</p>;
  }

  return (
    <Layout title={activeProj} showFooter={false}>
      <div
        className={classnames(
          'flex flex-col justify-between px-8',
          'tablet:px-16',
          'desktop:mx-auto desktop:w-[56rem]'
        )}
      >
        <article className={classnames('mb-20 flex-1', 'tablet:mb-40')}>
          {coverImage()}
          <section className={'mt-4 mb-6'}>
            <div
              className={classnames(
                '',
                'tablet:flex tablet:items-center tablet:justify-between'
              )}
            >
              <h3
                className={classnames(
                  'text-overflow-ellipsis-2 text-xl',
                  'tablet:text-2xl'
                )}
              >
                {meta.title}
              </h3>{' '}
              <small
                className={classnames(
                  'text-sm text-slate-500',
                  'tablet:text-lg'
                )}
              >
                {meta.datetime}
              </small>
            </div>
            {links()}
            {description()}
          </section>
          <div className={classnames('markdown-body', 'mt-4')}>
            <MDXProvider>{props.children}</MDXProvider>
          </div>
        </article>
      </div>

      <NavBar
        className={classnames('', 'tablet:fixed tablet:bottom-0 tablet:z-10')}
        items={projectInfoList}
        activeItemName={activeProj}
        onSelect={(name) => handleRouteTo(name)}
      />
    </Layout>
  );
};

export default ProjectPage;
