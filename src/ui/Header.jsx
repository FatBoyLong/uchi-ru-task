import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="text-lg bg-blue-600 shadow-md ">
      <div className="h-full max-w-7xl flex m-auto">
        <NavLink to="/" className="px-5 py-6">
          Все котики
        </NavLink>
        <NavLink to="../favorite" className="px-5 py-6">
          Любимые котики
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
