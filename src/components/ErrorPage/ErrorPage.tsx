import { Box, Typography } from "@mui/material";
import { Layout } from "../common/Layout";

const ErrorPage = () => {
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
        component="main"
      >
        <Typography>Hey, the page is not found!</Typography>
      </Box>
    </Layout>
  );
};

export default ErrorPage;
