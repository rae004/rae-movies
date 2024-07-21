export default function TalentSkeleton() {
  return (
    <div className={'flex flex-row justify-center h-full w-full py-10 gap-8'}>
      <div className={'flex flex-col gap-4 max-w-xl justify-center'}>
        <div className="skeleton h-[64px] w-[574px]" />
        <div className="skeleton h-[318px] w-[574px]" />
        <div className="skeleton h-[80px] w-[574px]" />
      </div>
      <div className={'flex flex-col justify-center'}>
        <div className="skeleton h-[450px] w-[300px] rounded-full" />
      </div>
    </div>
  );
}
