import ReactDOM from "react-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { uiActions } from "../../store/ui-slice";

function Backdrop(props: any) {
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

function ModalOverlay(props: any) {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays")!;

function Modal(props: any) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement!)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement!
      )}
    </>
  );
}

export default Modal;
