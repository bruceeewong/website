import React, { PropsWithChildren } from 'react';

// custom markdown component
// use with ./markdown-style.css
// see details: https://nextjs.org/docs/advanced-features/using-mdx#custom-elements

const h1 = (props: PropsWithChildren<any>) => (
  <h1 className={'_h1'} {...props} />
);
const h2 = (props: PropsWithChildren<any>) => (
  <h2 className={'_h2'} {...props} />
);
const h3 = (props: PropsWithChildren<any>) => (
  <h2 className={'_h3'} {...props} />
);
const h4 = (props: PropsWithChildren<any>) => (
  <h2 className={'_h4'} {...props} />
);
const h5 = (props: PropsWithChildren<any>) => (
  <h2 className={'_h5'} {...props} />
);
const h6 = (props: PropsWithChildren<any>) => (
  <h2 className={'_h6'} {...props} />
);
const p = (props: PropsWithChildren<any>) => <p className={'_p'} {...props} />;
const pre = (props: PropsWithChildren<any>) => (
  <pre className={'_pre'} {...props} />
);
const code = (props: PropsWithChildren<any>) => (
  <code className={'_code'} {...props} />
);
const img = (props: PropsWithChildren<any>) => (
  <img className={'_img'} {...props} />
);
const table = (props: PropsWithChildren<any>) => (
  <table className={'_table'} {...props} />
);
const th = (props: PropsWithChildren<any>) => (
  <th className={'_th'} {...props} />
);
const td = (props: PropsWithChildren<any>) => (
  <td className={'_td'} {...props} />
);
const tr = (props: PropsWithChildren<any>) => (
  <tr className={'_tr'} {...props} />
);
const hr = (props: PropsWithChildren<any>) => (
  <hr className={'_hr'} {...props} />
);
const blockquote = (props: PropsWithChildren<any>) => (
  <blockquote className={'_blockquote'} {...props} />
);
const ul = (props: PropsWithChildren<any>) => (
  <ul className={'_ul'} {...props} />
);
const ol = (props: PropsWithChildren<any>) => (
  <ol className={'_ol'} {...props} />
);
const dl = (props: PropsWithChildren<any>) => (
  <dl className={'_dl'} {...props} />
);
const li = (props: PropsWithChildren<any>) => (
  <li className={'_li'} {...props} />
);
const a = (props: PropsWithChildren<any>) => <a className={'_a'} {...props} />;

export const components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  img,
  pre,
  code,
  table,
  th,
  td,
  tr,
  hr,
  blockquote,
  ul,
  ol,
  dl,
  li,
  a,
};
