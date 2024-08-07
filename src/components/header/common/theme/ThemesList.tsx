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
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
            value={theme}
            onClick={() => setTheme(theme, dataTheme)}
          />
        </li>
      ))}
    </ul>
  );
}
