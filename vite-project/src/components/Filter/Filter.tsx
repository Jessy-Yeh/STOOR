// import { Theme, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
// import Chip from "@mui/material/Chip";
import { useState } from "react";
import { Checkbox, FormGroup, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const categories = ["Men's Clothing", "Jewellery", "Electronics"];

// function getStyles(name: string, personName: readonly string[], theme: Theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

const Filter = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  // const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked([event.target.checked, event.target.checked]);
  // };

  // const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked([event.target.checked, checked[1]]);
  // };

  // const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked([checked[0], event.target.checked]);
  // };

  // const children = (
  //   <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
  //     <FormControlLabel
  //       label="Child 1"
  //       control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
  //     />
  //     <FormControlLabel
  //       label="Child 2"
  //       control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
  //     />
  //   </Box>
  // );

  // const theme = useTheme();

  // const [category, setCategory] = useState<string[]>([]);

  // const handleChange = (event: SelectChangeEvent<typeof category>) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setCategory(typeof value === "string" ? value.split(",") : value);
  // };

  return (
    <div>
      {/* <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Filter</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={category}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {categories.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, category, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}

      <div>
        <Typography>Filter by category</Typography>
        <FormControlLabel
          control={<Checkbox />}
          label="Men's Clothing"
          onChange={handleChange}
        />
        <FormControlLabel control={<Checkbox />} label="Jewellery" />
        <FormControlLabel control={<Checkbox />} label="Electronics" />
      </div>
    </div>
  );
};

export default Filter;
