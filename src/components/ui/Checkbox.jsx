// eslint-disable-next-line react/prop-types
export default function Checkbox({ category, register }) {
  return (
    <>
      <input
        type="checkbox"
        id={category}
        {...register(`categories.${category}`)}
        className="peer relative mr-3 h-4 w-4 shrink-0 appearance-none rounded-sm  bg-rose-200 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-rose-50 focus:ring-opacity-50 "
      />
      <label htmlFor={category}>{category}</label>
      <svg
        className="pointer-events-none absolute mt-1 hidden h-4 w-4 peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </>
  );
}
