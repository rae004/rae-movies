'use client';

import { usePathname, useSearchParams } from 'next/navigation';

const svgArrowRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
    />
  </svg>
);

const svgArrowLeft = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
    />
  </svg>
);

/** max pages allowed by API is 500  todo update pagination accordingly */
export default function Pagination({
  setPage,
  page,
}: {
  setPage: (page: number) => void;
  page: number;
}) {
  const pathname = usePathname();

  if (pathname !== '/') return;

  return (
    <div className="join flex-1">
      <button
        type={'button'}
        className="join-item btn"
        onClick={(e) => setPage(1)}
      >
        1
      </button>
      <button
        type={'button'}
        className="join-item btn"
        onClick={(e) => setPage(page !== 1 ? page - 1 : 1)}
      >
        {svgArrowLeft}
      </button>
      <button className="join-item btn btn-disabled">{page}</button>
      <button
        type={'button'}
        className="join-item btn"
        onClick={(e) => setPage(page + 1)}
      >
        {svgArrowRight}
      </button>
      <button
        type={'button'}
        className="join-item btn"
        onClick={(e) => setPage(500)}
      >
        500
      </button>
    </div>
  );
}
