"use client";
import { Company } from "@/components/Company";
import { TeamCard } from "@/components/TeamCard";
import { RandomUserContext } from "@/context/random-user";
import { useContext } from "react";

export default function Page() {
  const { teams } = useContext(RandomUserContext);
  return (
    <>
      <section
        id="about-us"
        className="max-w-6xl flex flex-wrap justify-center self-center p-4 flex-col w-full items-center pt-32 pb-36">
        <h1 className="text-gray-900 font-bold self-center mt-12 lg:pt-14 lg:mt-14 text-4xl max-md:mb-20 ">About Us</h1>
        <Company />

        <h2 className="text-gray-900 font-bold self-center py-16 mb-10 text-4xl ">Meet Our Teams</h2>
        <div className="flex sm:flex-row flex-col flex-wrap w-full justify-center items-center gap-5">
          {teams?.map((e: any, i) => (
            <TeamCard props={e} key={i} />
          ))}
        </div>
      </section>
    </>
  );
}
