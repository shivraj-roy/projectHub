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
      <dialog
         ref={dialogRef}
         className="m-4 left-[32%] top-[32%] text-center backdrop:bg-stone-900/90 p-4 rounded shadow-md"
      >
         {children}
         <form method="dialog">
            <button className="m-2 py-2 px-4 border cursor-pointer hover:underline">
               {buttonCaption}
            </button>
         </form>
      </dialog>,
      document.getElementById("modal-root")
   );
}
