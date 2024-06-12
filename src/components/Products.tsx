import Image from "next/image";

function Products() {
  return (
    <>
      <div className="w-full max-w-4xl flex flex-wrap justify-center pb-14 self-center gap-2 ">
        {/* <div className="grid grid-cols-2 gap-2"> */}
        <div className="flex flex-col w-full lg:flex-row px-4">
          <div className="grid flex-grow h-64 card bg-base-300 rounded-box place-items-center">content</div>
          <div className="divider lg:divider-horizontal divider-neutral text-gray-900">OR</div>
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
            <div className="card-body absolute inset-0 flex-wrap justify-center items-center text-center p-10 bg-black bg-opacity-50 rounded-box">
              <h2 className="card-title text-slate-100">Shoes!</h2>
              <p className="flex-grow-0 text-slate-100">jdasdasa</p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export { Products };
