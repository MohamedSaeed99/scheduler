import { Route, Routes } from "react-router-dom"
import APIPage from "./components/APIPage/APIPage"
import Dashboard from "./components/Dashboard/Dashboard"
import Header from "./components/Header/Header"
import { useState } from "react";
import NavigationDrawer from "./navigation/NavigationDrawer";
import { Box } from "@mui/material";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenNavigationDrawer = () => {
    setOpen(true)
  }
  const handleCloseNavigationDrawer = () => {
    setOpen(false)
  }

  return (
    <>
      <Header handleOpenNavigationDrawer={handleOpenNavigationDrawer} />
      <Box>
        <NavigationDrawer open={open} handleCloseDrawer={handleCloseNavigationDrawer}/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/api" element={<APIPage />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
