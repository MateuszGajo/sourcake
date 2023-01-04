import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { UserIcon } from "./Authentication.styled";

const BACKGROUND_SHIFT_VH = 30;

const Authentication = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <Box
        sx={{
          background: (theme) =>
            `linear-gradient(to left, ${theme.palette.primary.main}, 20%, ${theme.palette.primary.light})`,
          borderRadius: "50%",
          transform: `translateX(-${BACKGROUND_SHIFT_VH}vh)`,
        }}
        height="130vh"
        width="130vh"
      ></Box>
      <Container
        maxWidth="xs"
        sx={{
          transform: `translateX(-${BACKGROUND_SHIFT_VH / 2}vh)`,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box>
          <Box display="flex" justifyContent="center" marginBottom={1}>
            <Box
              width="60px"
              height="60px"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                background: (theme) => theme.palette.primary.main,
              }}
            >
              <UserIcon />
            </Box>
          </Box>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};

export default Authentication;
