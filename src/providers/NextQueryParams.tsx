'use client';

import { QueryParamProvider } from 'use-query-params';
import NextAdapterApp from 'next-query-params/app';
import { ReactNode } from 'react';

const NextQueryParamsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryParamProvider adapter={NextAdapterApp}>{children}</QueryParamProvider>
  );
};
export default NextQueryParamsProvider;
