import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="bg-gray-200 mb-20 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-600 ">
        {/* wrap whole navigation bar */}
        <div className=" bg-gray-200 fixed w-full z-20 top-0 start-0 flex flex-wrap items-center justify-between mx-auto p-4 px-10">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>

<Link/>
          {/* this div below start wrap hamberger and cart */}
          <div className="flex  items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <FaCartShopping className="text-3xl" />
            {/* hamberger menu line below */}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {/* end wrap hamberger and cart */}



          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
             <Link to ="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-900 md:p-0 md:hover:text-blue-500"
                  aria-current="page"
                >
                  Home
             </Link>
              </li>
              <li>
              <Link to ="Product"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
               Products
                  </Link>
              </li>
              <li>
              <Link to =  "Cart"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Cart
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
