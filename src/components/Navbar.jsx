import { Link } from "react-router-dom";
import { FaIceCream } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import useCurrentUser from "../hooks/useCurrentUser";
import useLogout from "../hooks/useLogout";
import User from "./ui/User";

export default function Navbar() {
  const { user } = useCurrentUser();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="fixed left-0 right-0 top-0 flex w-full items-center bg-yellow-200 p-3 font-rubik text-sm">
      <div className="max-w-screen-xlg m-auto flex w-full justify-between lg:px-8">
        <Link to="/" className="flex items-center justify-between">
          <FaIceCream className=" text-2xl text-pink-600 " />
          <h1 className="hidden font-pacifico text-lg md:block">icecream</h1>
        </Link>
        <nav className="flex items-center gap-2 lg:gap-5">
          <Link to="/icecreams">icecreams</Link>
          {user && <User user={user} />}
          {user && user.isAdmin && (
            <Link to="/icecreams/new">
              <BiEditAlt className="text-2xl" aria-label="edit" />
            </Link>
          )}
          <Link to="/cart">
            <RiShoppingBag3Fill
              className="text-2xl"
              aria-label="shopping cart"
            />
          </Link>
          <div className="flex gap-2">
            {!user && (
              <Link
                to="/login"
                className="rounded-lg bg-rose-950 px-3 py-2 font-pacifico text-sm text-yellow-200 transition-all hover:bg-pink-600"
              >
                login
              </Link>
            )}
            {user && (
              <button
                onClick={handleLogout}
                className="rounded-lg bg-rose-950 px-3 py-2 font-pacifico text-sm text-yellow-200 transition-all hover:bg-pink-600"
              >
                logout
              </button>
            )}
            {!user && (
              <Link
                to="/signup"
                className="rounded-lg bg-rose-950 px-3 py-2 font-pacifico text-sm text-yellow-200 transition-all hover:bg-pink-600"
              >
                signup
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
