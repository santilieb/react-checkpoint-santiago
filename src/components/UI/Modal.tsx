import ReactDOM from "react-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { uiActions } from "../../store/ui-slice";
import { ReactNode } from "react";

interface ModalProps {
  children?: ReactNode;
}

function Backdrop() {
  const dispatch = useAppDispatch();
  const cartIsVisible = useAppSelector((state) => state.ui.cartIsVisible);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  const toggleWishlistHandler = () => {
    dispatch(uiActions.toggleWishlist());
  };

  return (
    <div
      className="backdrop"
      onClick={cartIsVisible ? toggleCartHandler : toggleWishlistHandler}
    ></div>
  );
}

function ModalOverlay({ children }: ModalProps) {
  return (
    <div className="modal">
      <div className="content">{children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays")!;

function Modal({ children }: ModalProps) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement!)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement!
      )}
    </>
  );
}

export default Modal;
