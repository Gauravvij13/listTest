import React from "react";

import { Modal } from "atoms/Modal";
import { XIcon } from "@heroicons/react/solid";

import { AddItem } from "./components/AddItemForm";
import useApp from "context/AppContext";

export default function AddItemModal({ hide }: any) {
  const {
    state: { list },
    actions: { addList },
  } = useApp();

  const onSubmit = async (values: any) => {
    addList({ ...values, id: list.length + 1, checked: false });
    hide();
  };
  return (
    <Modal isOpen={true} onClose={hide}>
      <XIcon
        className="ml-2 w-5 h-6 text-primary cursor-pointer absolute right-8 top-4"
        onClick={hide}
      />
      <div className="font-bold mb-4"> Add New</div>
      <div className="p-6 py-2">
        <AddItem onSubmit={onSubmit} />
      </div>
    </Modal>
  );
}
