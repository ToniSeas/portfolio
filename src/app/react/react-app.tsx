import * as React from 'react';
import { FunctionComponent } from 'react';
import { RouterProvider } from 'react-router-dom';
import LanguageProvider from './contexts/language-context/language-context';
import { Router } from './react-routing';

type AppProps = {};

export const ReactApp: FunctionComponent<AppProps> = (props: AppProps) => {

  return (
    <div>
      <LanguageProvider>
        <RouterProvider router={Router} />
      </LanguageProvider >
    </div>
  );
};
