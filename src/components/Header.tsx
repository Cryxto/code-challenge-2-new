"use client";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";

function Header() {
  const [navState, setNavState] = useState<boolean>(false);
  const [scrollState, setScrollState] = useState<boolean>(false);

  useEffect(() => {
    function handleResizeForNav(e: any) {
      if (e.currentTarget.innerWidth >= 768) {
        setNavState(false);
        if (window.scrollY > 500) {
          setScrollState(true);
        } else {
          setScrollState(false);
        }
      }
    }
    function handleScrollState() {
      if (window.scrollY > 500 || window.pageYOffset > 500) {
        setScrollState(true);
      } else {
        if (navState === true) {
          setScrollState(true);

          console.log(window.scrollY + " navState should true : " + navState);
        } else {
          setScrollState(navState);
        }
      }
    }
    window.addEventListener("resize", handleResizeForNav);
    window.addEventListener("scroll", handleScrollState);
    return () => {
      window.removeEventListener("resize", handleResizeForNav);
      window.removeEventListener("scroll", handleScrollState);
    };
  }, [navState]);
  function handleNavToggle() {
    console.log(window.scrollY + " b toggle navState : " + navState);
    
    setNavState(prevNavState => {
      const newNavState = !prevNavState;
      
      if (newNavState === true) {
        if (window.scrollY < 500) {
          setScrollState(true);
        }
      } else {
        if (window.scrollY > 500) {
          setScrollState(true);
        } else {
          setScrollState(false);
        }
      }
      
      console.log(window.scrollY + " toggle navState : " + newNavState);
      
      return newNavState;
    });
  }
  
  return (
    // <h1>ff</h1>

    // <header className="text-black backdrop-blur-sm bg-white/30 fixed z-50 w-full top-0 left-0 dark:text-slate-100 dark:bg-gray-900/10">
    <header
      id="header"
      className={`${
        scrollState ? "on-scroll" : ""
      } text-slate-100  fixed z-50 w-full  top-0 left-0 dark:text-slate-100 rounded-b-lg`}>
      {/* <header className="text-black backdrop-blur-sm bg-white/30 absolute z-50 w-full top-0 left-0 dark:text-white dark:bg-gray-900/90 h-16"> */}
      <Navbar navState={navState} handleNavToggle={handleNavToggle} />
    </header>
  );
}

export { Header };
