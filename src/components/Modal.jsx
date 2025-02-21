import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, buttonCaption, ref }) {
   const dialogRef = useRef();
   useImperativeHandle(ref, () => {
      return {
         open() {
            dialogRef.current.showModal();
         },
      };
   });

   return createPortal(
      <dialog ref={dialogRef}>
         {children}
         <form method="dialog">
            <button>{buttonCaption}</button>
         </form>
      </dialog>,
      document.getElementById("modal-root")
   );
}
