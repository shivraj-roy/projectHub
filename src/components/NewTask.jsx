import { useState } from "react";

export default function NewTask({ onAdd }) {
   const [enteredTask, setEnteredTask] = useState("");

   const handleChangeTask = (event) => {
      setEnteredTask(event.target.value);
   };

   const handleClick = () => {
      if (enteredTask.trim() === "") {
         return;
      }
      onAdd(enteredTask);
      setEnteredTask("");
   };

   return (
      <div className="flex items-center gap-4">
         <input
            onChange={handleChangeTask}
            value={enteredTask}
            type="text"
            className="w-94 px-6 py-2 rounded-sm bg-stone-100 outline-stone-900"
         />
         <button
            onClick={handleClick}
            className="text-stone-500 hover:text-stone-900 cursor-pointer"
         >
            Add Task
         </button>
      </div>
   );
}
