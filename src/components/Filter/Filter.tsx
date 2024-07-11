import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { FilterOption } from "./FilterOption";

interface FilterProps {
  categories: string[];
}

const Filter = ({ categories }: FilterProps) => {
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
    <Box
      width={{ md: "270px" }}
      p={{ xs: "0.5rem", md: "1rem 1rem 1rem 0" }}
      m={{ xs: "1rem 0 1rem 0" }}
    >
      <Typography m={{ md: "0 0 1.5rem 0", fontSize: "14px" }}>
        Filter by category
      </Typography>
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
    </Box>
  );
};

export default Filter;
