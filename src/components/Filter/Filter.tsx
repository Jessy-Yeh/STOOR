import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";

interface FilterProps {
  categories: string[];
}

const Filter = ({ categories }: FilterProps) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [searchParams] = useSearchParams();
  const activeFilters: Array<string> =
    searchParams.get("categories")?.split(",") || [];

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const isChecked = activeFilters.includes(name);

    const newActiveFilters = [...activeFilters];

    if (isChecked) {
      const indexOfCategory = activeFilters.findIndex(
        (category) => category === name
      );

      if (indexOfCategory > -1) {
        newActiveFilters.splice(indexOfCategory, 1);
      }
    } else {
      newActiveFilters.push(name);
    }

    const newCategoriesValue = newActiveFilters.join(",");

    navigate({
      pathname: "/",
      search:
        newActiveFilters.length === 0
          ? ""
          : `?categories=${newCategoriesValue}`,
    });
  };

  return (
    <>
      {/* Mobile filter dialog */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={setMobileFiltersOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900 mt-24">
                Filter by Category
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="mt-24 h-6 w-6" />
              </button>
            </div>

            {/* Filters */}
            <form className="mt-8 p-4">
              {categories.map((category) => (
                <div key={category} className="pb-3 pt-3">
                  <input
                    defaultValue={category}
                    id={`${category}-mobile`}
                    name={category}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    checked={activeFilters.includes(category)}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor={`${category}-mobile`}
                    className="ml-3 text-sm text-gray-500"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      <div className="mx-auto px-4 py-4 sm:px-4 sm:py-1 lg:max-w-xl lg:px-4">
        <div className="pb-10 hidden lg:block">
          <p className="mt-12 text-base text-gray-500">Filter by category</p>
        </div>

        <div>
          <aside>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center mt-4 lg:hidden"
            >
              <span className="text-sm font-medium text-gray-700">Filters</span>
              <PlusIcon
                aria-hidden="true"
                className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
              />
            </button>

            <div className="hidden lg:block">
              <form className="space-y-8 ">
                {categories.map((category) => (
                  <div key={category}>
                    <fieldset>
                      <div className="flex items-center">
                        <input
                          defaultValue={category}
                          id={category}
                          name={category}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          checked={activeFilters.includes(category)}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor={category}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {category}
                        </label>
                      </div>
                    </fieldset>
                  </div>
                ))}
              </form>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Filter;
