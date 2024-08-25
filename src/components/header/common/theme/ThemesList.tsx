const themes = [
  'default',
  'retro',
  'black',
  'dracula',
  'acid',
  'cyberpunk',
  'valentine',
  'aqua',
  'lemonade',
  'coffee',
  'winter',
  'sunset',
];

export default function ThemesList({
  setTheme,
  dataTheme = 'default',
}: {
  setTheme: (theme: string, dataTheme: string) => void;
  dataTheme: string;
}) {
  return (
    <ul className="dropdown-content z-[1] right-0 p-2 shadow-2xl bg-base-300 rounded-box w-fit">
      {themes.map((theme) => (
        <li key={theme}>
          <div
            tabIndex={0}
            role="button"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
            onClick={() => setTheme(theme, dataTheme)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setTheme(theme, dataTheme);
              }
            }}>
            {theme}
          </div>
        </li>
      ))}
    </ul>
  );
}
