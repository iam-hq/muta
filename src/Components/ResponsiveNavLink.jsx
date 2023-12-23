import { Link } from "react-router-dom";

export default function ResponsiveNavLink({
  active = false,
  className = "",
  children,
  ...props
}) {
  return (
    <Link
      {...props}
      className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${
        active
          ? "border-green-400  text-green-700  bg-green-50  focus:text-green-800  focus:bg-green-100  focus:border-green-700 "
          : "border-transparent text-blue-600  hover:text-blue-800  hover:bg-blue-50  hover:border-blue-300  focus:text-blue-800  focus:bg-blue-50  focus:border-blue-300 "
      } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
    >
      {children}
    </Link>
  );
}
