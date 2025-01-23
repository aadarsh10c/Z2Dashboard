import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-1 h-full">
      {/* Sidebar Skeleton */}
      <div className="w-52 p-4 border-r bg-white">
        <Skeleton className="h-8 w-32 mb-8" /> {/* Header/Logo */}
        <div className="space-y-6">
          {/* Menu Groups */}
          {[1, 2, 3].map((group) => (
            <div key={group} className="space-y-3">
              <Skeleton className="h-4 w-24" />
              <div className="space-y-2 pl-2">
                {[1, 2, 3].map((item) => (
                  <Skeleton key={item} className="h-6 w-36" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area Skeleton */}
      <div className="flex-1 p-4 bg-secondary">
        {/* Header Area */}
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center">
            {/* Breadcrumb */}
            <div className="flex gap-2">
              {[1, 2].map((item) => (
                <Skeleton key={item} className="h-6 w-24" />
              ))}
            </div>
            {/* Action Buttons */}
            <div className="flex gap-2">
              {[1, 2, 3].map((btn) => (
                <Skeleton key={btn} className="h-8 w-24" />
              ))}
            </div>
          </div>
          <Skeleton className="h-[1px] w-full" />
        </div>

        {/* Content Area */}
        <div className="space-y-4 h-[calc(100%-100px)]">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((card) => (
              <Skeleton key={card} className="h-32 rounded-lg" />
            ))}
          </div>
          <Skeleton className="h-[calc(100%-160px)] w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}
