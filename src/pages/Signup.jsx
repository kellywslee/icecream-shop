import { FaIceCream } from "react-icons/fa";
import SignupForm from "../components/SignupForm";

export default function Signup() {
  return (
    <main className="flex w-full flex-col items-center gap-6 pt-24 font-rubik">
      <FaIceCream className="text-4xl text-pink-600" />
      <SignupForm />
    </main>
  );
}
