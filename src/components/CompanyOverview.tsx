import Image from "next/image";
import React from "react";
// import { ReactNode } from "react";

export interface CompanyOverviewInterface {
  theImage?: string;
  reverse?: boolean;
  children: React.ReactNode;
}

const defaultValue = {
  theImage:
    "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consectetur consequuntur consequatur inventore
      corrupti, quam dolore temporibus laborum officia molestias explicabo dignissimos, sequi impedit magni amet minima
      mollitia fugiat. Voluptatum.
    </p>
  ),
};

function CompanyOverview(props: CompanyOverviewInterface) {
  return (
    <>
      <div className={`hero min-h-screen text-gray-900 py-14  leading-loose `}>
        <div className={`hero-content flex-col lg:flex-row${props.reverse?'-reverse':''}`}>
          <div className="p-3 max-w-96">
            <Image
              src={props.theImage || defaultValue.theImage}
              className="max-w-full rounded-lg shadow-2xl"
              // fill={true}
              width={1000}
              height={1000}
              alt="heh"
            />
          </div>
          <div className="text-justify max-w-xl p-3">{props.children || defaultValue.children}</div>
        </div>
      </div>
    </>
  );
}

export { CompanyOverview };
