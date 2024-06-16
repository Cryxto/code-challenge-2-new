"use client";
import { TeamCard } from "@/components/TeamCard";
import { RandomUserContext } from "@/context/random-user";
import { useContext } from "react";

export default function Page() {
  const { teams } = useContext(RandomUserContext);
  return (
    <>
      <section
        id="teams-page"
        className="max-w-6xl flex flex-wrap justify-center self-center p-4 flex-col w-full items-center pt-32 pb-36">
        <h1 className="text-gray-900 font-bold self-center py-16 text-4xl ">Meet Our Team</h1>
        <div className="flex sm:flex-row flex-col flex-wrap w-full justify-center items-center gap-5">
          {teams?.map((e: any, i) => (
            <TeamCard props={e} key={i} />
          ))}
        </div>
      </section>
    </>
  );
}
