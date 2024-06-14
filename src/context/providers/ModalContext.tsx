"use client";
import { ReactNode, useState } from "react";
import { ModalContext } from "../modal-context";

export function ModalContextProvider({ children }: { children: ReactNode }) {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [scrollBarWidth, setScrollBarWidth] = useState<string>("0px");
  function handleModalToggle() {
    setModalActive(!modalActive);
  }
  // console.log(modalActive);

  return (
    <ModalContext.Provider
      value={{
        modalActive,
        handleModalToggle,
        setModalActive,
        scrollBarWidth,
        setScrollBarWidth,
      }}>
      {children}
    </ModalContext.Provider>
  );
}
