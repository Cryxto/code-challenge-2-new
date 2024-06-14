"use client"
import { ModalContext } from "@/contexts/modal-context";
import { ReactNode, useState } from "react";

export function ModalContextProvider ({children}:{children:ReactNode}) {
  const [modalActive, setModalActive] = useState<boolean>(false)
  const [modalVw, setModalVw] = useState<string>('100vw')
  function handleModalToggle() {
    setModalActive(!modalActive)
  }
  // console.log(modalActive);
  
  return(
    <ModalContext.Provider value={{modalActive, handleModalToggle, setModalActive, modalVw, setModalVw}}>
      {children}
    </ModalContext.Provider>
  )
}