import AppLogo from "./AppLogo";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="mt-auto px-2 pt-6 pb-3 sm:pt-10 sm:px-10  text-center sm:text-left bg-blue-700 text-white">
      <div className="md:grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <Link
            to={"/"}
            className="shrink-0 items-center dark:text-white inline-flex"
          >
            <AppLogo className="block h-9 w-auto fill-gray-800" />
            <div className="text-gray-800font-extrabold text-lg">MUTA</div>
          </Link>
          <div className="">
            Established in 2005 and officially registered in 2021, the Muslim
            Teachers Association (MUTA) is a non-profit organization committed
            to enhancing the professional and religious requirements of Muslim
            Teachers.
          </div>
          <div className="my-2 gap-3 flex justify-center md:justify-normal">
            <SocialIcon url="https://facebook.com/" />
            <SocialIcon url="https://instagram.com/" />
            <SocialIcon url="https://youtube.com/" />
          </div>
        </div>

        <div className="">
          <div className="my-6 sm:my-0">
            <div className="text-lg font-bold">Contact Us</div>
            <div>
              <div className="flex gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-white"
                  >
                    <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
                  </svg>
                </div>
                <div>
                  Muslim Teachers Association, <br />
                  P.O. Box 497, <br />
                  Blantyre, Malawi. <br />
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-white"
                  >
                    <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                  </svg>
                </div>
                <div>+265 881 881 165</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-900 dark:border-gray-100 pt-6 text-center  md:flex md:justify-between">
        <div>&copy; Copyright, Muslim Teacher's Association</div>
        <div>Developed by Happy Lakudzala.</div>
      </div>
    </footer>
  );
}
