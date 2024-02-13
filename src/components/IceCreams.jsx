import { useIceCreams } from "../hooks/useIceCreams";
import IceCreamCard from "./ui/IceCreamCard";
import Loader from "./ui/Loader";

export default function IceCreams() {
  const { iceCreams, isLoading } = useIceCreams();

  return (
    <section className="w-5/6">
      {isLoading && <Loader />}
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {iceCreams &&
          iceCreams.map((iceCream) => (
            <IceCreamCard key={iceCream.id} iceCream={iceCream} />
          ))}
      </ul>
    </section>
  );
}
