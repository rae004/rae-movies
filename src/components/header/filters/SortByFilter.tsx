import { useSearchParams } from 'next/navigation';
import ReloadIcon from '@/components/icons/ReloadIcon';
import { SortOrderState } from '@/lib/types';

export default function SortByFilter({
  resetSortOrderFilter,
  sort,
  setSort,
}: {
  resetSortOrderFilter: () => void;
  sort: SortOrderState;
  setSort: (sort: SortOrderState) => void;
}) {
  if (useSearchParams().has('searchString')) {
    return null;
  }

  const sortByOptions = ['Popularity', 'Revenue', 'Vote Count', 'Release Date'];
  const sortOrderOptions = ['Asc', 'Desc'];

  return (
    <div className={'flex items-center'}>
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1 min-w-[127.4px]">
          {sort.by.length > 0 ? sort.by : 'Sort By'}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          {sortByOptions.map((by) => (
            <li key={by}>
              <a onClick={() => setSort({ ...sort, by })}>{by}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1 min-w-[68.22px]">
          {sort.order.length > 0 ? sort.order : 'Order'}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          {sortOrderOptions.map((order) => (
            <li key={order}>
              <a onClick={() => setSort({ ...sort, order })}>{order}</a>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => resetSortOrderFilter()} className="btn m-1">
        <ReloadIcon />
      </button>
    </div>
  );
}
