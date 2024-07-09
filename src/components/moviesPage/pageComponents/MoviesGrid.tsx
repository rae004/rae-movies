import { ReactNode } from 'react';

export default function MoviesGrid({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-0 pb-10 md:grid-cols-4 md:gap-4 md:p-10">
        {children}
      </div>
    </div>
  );
}
