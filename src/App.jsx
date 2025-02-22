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

   const handleCancelAddProject = () => {
      setProjectState((projectState) => {
         return {
            ...projectState,
            selectedProjectId: undefined,
         };
      });
   };

   const handleAddProject = (projectData) => {
      setProjectState((prev) => {
         const newProject = {
            ...projectData,
            id: Math.random(),
         };
         return {
            ...prev,
            selectedProjectId: undefined,
            projects: [...prev.projects, newProject],
         };
      });
   };

   let content;
   if (projectState.selectedProjectId === null) {
      content = (
         <NewProject
            onAdd={handleAddProject}
            onCancel={handleCancelAddProject}
         />
      );
   } else if (projectState.selectedProjectId === undefined) {
      content = <Home onNewAddProject={handleNewAddProject} />;
   }

   return (
      <main className="flex gap-5">
         <ProjectSidebar
            onNewAddProject={handleNewAddProject}
            projects={projectState.projects}
         />
         {content}
      </main>
   );
}

export default App;
