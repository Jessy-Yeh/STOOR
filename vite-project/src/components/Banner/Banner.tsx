import { Divider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

const Banner = () => {
  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "2rem 0" }}
      >
        <Typography
          variant="h2"
          m="0 0 1rem 0"
          sx={{ fontSize: "24px", fontWeight: "500" }}
        >
          Our Clothing
        </Typography>
        <Typography
          sx={{
            maxWidth: "700px",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Nullam leo condimentum turpis
          aliquet. Fermentum purus amet vitae sed nam imperdiet. Sit cursus sed
          commodo aliquet ultricies mi volutpat tortor at. A gravida enim ut
          quis et in lectus. Dolor tortor facilisi egestas faucibus nulla. Nibh
          accumsan felis tempor convallis nunc porta integer.
        </Typography>
      </Stack>
      <Divider />
    </>
  );
};

export default Banner;
