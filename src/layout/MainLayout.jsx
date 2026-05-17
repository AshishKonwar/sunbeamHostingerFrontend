import { Box, Toolbar } from "@mui/material";
import Header from "../components/common/Header";
 
export default function MainLayout({ children }) {

  return (
    <Box sx={{ display: "flex", width: "100%", height: "100vh" }}>
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: "100%",
            overflow: "auto",
          }}
        >
          <Box sx={{ height: 80 }} />
          {children}
        </Box>
      </Box>
    </Box>
  );
}

