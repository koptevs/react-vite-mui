import React from "react"

import { useTheme, IconButton, Box, InputBase } from "@mui/material"
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
    const colorModeCtx = React.useContext(ColorModeContext)

    console.log(colors)
    return (
        <>
            <div>Topbar</div>
            <IconButton onClick={colorModeCtx.toggleColorMode}>
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
                <SettingsOutlinedIcon color="secondary" />
            </IconButton>
            <IconButton>
                <PersonOutlinedIcon />
            </IconButton>
            <IconButton>
                <SearchIcon />
            </IconButton>
        </>
    )
}

export default Topbar
