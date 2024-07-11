import { Box, Typography } from "@mui/material";
import { Layout } from "../common/Layout";

const Jeans = () => {
  return (
    <Layout>
      <Box
        sx={{
          paddingLeft: { xs: "16px", md: "24px" },
          paddingRight: { xs: "16px", md: "24px" },
          maxWidth: "1800px",
          marginTop: "97.1px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: { xs: "16px", md: "24px" },
        }}
      >
        <Typography>Jeans</Typography>
      </Box>
    </Layout>
  );
};

export default Jeans;
