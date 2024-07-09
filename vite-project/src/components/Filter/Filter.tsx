import { useNavigate, useSearchParams } from "react-router-dom";
import { Checkbox, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

interface FilterProps {
  categories: string[];
}

const Filter = ({ categories }: FilterProps) => {
  const [searchParams] = useSearchParams();
  const activeFilters: Array<string> =
    searchParams.get("categories")?.split(",") || [];

  // we want the checkboxes to be checked or not checked based on this value
  // this is step 1 :)
  // step 2 we can do later, which is to add the onChange function to update the url when we click one of the boxes

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // we want to update the value of the "categories" url query parameter
    // to do this, we need to know:
    // 1) what is already checked (if any)
    // 2) which category the user clicked

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
    <div>
      <div>
        <Typography>Filter by category</Typography>
        {categories.map((category) => {
          return (
            <FilterOption
              key={category}
              category={category}
              checked={activeFilters.includes(category)}
              onChange={handleChange}
            />
          );
        })}
      </div>
    </div>
  );
};

interface FilterOptionProps {
  checked: boolean;
  category: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterOption = ({ checked, category, onChange }: FilterOptionProps) => {
  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} onChange={onChange} name={category} />
      }
      label={category}
    />
  );
};

export default Filter;
