"use client";

import { ModalContext } from "@/context/modal-context";
import Image from "next/image";
import { ReactNode, useCallback, useContext, useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

function Modal({ children }: { children: ReactNode }) {
  const { modalActive, setModalActive, modalWidth, setModalWidth } = useContext(ModalContext);

  function getFullWidthRespectingScrollbarInVw() {
    const themodalWidth = window?.innerWidth - document.documentElement.clientWidth;
    return "calc(100% - " + (themodalWidth <= 1 ? 0 : themodalWidth) + "px)";
  }

  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    setModalWidth(getFullWidthRespectingScrollbarInVw());
  }, [setModalWidth]);

  const handleShow = useCallback(() => {
    if (ref.current) {
      ref.current.showModal();
      ref.current.scrollTo(0, 0); // Scroll to the top when the modal is shown
    }
    setModalActive(true);
  }, [ref, setModalActive]);

  const handleClose = useCallback(() => {
    if (ref.current) {
      ref.current.close();
    }
    setModalActive(false);
  }, [ref, setModalActive]);

  const handleClickOutside = useCallback(
    (event: Event) => {
      if (ref.current && event.target === ref.current) {
        handleClose();
      }
    },
    [handleClose]
  );

  const handleDialogOnClose = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    }
  }, [ref]);

  useEffect(() => {
    if (modalActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalActive, handleClickOutside]);

  return (
    <div className="w-full flex justify-center">
      <button className="hover:text-gray-900 text-slate-100" onClick={handleShow}>
        {children}
      </button>
      <dialog
        id="my_modal_1"
        ref={ref}
        style={{ maxWidth: modalActive ? modalWidth : "100%" }}
        className="modal w-full overflow-y-auto"
        onClose={handleDialogOnClose}>
        <div className="modal-box bg-[#f8f8f8] text-gray-900 max-h-[90%] m-auto relative max-w-full ">
          <button
            className="absolute right-4 top-4 text-2xl hover:text-gray-300 focus:outline-none"
            onClick={handleClose}>
            <RxCross2 />
          </button>
          <h2 className="font-bold text-2xl">Product Based</h2>
          <p className="py-4 text-justify leading-loose">
            We make and release a finished woodcraft product that ready to use.
          </p>
          <div className="card md:card-side bg-[#f8f8f8] drop-shadow-lg  shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_-10px_15px_-3px_rgba(0,0,0,0.1)] m-6">
            <figure>
              <Image width={1000} height={1000} src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"  alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <button onClick={handleClose} className="btn">
              Close
            </button>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export { Modal };
