import React, { PropsWithChildren } from 'react';

const Heading = {
  H1: (props: PropsWithChildren<any>) => <h1 className={'_h1'} {...props} />,
  H2: (props: PropsWithChildren<any>) => <h2 className={'_h2'} {...props} />,
};
const Text = (props: PropsWithChildren<any>) => (
  <p className={'_p'} {...props} />
);
const Pre = (props: PropsWithChildren<any>) => (
  <pre className={'_pre'} {...props} />
);
const InlineCode = (props: PropsWithChildren<any>) => (
  <code className={'_code'} {...props} />
);
const Image = (props: PropsWithChildren<any>) => (
  <img className={'_img'} {...props} />
);

export const components = {
  img: Image,
  h1: Heading.H1,
  h2: Heading.H2,
  p: Text,
  pre: Pre,
  code: InlineCode,
};
