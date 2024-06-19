'use client';

import MoviesGrid from '@/components/moviesGrid/MoviesGrid';

const MoviesLoading = ({}) => {
  return (
    <MoviesGrid>
      {[...Array(20)].map((_, key) => (
        <div
          key={key}
          className="card bg-base-100 p-1 pb-4 group hover:bg-accent focus:bg-accent duration-500"
        >
          <div className="card-body px-4 pb-4">
            <div className="skeleton h-4 w-[248px]"></div>
            <div className="skeleton h-4 w-[196px]"></div>
          </div>
          <figure>
            <div className="skeleton h-[400px] w-full"></div>
          </figure>
        </div>
      ))}
    </MoviesGrid>
  );
};

export default MoviesLoading;
