import { useState } from "react";
import Home from "./components/Home";
import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
   const [projectState, setProjectState] = useState({
      selectedProjectId: undefined,
      projects: [],
      tasks: [],
   });

   const handleAddTask = (task) => {
      setProjectState((prev) => {
         const newTask = {
            task: task,
            id: Math.random(),
            projectId: prev.selectedProjectId,
         };
         return {
            ...prev,
            tasks: [...prev.tasks, newTask],
         };
      });
   };

   const handleDeleteTask = (id) => {
      setProjectState((prev) => {
         return {
            ...prev,
            tasks: prev.tasks.filter((task) => task.id !== id),
         };
      });
   };

   const handleSelectedProject = (projectId) => {
      setProjectState((prev) => {
         return {
            ...prev,
            selectedProjectId: projectId,
         };
      });
   };

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

   const handleDeleteProject = () => {
      setProjectState((prev) => {
         return {
            ...prev,
            selectedProjectId: undefined,
            projects: prev.projects.filter(
               (project) => project.id !== prev.selectedProjectId
            ),
         };
      });
   };

   const selectedProject = projectState.projects.find(
      (project) => project.id === projectState.selectedProjectId
   );

   let content = (
      <SelectedProject
         project={selectedProject}
         onDelete={handleDeleteProject}
         onAddTask={handleAddTask}
         onDeleteTask={handleDeleteTask}
         tasks={projectState.tasks}
      />
   );
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
            onSelectedProject={handleSelectedProject}
            selectedProjectID={projectState.selectedProjectId}
         />
         {content}
      </main>
   );
}

export default App;
