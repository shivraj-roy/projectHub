import { useState } from "react";
import Home from "./components/Home";
import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
   const [projectState, setProjectState] = useState({
      selectedProjectId: undefined,
      projects: [],
   });

   const handleNewAddProject = () => {
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
      content = <Home onNewAddProject={handleNewAddProject} />;
   }

   return (
      <main className="flex gap-5">
         <ProjectSidebar onNewAddProject={handleNewAddProject} />
         {content}
      </main>
   );
}

export default App;
