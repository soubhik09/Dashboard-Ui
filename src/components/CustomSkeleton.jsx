import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function CustomSkeleton({name}) {
  return (
    <div className="h-full flex flex-wrap gap-5 bg-white mx-6 mb-6 rounded-xl overflow-y-auto py-10 shadow-md no-scrollbar justify-center items-center text-5xl">
    <div className="w-full block text-center text-2xl font-bold uppercase">{name}</div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-100" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[248px] bg-gray-200" />
          <Skeleton className="h-4 w-[170px] bg-gray-200" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-100" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[248px] bg-gray-200" />
          <Skeleton className="h-4 w-[170px] bg-gray-200" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-200" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[248px] bg-gray-200" />
          <Skeleton className="h-4 w-[170px] bg-gray-200" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-200" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[248px] bg-gray-200" />
          <Skeleton className="h-4 w-[170px] bg-gray-100" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-200" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[248px] bg-gray-200" />
          <Skeleton className="h-4 w-[170px] bg-gray-200" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-200" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[248px] bg-gray-200" />
          <Skeleton className="h-4 w-[170px] bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export default CustomSkeleton;
