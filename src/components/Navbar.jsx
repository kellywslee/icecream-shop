import { Link } from "react-router-dom";
import { FaIceCream } from "react-icons/fa";
import { RiShoppingBag3Fill } from "react-icons/ri";
import useCurrentUser from "../hooks/useCurrentUser";
import useLogout from "../hooks/useLogout";

export default function Navbar() {
  // const navigate = useNavigate();
  const { user } = useCurrentUser();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
    // navigate("/");
  };

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
          {!user && (
            <Link
              to="/login"
              className="rounded-lg bg-rose-950 px-3 py-2 text-sm text-yellow-200 transition-all hover:bg-pink-600"
            >
              login
            </Link>
          )}
          {user && (
            <button
              onClick={handleLogout}
              className="rounded-lg bg-rose-950 px-3 py-2 text-sm text-yellow-200 transition-all hover:bg-pink-600"
            >
              logout
            </button>
          )}
          {!user && (
            <Link
              to="/signup"
              className="rounded-lg bg-rose-950 px-3 py-2 text-sm text-yellow-200 transition-all hover:bg-pink-600"
            >
              signup
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
