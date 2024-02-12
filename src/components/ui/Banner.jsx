export default function Banner() {
  return (
    <section className="relative mb-4 h-40 w-full bg-transparent">
      <img
        src="/images/banner.png"
        alt="ice cream"
        className="h-full w-full object-cover"
      />
      <div className="absolute top-12 w-full text-center">
        <h2 className="font-pacifico text-7xl text-white">icecream</h2>
      </div>
    </section>
  );
}
