import { CiTrash } from "react-icons/ci";
import Task from "./Task";

export default function SelectedProject({
   project,
   onDelete,
   onAddTask,
   onDeleteTask,
   tasks,
}) {
   const formatedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC",
   });

   return (
      <div className="w-[35rem] mt-16">
         <header>
            <div className="p-4 flex items-center justify-between">
               <h1 className="text-3xl font-bold capitalize">
                  {project.title}
               </h1>
               <button onClick={onDelete} className="cursor-pointer">
                  <CiTrash className="text-red-500 text-3xl" />
               </button>
            </div>
            <p className="py-4">{formatedDate}</p>
            <p className="py-4 whitespace-pre-wrap border-b-1 border-stone-400">
               {project.description}
            </p>
         </header>
         <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
      </div>
   );
}
