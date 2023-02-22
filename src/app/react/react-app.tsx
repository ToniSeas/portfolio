import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { ReactHome } from './components/react-home/react-home';

type AppProps = {};

export const ReactApp: FunctionComponent<AppProps> = (props: AppProps) => {

  return (
    <div>
      <ReactHome/>
    </div>
  );
};
