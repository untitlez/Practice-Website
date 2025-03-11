"use client";

import PostImages from "@/app/components/instagram/PostImages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function PokemonPage() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="grid grid-cols-3 max-w-screen-xl w-full py-8 px-4">
          {/* Profile Section */}
          <div className="col-span-3 sm:col-span-1 grid justify-center items-center my-8 ">
            <div className="avatar">
              <div className="ring-accent ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
                <img src="/shiba.jpg" alt="profile image" />
              </div>
            </div>
          </div>

          <div className="col-span-3 sm:col-span-2 sm:block grid justify-center my-8">
            <div className="flex items-center gap-6 mb-6">
              <h1 className="text-xl font-medium">the.tlez</h1>
              <button className="btn btn-outline">Following</button>
              <button className="btn btn-outline">Message</button>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-8">
                <span className="font-medium">353 post</span>
                <span className="font-medium">250 followers</span>
                <span className="font-medium">152 following</span>
              </div>
              <span className="font-medium">
                อิสระ • เวลา • การเดินทาง • 🍀
              </span>
              <span className="text-sm text-base-content opacity-60">
                Followed by nornaeduckly, nnaaan.n + 9 more
              </span>
            </div>
          </div>

          <div className="divider col-span-3"></div>
          {/* Posts */}
          <div className="col-span-3 mt-4 ">
            <PostImages />
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}
