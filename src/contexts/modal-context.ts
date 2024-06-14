import { Dispatch, SetStateAction, createContext } from "react";

export interface ModalContextInterface {
  modalActive: boolean;
  handleModalToggle: () => void;
  setModalActive : Dispatch<SetStateAction<boolean>>;
  modalVw : string,
  setModalVw : Dispatch<SetStateAction<string>>
}
export const ModalContext = createContext<ModalContextInterface>({
  modalActive: false,
  handleModalToggle: () => {},
  setModalActive: () => {},
  modalVw:'100vw',
  setModalVw:()=>{}
});
