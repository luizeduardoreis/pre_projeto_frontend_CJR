import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  isOpen: boolean;
  children: any;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const backgroundStyle: React.CSSProperties = {
  position: "fixed",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "rgb(0,0,0,0.7)",
  zIndex: "1000",
};
const contentStyle: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "8vh",
  backgroundColor: "white",
  borderRadius: "2rem",
};

export default function Modal({
  children,
  isOpen,
  setIsOpen,
}: ModalProps) {

	const closeModal = () => setIsOpen(false);

  const handleContentClick = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <>
      {isOpen && (
        <div style={backgroundStyle} onClick={closeModal}>
          <div style={contentStyle} onClick={handleContentClick}>{children}</div>
        </div>
      )}
    </>
  );
}
