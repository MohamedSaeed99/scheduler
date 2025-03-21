import { Route, Routes } from "react-router-dom"
import APIPage from "./components/APIPage/APIPage"
import Dashboard from "./components/Dashboard/Dashboard"
import Header from "./components/Header/Header"
import { useState } from "react";
import NavigationDrawer from "./navigation/NavigationDrawer";
import { Box, CssBaseline } from "@mui/material";

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
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        minHeight: '100vh',
        margin: 0,
        padding: 0
      }}>
        <Header handleOpenNavigationDrawer={handleOpenNavigationDrawer} />
        <Box sx={{ 
          flex: 1,
          margin: 0,
          padding: 0,
          width: '100%'
        }}>
          <NavigationDrawer open={open} handleCloseDrawer={handleCloseNavigationDrawer}/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/api" element={<APIPage />} />
          </Routes>
        </Box>
      </Box>
    </>
  )
}

export default App
