import { useSearchParams } from 'next/navigation';

export default function SortByFilter({
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}: {
  sortBy: string;
  setSortBy: (sort: string) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
}) {
  if (useSearchParams().has('searchString')) {
    return null;
  }

  const sortByOptions = ['Popularity', 'Revenue', 'Vote Count', 'Release Date'];
  const sortOrderOptions = ['Asc', 'Desc'];

  return (
    <div>
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1">
          {sortBy.length > 0 ? sortBy : 'Sort By'}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          {sortByOptions.map((sort) => (
            <li key={sort}>
              <a onClick={() => setSortBy(sort)}>{sort}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1">
          {sortOrder.length > 0 ? sortOrder : 'Order'}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          {sortOrderOptions.map((order) => (
            <li key={order}>
              <a onClick={() => setSortOrder(order)}>{order}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
