import HOME from "../assets/Working Late.jpg";
import Button from "./Button";

export default function Home({ onAddProject }) {
   return (
      <div className="text-center w-2/3 my-9">
         <img
            src={HOME}
            alt="home-image"
            className="w-[550px] mx-auto object-contain"
         />
         <h2 className="my-4 text-3xl">No active Project</h2>
         <p className="my-4">
            <Button onClick={onAddProject}>Create new project</Button>
         </p>
      </div>
   );
}
