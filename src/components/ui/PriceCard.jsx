/* eslint-disable react/prop-types */
export default function PriceCard({ text, price }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-rose-100 p-3 shadow-md">
      <p className="font-semibold">{text}</p>
      <p>{`$ ${price}`}</p>
    </div>
  );
}
