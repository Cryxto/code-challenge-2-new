"use client";

import { ModalContext } from "@/context/modal-context";
import { useCallback, useContext, useEffect, useRef } from "react";

function Modal() {
  const { modalActive, setModalActive, scrollBarWidth, setScrollBarWidth } =
    useContext(ModalContext);
  function getFullWidthRespectingScrollbarInVw() {
    const theScrollbarWidth = window?.innerWidth - document.documentElement.clientWidth;
    return "calc(100% - " + (theScrollbarWidth <= 1 ? 0 : theScrollbarWidth) + "px)";
  }

  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    setScrollBarWidth(getFullWidthRespectingScrollbarInVw());
    console.log(scrollBarWidth);
  }, [scrollBarWidth]);

  const handleShow = useCallback(() => {
    ref.current?.showModal();
    setModalActive(!modalActive);
  }, [ref, modalActive]);

  const handleClose = useCallback(() => {
    ref.current?.close();
    setModalActive(!modalActive);
  }, [ref, modalActive]);

  return (
    <div className="w-full flex justify-center">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={() => document.getElementById("my_modal_1").showModal()}> */}
      <button className="btn" onClick={handleShow}>
        open modal
      </button>
      <dialog id="my_modal_1" ref={ref} style={{ maxWidth: modalActive?scrollBarWidth : '100%' }} className={`modal w-full`}>
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
