'use client';

import { type ReactNode, useEffect, useState } from 'react';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTheme, setSelectedTheme] = useState('default');

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme) {
      setSelectedTheme(theme);
    }
  }, []);

  return (
    <html
      lang="en"
      className={'flex flex-col items-center overflow-x-hidden'}
      data-theme={selectedTheme}>
      {children}
    </html>
  );
};

export default ThemeProvider;
