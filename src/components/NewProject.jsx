import Input from "./Input";

export default function NewProject() {
   return (
      <div className="w-[35rem] mt-12">
         <menu className="flex gap-8 item-center justify-end ">
            <li>
               <button className="bg-gray-900 text-white py-2 px-6 rounded-4xl cursor-pointer hover:bg-white hover:text-black hover:border">
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
            <Input label="Project Name: " />
            <Input label="Description: " textarea />
            <Input label="Due Date: " />
         </div>
      </div>
   );
}
