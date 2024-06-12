import { CompanyOverview } from "@/components/CompanyOverview";
import { Hero } from "../components/Hero";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyOverview/>
      <Products/>
      {/* <div className="bg-green-600 w-screen relative self-center flex justify-center">
        <div className="max-w-6xl w-full bg-red-200 self-center text-center">
          <h1>dasd</h1>
        </div>
      </div> */}
      {/* <h1>me content</h1> */}
      {/* <div className="bg-gray-300 w-full h-full p-4">
        <h1>me content</h1>
      </div> */}
      {/* <Hero /> */}
      {/* <div className="bg-green-600 w-screen relative self-center flex justify-center">
        <div className="max-w-6xl w-full bg-red-200 self-center ">
          <h1>dasd</h1>
        </div>
      </div> */}
      {/* <Hero /> */}
    </>
  );
}
