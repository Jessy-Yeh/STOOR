import { Divider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

const Banner = () => {
  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "1rem 0" }}
      >
        <Typography variant="h6">Our Clothing</Typography>
        <Typography>Welcome to STOOR.</Typography>
      </Stack>
      <Divider />
    </>
  );
};

export default Banner;
