"use client";
import ProductsData from "@/components/ProductsData";
import { useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <section id="products" className="pt-32 mt-5 self-center flex flex-col items-center text-black">
        <h1 className="text-gray-900 font-bold self-center py-16 text-4xl ">Our Product</h1>
        <div role="tablist" className="tabs tabs-bordered flex justify-center space-x-4 m-4">
          <button
            role="tab"
            aria-selected={activeTab === 1}
            className={`tab text-gray-900 text-2xl h-full font-bold border-2 ${activeTab === 1 ? "tab-active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            Product Based
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 2}
            className={`tab text-gray-900 text-2xl h-full font-bold border-2 ${activeTab === 2 ? "tab-active" : ""}`}
            onClick={() => setActiveTab(2)}
          >
            Service Based
          </button>
          {/* <button
            role="tab"
            aria-selected={activeTab === 3}
            className={`tab text-lg font-bold border-2 ${activeTab === 3 ? "tab-active" : ""}`}
            onClick={() => setActiveTab(3)}
          >
            Tab 3
          </button> */}
        </div>
        <div className="tab-content-container p-10">
          {activeTab === 1 && <div role="tabpanel"><ProductsData productType="product" /></div>}
          {activeTab === 2 && <div role="tabpanel"><ProductsData productType="service" /></div>}
          {/* {activeTab === 3 && <div role="tabpanel">Tab content 3</div>} */}
        </div>
      </section>
    </>
  );
}
