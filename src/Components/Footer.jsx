import AppLogo from "./AppLogo";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { useSelector } from "react-redux";

export default function Footer() {
  const user = useSelector((state) => state.user);
  return (
    <footer className="mt-auto px-2 pt-6 pb-3 sm:pt-10 sm:px-10  text-center sm:text-left bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 md:grid md:grid-cols-4 gap-4">
      <div className="col-span-2">
        <Link
          to={"/"}
          className="shrink-0 items-center dark:text-white inline-flex"
        >
          <AppLogo className="block h-9 w-auto fill-gray-800 dark:fill-gray-200" />
          <div className="text-gray-800 dark:text-gray-200 font-extrabold text-lg">
            Malonda265
          </div>
        </Link>
        <div className="">
          Malonda265.com is a platform for national wholesale trade. We intend
          to serve millions of buyers and suppliers national wide.
        </div>
        <div className="my-2 gap-3 flex justify-center md:justify-normal">
          <SocialIcon url="https://facebook.com/" />
          <SocialIcon url="https://twitter.com/" />
          <SocialIcon url="https://instagram.com/" />
          <SocialIcon url="https://youtube.com/" />
          <SocialIcon url="https://pinterest.com/" />
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-2 gap-4 col-span-2">
        <div className="my-6 sm:my-0">
          <div className="text-lg font-bold">Useful Links</div>
          <ul>
            <li>
              <Link to="/about-us">About Malonda</Link>
            </li>
            <li>
              <Link to="/how-to">How to shop on Malonda265</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            {!!!user && (
              <li>
                <Link to="/login">Log In</Link>
              </li>
            )}
          </ul>
        </div>

        <div className="my-6 sm:my-0">
          <div className="text-lg font-bold">Customer Service</div>
          <ul>
            <li>
              <Link to="/payment-methods">Payment Methods</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions/#return-policy">
                Return Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions/#privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-4 border-t border-gray-900 dark:border-gray-100 pt-6 text-center text-gray-500 md:flex md:justify-between">
        <div>&copy; Copyright, Malonda265.com</div>
        <div>Developed by Happy Lakudzala.</div>
      </div>
    </footer>
  );
}
