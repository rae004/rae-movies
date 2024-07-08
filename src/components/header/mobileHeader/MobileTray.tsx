import { ReactNode } from 'react';

export default function MobileTray({
  children,
  trayElementId,
}: {
  children: ReactNode;
  trayElementId: string;
}) {
  return (
    <>
      <input
        id={`${trayElementId}`}
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        <label
          htmlFor={`${trayElementId}`}
          className="drawer-button btn btn-sm min-[196px]:btn-md btn-primary mx-1"
        >
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </label>
      </div>
      <div className="drawer-side">{children}</div>
    </>
  );
}
