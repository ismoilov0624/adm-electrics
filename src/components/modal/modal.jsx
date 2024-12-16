import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import "./modal.scss";

export const Modal = ({ isOpen, close, children }) => {
  return (
    <Dialog open={isOpen} onClose={close} className="modal">
      <div className="modal-overlay">
        <DialogPanel className="modal-panel">{children}</DialogPanel>
      </div>
    </Dialog>
  );
};
