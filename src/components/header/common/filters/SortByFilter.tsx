import ReloadIcon from '@/components/common/ReloadIcon';
import type { SortOrderState } from '@/lib/types';
import { useSearchParams } from 'next/navigation';

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
    <div className={'flex items-center self-center'}>
      <div className="dropdown dropdown-bottom">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 min-w-[127.4px]">
          {sort.by.length > 0 ? sort.by : 'Sort By'}
        </div>
        <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          {sortByOptions.map((by) => (
            <li key={by}>
              <div
                tabIndex={0}
                role="button"
                onClick={() => {
                  setSort({ ...sort, by });
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setSort({ ...sort, by });
                  }
                }}>
                {by}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown dropdown-bottom">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 min-w-[68.22px]">
          {sort.order.length > 0 ? sort.order : 'Order'}
        </div>
        <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          {sortOrderOptions.map((order) => (
            <li key={order}>
              <div
                tabIndex={0}
                role="button"
                onClick={() => setSort({ ...sort, order })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setSort({ ...sort, order });
                  }
                }}>
                {order}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button
        type={'reset'}
        onClick={() => resetSortOrderFilter()}
        className="btn m-1">
        <ReloadIcon />
      </button>
    </div>
  );
}
