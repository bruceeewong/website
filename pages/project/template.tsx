import Layout from '../../components/Layout';
import React, { useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';
import Head from 'next/head';
import { WEBSITE_TITLE } from '../../constants';
import { MDXProvider } from '@mdx-js/react';
import { components } from '../../components/MdxComponents';
import { StyleProps } from '../../types/styles';
import { useRouter } from 'next/router';
import { isNonEmptyArray } from '../../ utils/checker';
import { projects } from '../../constants/projects';

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
        'fixed bottom-0 z-10 bg-slate-100'
      )}
    >
      <div className={'scroll-view-x flex w-screen py-4 pl-4'}>
        {props.items.map((item, index) => (
          <div
            key={item.name}
            className={classnames(
              'mr-4 w-28 flex-shrink-0 gap-4 rounded-lg bg-white px-4 py-2 shadow',
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
    marx: 'Marx',
    roam_in_hust: '漫游华科',
  };
  return map[key] || '';
}

const ProjectPage: React.FC<ProjectPageProps> = (props) => {
  const router = useRouter();
  useEffect(() => {
    const pathList = router.route.split('/');
    // handle `pathList` like ['', 'project', 'marx']
    if (isNonEmptyArray(pathList) && pathList.length >= 3) {
      setActiveProj(pathList[2]);
    }
  }, [router.route]);

  const [activeProj, setActiveProj] = useState<string>('');
  const projectInfoList = useMemo(
    () =>
      projects.map((item) => ({
        name: item.name,
        label: projectName(item.name),
      })),
    []
  );

  async function handleRouteTo(projName: string) {
    await router.push(`/project/${projName}`);
  }

  return (
    <Layout showFooter={false}>
      <Head>
        <title>Roadmap | {WEBSITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={'flex flex-1 flex-col justify-between'}>
        <article className={'page-edge mb-40 flex-1'}>
          <h1 className={'text-3xl font-bold'}>项目</h1>
          <h3 className={'text-overflow-ellipsis mt-2 text-xl font-bold'}>
            {props.meta.title}
          </h3>
          <small className={'text-sm'}>{props.meta.datetime}</small>
          <hr className={'my-2'} />
          <div className={'mt-4'}>
            <MDXProvider components={components}>{props.children}</MDXProvider>
          </div>
        </article>
      </div>

      <NavBar
        items={projectInfoList}
        activeItemName={activeProj}
        onSelect={(name) => handleRouteTo(name)}
      />
    </Layout>
  );
};

export default ProjectPage;
