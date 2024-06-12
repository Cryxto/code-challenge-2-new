import { didactGothic } from "@/app/layout";
import Image from "next/image";

function CompanyOverview() {
  return (
    <>
      <div className={`hero min-h-screen text-gray-900 py-14  leading-loose `}>
      {/* <div className="hero min-h-screen bg-red-200 text-gray-900 py-14"> */}
        <div className="hero-content flex-col lg:flex-row">
          <div className="p-3">
          <Image
            src="https://images.unsplash.com/photo-1597072689227-8882273e8f6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="max-w-full rounded-lg shadow-2xl"
            // fill={true}
            width={300}
            height={300}
            alt="heh"
          />
          </div>
          <div className="text-justify max-w-xl p-3">
            <p className="py-6">
              <b>Nyoo Kayu Woodworking</b> company made craftsmanship meets sustainability in the creation of premium, eco-friendly
              furniture. 'Nyoo' signifies creativity, 'Kayu' represents our primary material—wood, and 'Woodworking'
              underscores our expertise. Each piece is meticulously crafted to ensure durability and quality, enhancing
              both aesthetics and functionality. We use water-based, non-toxic finishes safe for humans and the
              environment, and our commitment to sustainability is demonstrated through the use of recycled pine wood.
              Explore our range, including child-friendly educational blocks, and experience the dedication embedded in
              every piece.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export { CompanyOverview };
