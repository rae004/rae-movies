export default function SearchField({
  searchString,
  nextRouter,
  setSearchString,
  searchParams,
}: {
  searchString: string;
  setSearchString: (str: string) => void;
  nextRouter: any;
  searchParams: URLSearchParams;
}) {
  const includeAdult = searchParams.get('isNsfw');
  const includeVideo = searchParams.get('includeVideo');
  const pageNumber = searchParams.get('page');
  const pushParams = new URLSearchParams();
  if (pageNumber) {
    pushParams.append('page', pageNumber);
  }
  if (includeAdult) {
    pushParams.append('isNsfw', includeAdult);
  }
  if (includeVideo) {
    pushParams.append('includeVideo', includeVideo);
  }

  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search Movie"
        className="input input-bordered w-full md:w-auto text-accent-contentsf placeholder-accent"
        value={searchString}
        onChange={(e) => setSearchString(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const search = e.currentTarget.value;
            if (search) {
              nextRouter.push(`/?${pushParams}&query=${search}`);
            } else {
              nextRouter.push(`/?${pushParams}`);
            }
          }
        }}
      />
    </div>
  );
}
