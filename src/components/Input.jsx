export default function Input({ label, textarea, ...props }) {
   const classes = "bg-white px-4 py-3 rounded-2xl focus:outline-stone-300 ";
   return (
      <p className="flex flex-col my-4 gap-2">
         <label className="text-sm font-thin uppercase">{label}</label>
         {textarea ? (
            <textarea
               className={`${classes} max-h-30 resize-none `}
               {...props}
            />
         ) : (
            <input className={classes} {...props} />
         )}
      </p>
   );
}
