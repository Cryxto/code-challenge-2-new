"use client";

import { ModalContext } from "@/context/modal-context";
import { useCallback, useContext, useEffect, useRef } from "react";

function Modal() {
  const { modalActive, setModalActive, modalWidth, setModalWidth } =
    useContext(ModalContext);
  function getFullWidthRespectingScrollbarInVw() {
    const themodalWidth = window?.innerWidth - document.documentElement.clientWidth;
    return "calc(100% - " + (themodalWidth <= 1 ? 0 : themodalWidth) + "px)";
  }

  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    setModalWidth(getFullWidthRespectingScrollbarInVw());
  }, [modalWidth]);

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
      <dialog id="my_modal_1" ref={ref} style={{ maxWidth: modalActive?modalWidth : '100%' }} className={`modal w-full`}>
        <div className="modal-box bg-[#f8f8f8]">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dolorem laudantium aperiam ipsam veniam in beatae, temporibus sapiente corporis, consequuntur, perferendis repudiandae debitis quisquam numquam quidem praesentium obcaecati esse molestiae.
          Nesciunt in vitae deleniti amet qui aut nisi sed labore sit cumque, nemo magni quos tempore. Esse, minus, iure sunt quisquam magni culpa aperiam suscipit beatae reprehenderit similique ipsa aliquam.
          Maxime, quibusdam cum beatae velit praesentium nihil quas ab maiores, in ut minima accusantium, numquam aspernatur enim cumque nulla accusamus corrupti dolorem. Excepturi vel, tempore aliquam repellendus molestias voluptates sunt.</p>
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
