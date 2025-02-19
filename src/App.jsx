import { useState } from "react";
import Home from "./components/Home";
import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
   const [projectState, setProjectState] = useState({
      selectedProjectId: undefined,
      projects: [],
   });

   const handleAddProject = () => {
      setProjectState((projectState) => {
         return {
            ...projectState,
            selectedProjectId: null,
         };
      });
   };

   let content;
   if (projectState.selectedProjectId === null) {
      content = <NewProject />;
   } else if (projectState.selectedProjectId === undefined) {
      content = <Home onAddProject={handleAddProject} />;
   }

   return (
      <main className="flex gap-5">
         <ProjectSidebar onAddProject={handleAddProject} />
         {content}
      </main>
   );
}

export default App;
