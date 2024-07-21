'use client';

import NextAdapterApp from 'next-query-params/app';
import type { ReactNode } from 'react';
import { QueryParamProvider } from 'use-query-params';

const NextQueryParamsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryParamProvider adapter={NextAdapterApp}>{children}</QueryParamProvider>
  );
};
export default NextQueryParamsProvider;
