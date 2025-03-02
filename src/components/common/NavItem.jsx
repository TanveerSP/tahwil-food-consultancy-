import { NavLink } from "react-router-dom";

const NavItem = ({ path, name }) => {
  return (
    <li className="text-lg text-center">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? " text-black" : "text-black hover:text-black"
        }
      >
        {name}
      </NavLink>
    </li>
  );
};

export default NavItem;
