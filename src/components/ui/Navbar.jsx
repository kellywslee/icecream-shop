import { Link } from "react-router-dom";
import { FaIceCream } from "react-icons/fa";
import { RiShoppingBag3Fill } from "react-icons/ri";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 flex w-full items-center bg-yellow-200 p-3 font-pacifico">
      <div className="max-w-screen-xlg m-auto flex w-full justify-between lg:px-8">
        <Link to="/" className="flex items-center justify-between">
          <FaIceCream className="text-2xl text-pink-600" />
          <h1 className="font-pacifico text-lg">icecream</h1>
        </Link>
        <nav className="flex items-center gap-2 lg:gap-5">
          <Link to="/icecreams">icecreams</Link>
          <Link to="/icecreams/new">new</Link>
          <Link to="/cart">
            <RiShoppingBag3Fill
              className="text-2xl"
              aria-label="shopping cart"
            />
          </Link>
          <Button type="nav">login</Button>
          <Button type="nav">signup</Button>
        </nav>
      </div>
    </header>
  );
}
