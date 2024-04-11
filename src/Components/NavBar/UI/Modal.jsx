import { createPortal } from "react-dom"

const Backdrop = (props) =>{
    return <div className="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-75"/>
}

const ModalOverlay = (props) =>{
    return  <div className="fixed top-1/4 left-1/4 w-5/12 bg-white p-4 rounded-lg shadow-lg z-30 animate-slide-down">
        <div className="content">{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop />,portalElement)}
      {createPortal(<ModalOverlay> {props.children} </ModalOverlay>,portalElement)}
    </>
  );
};

export default Modal;