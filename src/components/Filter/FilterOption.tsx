import { Checkbox, FormControlLabel, Typography } from "@mui/material";

interface FilterOptionProps {
  checked: boolean;
  category: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterOption = ({
  checked,
  category,
  onChange,
}: FilterOptionProps) => {
  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} onChange={onChange} name={category} />
      }
      label={
        <Typography
          display="inline"
          component="span"
          sx={{ textTransform: "capitalize", fontSize: "14px " }}
        >
          {category}
        </Typography>
      }
    />
  );
};
