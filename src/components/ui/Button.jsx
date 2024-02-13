// eslint-disable-next-line react/prop-types
export default function Button({ children, disabled, type, onClick }) {
  const base =
    "bg-rose-950 px-3 py-2 text-sm font-semibold text-yellow-200 transition-all hover:bg-pink-600 rounded-lg";
  const styles = {
    form: `${base} mt-2 font-bold`,
    add: `${base} my-4 w-1/3`,
    order: `${base} w-11/12`,
  };

  return (
    <button disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}
