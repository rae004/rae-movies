import ThemesList from '@/components/header/common/theme/ThemesList';
import { useEffect, useState } from 'react';

export default function ThemePicker() {
  const [theme, setTheme] = useState('');

  const updateTheme = (theme: string, dataTheme: string) => {
    if (theme !== dataTheme) {
      document.documentElement.setAttribute('data-theme', theme);
      setTheme(theme);
    }
  };

  let dataTheme = null;
  if (typeof window !== 'undefined' && theme.length > 0) {
    localStorage.setItem('theme', theme);
    dataTheme = document.documentElement.getAttribute('data-theme');
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme) {
      if (theme !== dataTheme) {
        document.documentElement.setAttribute('data-theme', theme);
      }

      setTheme(theme);
    }
  }, [dataTheme]);

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn">
        {theme.length === 0
          ? 'Theme'
          : theme.charAt(0).toUpperCase() + theme.slice(1)}
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048">
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
          <title>Theme Picker Chevron</title>
        </svg>
      </div>
      <ThemesList
        setTheme={updateTheme}
        dataTheme={dataTheme || 'default'}
      />
    </div>
  );
}
