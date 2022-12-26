import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const Authentication = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to left, #B20600, #FF5F00)",
      }}
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        maxWidth="md"
        sx={{
          background: "white",
          borderRadius: 2,
          minHeight: "400px",
        }}
      >
        <Outlet />
      </Container>
    </Box>
  );
};

export default Authentication;
