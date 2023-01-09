
import { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";


type ModalProps = {
	children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) elRef.current = document.createElement("div");

  useEffect(() => {
    const el = elRef.current!; // non-null assertion because it will never be null
    document.body.appendChild(el);
		document.body.style.overflow = "hidden";
    return () => {
      document.body.removeChild(el);
			document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(children, elRef.current);
}

export default Modal;