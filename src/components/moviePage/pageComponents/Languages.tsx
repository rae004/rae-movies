type Language = {
  iso_639_1: string;
  name: string;
  english_name: string;
};

export default function Languages({
  spoken_languages,
}: {
  spoken_languages: Language[];
}) {
  return (
    <div className="collapse collapse-open border border-base-300 bg-base-200">
      <div className="collapse-title text-xl font-medium">
        {spoken_languages.length > 1 ? 'Languages' : 'Language'}
      </div>
      <div className="collapse-content">
        {spoken_languages && (
          <ul className={'flex flex-row gap-4'}>
            {spoken_languages.map((language: Language) => (
              <li key={language.english_name}>{language.english_name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
