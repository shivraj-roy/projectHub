export default function Button({ children, ...props }) {
   return (
      <button
         className="cursor-pointer border p-4 transition-all capitalize hover:rounded-xl"
         {...props}
      >
         {children}
      </button>
   );
}
