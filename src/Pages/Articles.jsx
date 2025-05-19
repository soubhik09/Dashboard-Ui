import ArticleSkeleton from "@/components/ArticleSkeleton";
import React from "react";
import { Outlet, useOutlet } from "react-router";

function Articles() {
  const outlet = useOutlet();
  return (
    <div className="h-full flex flex-col items-center bg-white mx-6 rounded-xl mb-6 overflow-x-hidden shadow-md overflow-y-auto no-scrollbar">
      <h1 className="mt-6 font-bold text-2xl ">Articles</h1>
      {!outlet && <ArticleSkeleton />}
      <Outlet />
    </div>
  );
}

export default Articles;
