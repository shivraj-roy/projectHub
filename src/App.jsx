import Home from "./components/Home";
import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
   return (
      <main className="flex gap-5">
         <ProjectSidebar />
         {/* <NewProject /> */}
         <Home />
      </main>
   );
}

export default App;
