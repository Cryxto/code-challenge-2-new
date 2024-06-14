"use client";

import { ModalContext } from "@/contexts/modal-context";
import { useCallback, useContext, useEffect, useRef } from "react";

function Modal() {
  const { modalActive, setModalActive, modalVw, setModalVw } = useContext(ModalContext);
  function getFullWidthRespectingScrollbarInVw() {
    const scrollbarWidth = window?.innerWidth - document.documentElement.clientWidth;
    const fullWidthRespectingScrollbar = window?.innerWidth - scrollbarWidth;
    const fullWidthInVw = (fullWidthRespectingScrollbar / window?.innerWidth) * 100;
    return fullWidthInVw+'%';
  }
  

  
  // setModalVw(getFullWidthRespectingScrollbarInVw())
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(()=>{
    function handleResizeForModal() {
      setModalVw(getFullWidthRespectingScrollbarInVw())
    }
    
    setModalVw(getFullWidthRespectingScrollbarInVw())
    window.addEventListener('resize',handleResizeForModal)
    return ()=>{
      window.removeEventListener('resize',handleResizeForModal)
      console.log(modalVw);
    }
  },[modalVw])

  const handleShow = useCallback(() => {
    ref.current?.showModal();
    // if (document.readyState==='complete') {
    //   setModalVw(getFullWidthRespectingScrollbarInVw())
    // }
    // setModalVw(getFullWidthRespectingScrollbarInVw())
    setModalActive(!modalActive);
  }, [ref, modalActive]);

  const handleClose = useCallback(() => {
    ref.current?.close();
    // if (document.readyState==='complete') {
    //   setModalVw(getFullWidthRespectingScrollbarInVw())
    // }
    setModalActive(!modalActive);
  }, [ref, modalActive]);
  // console.log(getFullWidthRespectingScrollbarInVw());

  return (
    <div className="w-full flex justify-center">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={() => document.getElementById("my_modal_1").showModal()}> */}
      <button className="btn" onClick={handleShow}>
        open modal
      </button>
      <dialog
        id="my_modal_1"
        ref={ref}
        // style={{maxWidth:modalActive ? modalVw:'100vw'}}
        className={`modal w-full`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={handleClose} className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export { Modal };
