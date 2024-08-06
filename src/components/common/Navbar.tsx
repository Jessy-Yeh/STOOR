import { NavLink } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <>
      <Disclosure
        as="nav"
        className="bg-orange-100 shadow fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `inline-flex items-center border-b-2 ${
                      isActive ? "border-orange-400" : "border-transparent"
                    } px-1 pt-1 text-sm font-medium text-gray-900`
                  }
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/t-shirts"
                  className={({ isActive }) =>
                    `inline-flex items-center border-b-2 ${
                      isActive ? "border-orange-400" : "border-transparent"
                    } px-1 pt-1 text-sm font-medium text-gray-900`
                  }
                >
                  T-SHIRTS
                </NavLink>
                <NavLink
                  to="/jeans"
                  className={({ isActive }) =>
                    `inline-flex items-center border-b-2 ${
                      isActive ? "border-orange-400" : "border-transparent"
                    } px-1 pt-1 text-sm font-medium text-gray-900`
                  }
                >
                  JEANS
                </NavLink>
                <NavLink
                  to="/shoes"
                  className={({ isActive }) =>
                    `inline-flex items-center border-b-2 ${
                      isActive ? "border-orange-400" : "border-transparent"
                    } px-1 pt-1 text-sm font-medium text-gray-900`
                  }
                >
                  SHOES
                </NavLink>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `inline-flex items-center border-b-2 ${
                    isActive ? "border-orange-400" : "border-transparent"
                  } px-1 pt-1 text-sm font-medium text-gray-900`
                }
              >
                CART
              </NavLink>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 pb-3 pt-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 ${
                  isActive
                    ? "border-l-4 border-orange-500 bg-orange-50 text-orange-700"
                    : ""
                }`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/t-shirts"
              className={({ isActive }) =>
                `block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 ${
                  isActive
                    ? "border-l-4 border-orange-500 bg-orange-50 text-orange-700"
                    : ""
                }`
              }
            >
              T-SHIRTS
            </NavLink>
            <NavLink
              to="/jeans"
              className={({ isActive }) =>
                `block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 ${
                  isActive
                    ? "border-l-4 border-orange-500 bg-orange-50 text-orange-700"
                    : ""
                }`
              }
            >
              JEANS
            </NavLink>
            <NavLink
              to="/shoes"
              className={({ isActive }) =>
                `block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 ${
                  isActive
                    ? "border-l-4 border-orange-500 bg-orange-50 text-orange-700"
                    : ""
                }`
              }
            >
              SHOES
            </NavLink>
          </div>
          <div className="border-t border-gray-200 pb-3 pt-4">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 ${
                  isActive
                    ? "border-l-4 border-orange-500 bg-orange-50 text-orange-700"
                    : ""
                }`
              }
            >
              CART
            </NavLink>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
};

export default Navbar;
