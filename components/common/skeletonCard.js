export default function SkeletonCard() {
  return (
    <div className="flex flex-wrap p-20  gap-2 items-center justify-center text-center">
      {[1, 2, 3, 4, 5, 6, 8, 9, 10].map((_, index) => (
        <div
          key={index}
          className="border   border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
        >
          <div className="animate-pulse  space-x-4">
            <div className="rounded-md bg-slate-200 h-72 w-100"></div>
            <div className="flex-1 space-y-6 py-3">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
