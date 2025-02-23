import { CiCirclePlus } from "react-icons/ci";
import LOGO from "../assets/PH Logo.png";

export default function ProjectSidebar({
   onNewAddProject,
   projects,
   onSelectedProject,
   selectedProjectID,
}) {
   return (
      <aside className="w-80 h-screen bg-white border-r border-gray-200">
         <div className="flex items-center justify-center space-x-2 p-4 border-b border-gray-200">
            <img
               className="w-18 h-18 object-cover rounded-full"
               src={LOGO}
               alt="projectHub-logo"
            />
            <h1 className="font-display font-bold text-3xl">ProjectHub</h1>
         </div>
         <div className="px-4 py-2">
            <button
               onClick={onNewAddProject}
               className="flex items-center justify-center gap-4 w-full p-4 text-lg font-semibold cursor-pointer rounded-4xl text-white bg-gray-600 hover:bg-gray-800"
            >
               <CiCirclePlus className="text-4xl" /> Add Project
            </button>
         </div>
         <ul className="my-4">
            {projects.map((project) => {
               let cssClass =
                  "w-full text-left px-4 py-2 h-[55px] cursor-pointer transition-all easy-out hover:bg-stone-50";
               if (project.id === selectedProjectID) {
                  cssClass += " border-[0.25px] bg-stone-50";
               } else {
                  cssClass += " hover:border-[0.25px]";
               }

               return (
                  <li key={project.id}>
                     <button
                        onClick={() => onSelectedProject(project.id)}
                        className={cssClass}
                     >
                        {project.title}
                     </button>
                  </li>
               );
            })}
         </ul>
      </aside>
   );
}
