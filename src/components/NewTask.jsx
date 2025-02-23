export default function NewTask() {
   return (
      <div className="flex items-center gap-4">
         <input
            type="text"
            className="w-94 px-6 py-2 rounded-sm bg-stone-100 outline-stone-900"
         />
         <button className="text-stone-500 hover:text-stone-900 cursor-pointer">
            Add Task
         </button>
      </div>
   );
}
