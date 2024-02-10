import { FaIceCream } from "react-icons/fa";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <section className="font-rubik flex w-full flex-col items-center gap-6 pt-24">
      <FaIceCream className="text-4xl text-pink-600" />
      <LoginForm />
    </section>
  );
}
