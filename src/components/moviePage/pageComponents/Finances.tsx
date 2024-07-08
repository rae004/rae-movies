export default function Finances({
  revenue,
  budget,
}: {
  revenue: number;
  budget: number;
}) {
  if (!revenue || !budget) return null;

  const profit = revenue - budget;
  const spanPaddingLeft = 'pl-4 text-sm md:text-lg';

  return (
    <div className="flex w-full">
      <div className="card bg-base-300 rounded-box flex flex-col w-1/3 h-20 justify-center">
        <span className={spanPaddingLeft}>
          Budget: ${budget.toLocaleString()}
        </span>
      </div>
      <div className="divider divider-horizontal mx-0.5" />
      <div className="card bg-base-300 rounded-box flex flex-col w-1/3 h-20 justify-center">
        <span className={spanPaddingLeft}>
          Revenue: ${revenue.toLocaleString()}
        </span>
      </div>
      <div className="divider divider-horizontal mx-0.5" />
      <div className="card bg-base-300 rounded-box flex flex-col w-1/3 h-20 justify-center">
        <span className={spanPaddingLeft}>
          Profit: ${profit.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
