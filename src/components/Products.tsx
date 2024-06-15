import Image from "next/image";
import { ModalProduct } from "./ModalProduct";
import ProductsData from "./ProductsData";

function Products() {
  return (
    <>
      <div className="w-full p-10 py-24 flex flex-col drop-shadow-lg  shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_-10px_15px_-3px_rgba(0,0,0,0.1)] my-20">
        <h1 className="text-gray-900 font-bold self-center pb-16 text-4xl">Our Product</h1>
        <div className="w-full max-w-4xl flex flex-wrap justify-center pb-14 self-center gap-2 ">
          <div className="flex flex-col lg:w-full lg:flex-row px-4 justify-center items-center ">
            <ModalProduct
              props={{
                title: "Product Based",
                description: " We make and release a finished woodcraft product that ready to use.",
                content: <ProductsData productType="product" />,
              }}>
              <div className="card w-96 bg-base-100/95 shadow-xl h-64 relative overflow-hidden">
                <figure className="w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body absolute inset-0 flex-wrap justify-center items-center text-center p-10 bg-black bg-opacity-50 rounded-box hover:bg-opacity-10">
                  <h2 className="card-title ">Product Based</h2>
                </div>
              </div>
            </ModalProduct>
            {/* </Link> */}
            <div className="divider lg:divider-horizontal divider-neutral text-gray-900 ">AND</div>
            <ModalProduct
              props={{
                title: "Service Based",
                description: " We nande to use.",
                content: <ProductsData productType="service" />,
              }}>
              <div className="card w-96 bg-base-100/95 shadow-xl h-64 relative overflow-hidden">
                <figure className="w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1547609434-b732edfee020?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body absolute inset-0 flex-wrap justify-center items-center text-center p-10 bg-black bg-opacity-50 rounded-box hover:bg-opacity-10">
                  <h2 className="card-title ">Service Based</h2>
                </div>
              </div>
            </ModalProduct>
          </div>
        </div>
      </div>
    </>
  );
}

export { Products };
