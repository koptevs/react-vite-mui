import React from "react"

import { useTheme, IconButton, Box, InputBase } from "@mui/material"
// TODO - optimize imports
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import SearchIcon from "@mui/icons-material/Search"

import { ColorModeContext, colorTokens } from "../../theme"

const Topbar = () => {
    const theme = useTheme()
    const colors = colorTokens(theme.palette.mode)
    const colorMode = React.useContext(ColorModeContext)

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
                // bgcolor: colors.blueAccent[800],
                bgcolor: theme.palette.topbarBg.main,
            }}
            // display="flex"
            // justifyContent="space-between"
            // alignItems="center"
            // p={2}
            // bgcolor={colors.blueAccent[800]}
        >
            <Box
                display="flex"
                bgcolor={colors.primary[400]}
                borderRadius="3px"
            >
                <InputBase sx={{ ml: 2, flex: 1 }}></InputBase>
                <IconButton sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>

            <Box display="flex">
                <IconButton
                    onClick={colorMode.toggleColorMode}
                    sx={{ color: colors.redAccent[400] }}
                >
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar
