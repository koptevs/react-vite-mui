import * as React from "react"

import { Link as RouterLink } from "react-router-dom"
import Link from "@mui/material/Link"

import AppBar from "@mui/material/AppBar"
import { useTheme } from "@mui/material"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import { ColorModeContext, colorTokens } from "../../theme"
import ThemeLink from "../../components/ThemeLink"

const drawerWidth = 240
const navItems = [
    { id: 1, name: "HOME", href: "/" },
    { id: 2, name: "ABOUT", href: "/about" },
    { id: 3, name: "CONTACTS", href: "/contacts" },
]

function Topbar(props) {
    const { window } = props
    const [mobileOpen, setMobileOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const theme = useTheme()
    const colors = colorTokens(theme.palette.mode)
    const colorMode = React.useContext(ColorModeContext)

    const topbarBackgroundColor = theme.palette.topbarBg.main
    const topbarTextColor = colors.redAccent[100]
    const drawerBackgroundColor = topbarBackgroundColor
    const drawerTextColor = topbarTextColor

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: "center", color: drawerTextColor }}
        >
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton
                            sx={{
                                textAlign: "center",
                                color: "inherit",
                                "&:hover": {
                                    backgroundColor: "yellow",
                                    color: "green",
                                },
                            }}
                        >
                            <ThemeLink to={item.href}>
                                <ListItemText primary={item.name} sx={{}} />
                            </ThemeLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <IconButton
                onClick={colorMode.toggleColorMode}
                sx={{ ml: 2, color: "inherit" }}
            >
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LightModeOutlinedIcon />
                )}
            </IconButton>
        </Box>
    )

    const container =
        window !== undefined ? () => window().document.body : undefined

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar component="nav" sx={{ bgcolor: topbarBackgroundColor }}>
                <Container maxWidth={theme.settings.containerWidth}>
                    <Toolbar sx={{ color: topbarTextColor }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link component={RouterLink} to="/" sx={{ mr: "auto" }}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "none", sm: "block" },
                                }}
                            >
                                MUI
                            </Typography>
                        </Link>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            {navItems.map((item) => (
                                <ThemeLink to={item.href} key={item.id}>
                                    {item.name}
                                </ThemeLink>
                            ))}
                            <IconButton
                                onClick={colorMode.toggleColorMode}
                                sx={{ ml: 2, color: "inherit" }}
                            >
                                {theme.palette.mode === "dark" ? (
                                    <LightModeOutlinedIcon />
                                ) : (
                                    <DarkModeOutlinedIcon />
                                )}
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                            bgcolor: drawerBackgroundColor,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 1 }}>
                <Toolbar />
            </Box>
        </Box>
    )
}

export default Topbar
