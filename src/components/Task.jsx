import NewTask from "./NewTask";
import { IoMdClose } from "react-icons/io";

export default function Task({ onAdd, onDelete, tasks }) {
   return (
      <section className="my-4">
         <h2 className="text-xl mb-2">Tasks:</h2>
         <NewTask onAdd={onAdd} />
         {tasks.lenght === 0 ? (
            <p className="my-3">Doesn't have any task yet !</p>
         ) : (
            <ul className=" mt-4">
               {tasks.map((task) => {
                  return (
                     <li
                        key={task.id}
                        className="flex justify-between my-4 p-2 bg-emerald-50 border-emerald-600 hover:border-[0.5px]"
                     >
                        <span>{task.task}</span>
                        <button className="cursor-pointer hover:text-red-600 opacity-40 hover:opacity-100">
                           <IoMdClose />
                        </button>
                     </li>
                  );
               })}
            </ul>
         )}
      </section>
   );
}
