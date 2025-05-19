import ArticleSkeleton from "@/components/ArticleSkeleton";
import React from "react";

function AiKeyword() {
  return (
    <div className="h-full flex justify-center items-center text-5xl">
      <div className="mt-150 md:mt-0 bg-red-400">
        <ArticleSkeleton />
      </div>
    </div>
  );
}

export default AiKeyword;
