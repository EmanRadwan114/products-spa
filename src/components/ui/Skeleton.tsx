import { Star } from "lucide-react";
import React from "react";

const Skeleton: React.FC = () => {
  return (
    <div className="min-h-96 bg-primary/6 dark:bg-neutral-800 rounded-md shadow-lg flex flex-col h-full">
      {/* image */}
      <div className="h-40 w-full bg-primary/15 dark:bg-neutral-900"></div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        {/* category + rate */}
        <div className="flex justify-between items-center flex-wrap gap-2">
          <div className="w-16 h-3 rounded-md bg-primary/15 dark:bg-neutral-900"></div>
          <div className="flex items-center gap-1">
            <div className="w-5 h-3 rounded-md bg-primary/15 dark:bg-neutral-900"></div>
            <Star className="fill-yellow-700 text-yellow-700 size-4 mb-1" />
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-0.5">
            <div className="w-full h-4 rounded-md bg-primary/15 dark:bg-neutral-900"></div>
            <div className="w-full h-4 rounded-md bg-primary/15 dark:bg-neutral-900"></div>
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="w-full h-4 rounded-md bg-primary/15 dark:bg-neutral-900"></div>
            <div className="w-full h-4 rounded-md bg-primary/15 dark:bg-neutral-900"></div>
          </div>
          <div className="w-10 h-4 rounded-md bg-primary/15 dark:bg-neutral-900"></div>
        </div>
        <div className="w-full h-8 rounded-md bg-primary-text dark:bg-primary mt-auto"></div>
      </div>
    </div>
  );
};

export default Skeleton;
