import { ReactNode } from 'react';

export default function MoviesGrid({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4 p-10">{children}</div>
    </div>
  );
}
