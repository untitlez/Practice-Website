"use client";

import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

export default function PostImages() {
  const fetchData = async ({ pageParam = 1 }) => {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${pageParam}&limit=10`
    );
    const results = await response.json();
    return { results, nextPage: pageParam + 1, totalPage: 100 };
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["post"],
    queryFn: fetchData,
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.nextPage < lastPage.totalPage ? lastPage.nextPage : undefined,
  });

  console.log(data);

  return status === "pending" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <InfiniteScroll className="grid grid-cols-3 gap-4"
      dataLength={data.pages.flatMap((page) => page.results).length}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
      loader={<img className="skeleton h-full w-full aspect-square object-cover rounded-md"/>}
    >
      {data.pages.flatMap((page) =>
        page.results.map((post) => (
        <ul key={post.id} className="hover:opacity-80">
            <img src={post.download_url} alt={post.author} className="aspect-square object-cover rounded-md"/>
        </ul>
    )))}
    </InfiniteScroll>
  );
}
