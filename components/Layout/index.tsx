import React, { useState } from 'react';
import Header from '../Header';
import classnames from 'classnames';
import Footer from '../Footer';
import { StyleProps } from '../../types/styles';

export type LayoutProps = StyleProps & {
  showFooter?: boolean;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { showFooter = true } = props;
  return (
    <div className={'flex min-h-screen flex-col'}>
      <Header
        className={classnames(
          'fixed top-0 z-40 px-8 py-6',
          'tablet:px-16 tablet:py-6'
        )}
      />
      <main
        className={classnames(
          props.className,
          'mt-20 flex flex-1 flex-col',
          'tablet:mt-24'
        )}
        style={props.style}
      >
        {props.children}
      </main>
      {showFooter && (
        <Footer className={classnames('w-full bg-blue-50 px-8')} />
      )}
    </div>
  );
};

export default Layout;
