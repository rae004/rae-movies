import { useEffect, useState } from 'react';

const svgArrowRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
    />
    <title>Arrow Right</title>
  </svg>
);

const svgArrowLeft = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
    />
    <title>Arrow Left</title>
  </svg>
);

const validatePageNumber = (page: string) => {
  const pageInt = Number.parseInt(page);
  if (pageInt < 1) return '1';
  if (pageInt > 500 || page.length > 3) return '500';
  return page;
};

export default function Pagination({
  setPage,
  page = '1',
  totalPages,
}: {
  setPage: (page: string) => void;
  page: string;
  totalPages: number;
}) {
  const [localPageNumber, setLocalPageNumber] = useState('1');
  const lastPage = totalPages < 500 ? totalPages.toString() : '500';

  const setPageFunction = (page: string) => {
    setPage(validatePageNumber(page));
    window?.scrollTo(0, 0);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    page: string,
  ) => {
    if (e.key === 'Enter') {
      setPageFunction(page);
    }
  };

  useEffect(() => {
    setLocalPageNumber(page);
  }, [page]);

  return (
    <div className="join self-center">
      <button
        type={'button'}
        className="join-item btn"
        onClick={() => setPageFunction('1')}
        onKeyDown={(e) => handleKeyDown(e, '1')}>
        1
      </button>
      <button
        type={'button'}
        className="join-item btn"
        onClick={() =>
          setPageFunction(
            page !== '1' ? (Number.parseInt(page) - 1).toString() : '1',
          )
        }
        onKeyDown={(e) =>
          handleKeyDown(
            e,
            page !== '1' ? (Number.parseInt(page) - 1).toString() : '1',
          )
        }>
        {svgArrowLeft}
      </button>
      <input
        type="text"
        placeholder="Type here"
        className="input max-w-[4rem] focus:z-50 ms-0"
        value={localPageNumber}
        onChange={(elm) => {
          setLocalPageNumber(validatePageNumber(elm.target.value));
        }}
        onKeyDown={(e) => {
          const page = validatePageNumber(localPageNumber);
          if (e.key === 'Enter') {
            setPage(page);
            setLocalPageNumber(page);
          }
        }}
      />
      <button
        type={'button'}
        className="join-item btn"
        onClick={() => {
          setPageFunction(`${Number.parseInt(page) + 1}`);
        }}
        onKeyDown={(e) => handleKeyDown(e, `${Number.parseInt(page) + 1}`)}>
        {svgArrowRight}
      </button>
      <button
        type={'button'}
        className="join-item btn"
        onClick={() => setPageFunction(lastPage)}
        onKeyDown={(e) => handleKeyDown(e, lastPage)}>
        {lastPage}
      </button>
    </div>
  );
}
