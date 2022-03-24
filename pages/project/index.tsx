import Layout from '../../components/Layout';
import React, { useState } from 'react';
import classnames from 'classnames';
import Head from 'next/head';
import { WEBSITE_TITLE } from '../../constants';

const ProjectPage: React.FC = () => {
  const [activeProjKey, setActiveProjKey] = useState('marx');
  const [projects] = useState([
    {
      key: 'marx',
    },
    {
      key: 'roam_in_hust',
    },
    {
      key: 'aaa',
    },
  ]);
  function projectName(key: string) {
    const map: Record<string, string> = {
      marx: 'Marx',
      roam_in_hust: '漫游华科',
    };
    return map[key] || '';
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
          <h3 className={'my-3 text-xl font-bold'}>Marx|火星移民计划</h3>
          <p className={''}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquid
            voluptate, similique possimus consectetur, iusto blanditiis, omnis
            quasi nulla quia est accusamus in sit!
          </p>
        </article>

        <nav className={'fixed bottom-0 z-10  bg-slate-100'}>
          <div className={'scroll-view-x flex w-screen py-4 pl-4'}>
            {projects.map((proj, index) => (
              <div
                key={proj.key}
                className={classnames(
                  'mr-4 flex-shrink-0 ',
                  'w-28 rounded-lg bg-white px-4 py-2 shadow',
                  {
                    '!bg-sky-500 text-white': activeProjKey === proj.key,
                  }
                )}
                onClick={() => {
                  setActiveProjKey(proj.key);
                }}
              >
                <p className={'text-sm'}>0x{index + 1}</p>
                <p className={'text-overflow-ellipsis'}>
                  {projectName(proj.key)}
                </p>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </Layout>
  );
};

export default ProjectPage;
