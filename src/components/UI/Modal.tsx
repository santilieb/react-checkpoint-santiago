import ReactDOM from "react-dom";

function Backdrop(props: any) {
  return <div className="backdrop"></div>;
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
