import React, { useState } from 'react';
import Header from '../Header';
import Menu from '../Menu';
import classnames from 'classnames';
import Footer from '../Footer';
import { StyleProps } from '../../types/styles';

export type LayoutProps = StyleProps & {
  showFooter?: boolean;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { showFooter = true } = props;
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className={'flex min-h-screen w-screen flex-col'}>
      <Header
        className={'fixed top-0 z-40 px-8 py-6'}
        onClickMenu={() => {
          setShowMenu((flag) => !flag);
        }}
      />
      <Menu
        className={classnames('absolute z-30 py-16', {
          hidden: !showMenu,
        })}
      />
      <main
        className={classnames(props.className, 'mt-20 flex flex-1 flex-col')}
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
