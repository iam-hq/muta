import AppLogo from "./AppLogo";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import ResponsiveNavLink from "./ResponsiveNavLink";
import { useLocation, Link } from "react-router-dom";

const navRoutes = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about-us" },
  { text: "Events", href: "/events" },
  { text: "Membership", href: "/membership" },
  { text: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);
  let location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  return (
    <nav
      className={`${
        colorChange ? "bg-white" : "bg-white"
      }  border-b border-gray-200 `}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between w-full">
            <div className="shrink-0 flex items-center">
              <Link
                to={"/"}
                className="shrink-0 flex items-center dark:text-white"
              >
                <AppLogo className="block h-9 w-auto fill-gray-800 " />
              </Link>
            </div>
            <div className="hidden space-x-8 sm:flex">
              {navRoutes.map((route) => (
                <NavLink
                  key={route.href}
                  active={route.href === currentRoute}
                  to={route.href}
                >
                  {route.text}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Nav Button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() =>
                setShowingNavigationDropdown((previousState) => !previousState)
              }
              className="inline-flex items-center justify-center p-2 rounded-sm text-gray-400  hover:text-gray-500  hover:bg-gray-100  focus:outline-none focus:bg-gray-100  focus:text-gray-500  transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={
                    !showingNavigationDropdown ? "inline-flex" : "hidden"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={
                    showingNavigationDropdown ? "inline-flex" : "hidden"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={
          (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden"
        }
      >
        <div className="pt-2 pb-3 space-y-1">
          {navRoutes.map((route) => (
            <ResponsiveNavLink
              active={currentRoute === route.href}
              to={route.href}
              key={route.href}
              onClick={() => setShowingNavigationDropdown(false)}
            >
              {route.text}
            </ResponsiveNavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
