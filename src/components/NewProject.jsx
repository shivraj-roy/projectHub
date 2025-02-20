import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAdd }) {
   const titleRef = useRef();
   const descriptionRef = useRef();
   const dueDateRef = useRef();

   const handleSave = () => {
      const title = titleRef.current.value;
      const description = descriptionRef.current.value;
      const dueDate = dueDateRef.current.value;

      onAdd({ title: title, description: description, dueDate: dueDate });
   };

   return (
      <div className="w-[35rem] mt-12">
         <menu className="flex gap-8 item-center justify-end ">
            <li>
               <button
                  onClick={handleSave}
                  className="bg-gray-900 text-white py-2 px-6 rounded-4xl cursor-pointer hover:bg-white hover:text-black hover:border"
               >
                  Save
               </button>
            </li>
            <li>
               <button className="py-2 px-6 rounded-4xl cursor-pointer border border-gray-900">
                  Cancel
               </button>
            </li>
         </menu>
         <div className="bg-stone-100 h-[40rem] m-4 py-4 px-6 rounded-4xl">
            <Input type="text" ref={titleRef} label="Project Name: " />
            <Input ref={descriptionRef} label="Description: " textarea />
            <Input type="date" ref={dueDateRef} label="Due Date: " />
         </div>
      </div>
   );
}
