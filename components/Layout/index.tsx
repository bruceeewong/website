import React, { useState } from 'react';
import Header from '../Header';
import Menu from '../Menu';
import classnames from 'classnames';
import Footer from '../Footer';

const Layout: React.FC = (props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className={'flex min-h-screen w-screen flex-col'}>
      <Header
        className={'fixed top-0 z-20 px-8 py-6'}
        onClickMenu={() => {
          setShowMenu((flag) => !flag);
        }}
      />
      <Menu
        className={classnames('absolute z-10 py-16', {
          hidden: !showMenu,
        })}
      />
      {props.children}
      <Footer className={classnames('w-full bg-slate-100 px-8')} />
    </div>
  );
};

export default Layout;
