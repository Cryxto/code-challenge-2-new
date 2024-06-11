import Image from "next/image";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
// import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../public/assets/logo-bordered.png";

export interface navStateInterface {
  navState: boolean;
  // scrollState: boolean;
  handleNavToggle: ()=>void;
}

function Navbar({ navState, handleNavToggle}: navStateInterface) {
  return (
    <>
      <nav className="flex flex-wrap justify-between max-w-6xl mx-auto items-center p-4 relative ">
        <div className="w-full flex items-center justify-between mb-1 flex-col md:flex-row ">
          <div className="flex flex-row w-full justify-between items-center">
            {/* <h1>I am logo</h1> */}
            <div className={`md:max-w-20 max-w-14 flex`}>
              <Image className="border-slate-100 " src={logo} alt="" />
            </div>
            <div className="md:hidden lg:hidden items-center flex">
              {navState ? (
                <button>
                  <RxCross2 className="text-4xl md:max-w-20" onClick={handleNavToggle} />
                </button>
              ) : (
                <button>
                  <RxHamburgerMenu className="text-4xl" onClick={handleNavToggle} />
                </button>
              )}
            </div>
          </div>
          <div className={`${navState? 'block':'hidden '} md:block lg:block w-full `}>
            <ul
              className={`flex items-center flex-col flex-1 justify-end  md:flex-row lg:flex-row gap-5 font-bold `}>
              <li className="py-2">
                <a href="#">Home</a>
              </li>
              <li className="py-2">
                <a href="#">About Us</a>
              </li>
              <li className="py-2">
                <a href="#">Service</a>
              </li>
              <li className="py-2">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export { Navbar };
