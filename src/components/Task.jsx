import NewTask from "./NewTask";

export default function Task() {
   return (
      <section className="my-4">
         <h2 className="text-xl mb-2">Tasks:</h2>
         <NewTask />
         <p className="my-3">Doesn't have any task yet !</p>
         <ul></ul>
      </section>
   );
}
