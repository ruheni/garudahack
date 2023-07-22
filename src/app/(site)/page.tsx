"use client"
import { trpc } from "@/utils/trpc";
import Link from "next/link";

export default function Home() {
  let { data: users, isLoading, isFetching } = trpc.coba.coba.useQuery();

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-screen bg-primaryYellow">
      <div className="absolute bottom-[10%] flex flex-col w-full justify-center items-center gap-40">
        <div className="flex flex-col justify-center items-center text-white font-medium text-[24px]">
          <div>Empowering, Diversity, </div>
          <div>Embracing Potential</div>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-10">
          <Link
            href={"/login"}
            className="w-full max-w-[350px] px-6 py-3 font-bold text-[18px] text-center text-primaryYellow rounded-3xl bg-primaryBg hover:scale-105 active:scale-95 transition-all"
          >
            LOG IN
          </Link>
          <Link href={"/register"} className="flex justify-center w-full">
            <p className="pt-2 text-sm text-primaryBg font-medium opacity-[90%] hover:opacity-[100%] transition-all">
              {"Don’t have an account? Sign Up"}
            </p>
            {
              users && 
              <p>
                {
                  users.name
                }
              </p>
            }
          </Link>
        </div>
      </div>
    </div>
  );
}
