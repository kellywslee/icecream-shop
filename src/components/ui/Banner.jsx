export default function Banner() {
  return (
    <section className="flex w-full flex-col items-center bg-transparent md:mb-2 md:h-40 lg:flex-row lg:justify-center lg:gap-4">
      <div className="w-24">
        <img
          src="/images/banner.png"
          alt="ice cream"
          className="object-cover"
        />
      </div>

      <h2 className="text-center font-pacifico text-4xl text-white md:text-5xl lg:text-7xl">
        icecream
      </h2>
    </section>
  );
}
