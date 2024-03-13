import Tag from "@/entities/Tag";
import Modal from "@/components/Modal";
import { useState } from "react";
import EditTaskForm from "@/components/Forms/EditTaskForm";
import EditTagForm from "@/components/Forms/EditTagForm";

interface TagListItemProps {
  tag: Tag;
}

export default function TagListItem({ tag }: TagListItemProps) {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);

  return (
    <li className="h-10">
      <div className="flex items-center gap-5">
        <label>{tag.name}</label>
        <button onClick={openModal} className="px-3 py-2.5">
          OI
        </button>
        <Modal setIsOpen={setModalIsOpen} isOpen={modalIsOpen}>
          <EditTagForm tag={tag}></EditTagForm>
        </Modal>
      </div>
    </li>
  );
}
