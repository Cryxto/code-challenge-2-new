import { Dispatch, SetStateAction, createContext } from "react";

export interface ModalContextInterface {
  modalActive: boolean;
  handleModalToggle: () => void;
  setModalActive : Dispatch<SetStateAction<boolean>>;
  scrollBarWidth : string,
  setScrollBarWidth : Dispatch<SetStateAction<string>>
}
export const ModalContext = createContext<ModalContextInterface>({
  modalActive: false,
  handleModalToggle: () => {},
  setModalActive: () => {},
  scrollBarWidth:'',
  setScrollBarWidth:()=>{}
});