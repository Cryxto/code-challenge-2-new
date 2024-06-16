"use client";
import { useContext, useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { ModalContext } from "@/context/modal-context";
import { usePathname } from "next/navigation";

function Header() {
  const [navState, setNavState] = useState<boolean>(false);
  const [scrollState, setScrollState] = useState<boolean>(false);
  const { modalWidth, modalActive } = useContext(ModalContext);

  useEffect(() => {
    if (document.readyState === "complete") {
      if (window.scrollY > 500 || window.pageYOffset > 500) {
        setScrollState(true);
      } else {
        if (navState === true) {
          setScrollState(true);
        } else {
          setScrollState(navState);
        }
      }
    }
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
    setNavState((prevNavState) => {
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

      return newNavState;
    });
  }
  const pathname = usePathname();
  return (
    // <h1>ff</h1>

    // <header className="text-black backdrop-blur-sm bg-white/30 fixed z-50 w-full top-0 left-0 dark:text-slate-100 dark:bg-gray-900/10">
    <header
      id="header"
      style={{ maxWidth: modalActive ? modalWidth : "100%" }}
      className={`text-slate-100 max-h-full ${
        pathname !== "/" ? "fixed" : "fixed"
      } z-30 w-full max-w-full top-0 left-0 dark:text-slate-100 rounded-b-[2rem] ${pathname === "/" ?scrollState ?  "on-scroll":'' : "bg-[#271008]"}`}>
      {/* <header className="text-black backdrop-blur-sm bg-white/30 absolute z-50 w-full top-0 left-0 dark:text-white dark:bg-gray-900/90 h-16"> */}
      <Navbar navState={navState} handleNavToggle={handleNavToggle} />
    </header>
  );
}

export { Header };
