export default function MobileTrayClose({
  trayElementId,
}: {
  trayElementId: string;
}) {
  const closeDrawer = () => {
    const drawer = document.getElementById(trayElementId) as HTMLInputElement;
    if (drawer) {
      drawer.checked = false;
    }
  };

  return (
    <button
      type={'button'}
      className={'btn btn-primary'}
      onClick={() => closeDrawer()}
      onKeyDown={(e) => e.key === 'enter' && closeDrawer()}>
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
          d="M6 18 18 6M6 6l12 12"
        />
        <title>Close Mobile Menu</title>
      </svg>
    </button>
  );
}
