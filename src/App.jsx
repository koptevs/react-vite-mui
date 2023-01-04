import { CssBaseline, ThemeProvider } from "@mui/material"
import { Box } from "@mui/system"
import { IconButton } from "@mui/material"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import Typography from "@mui/material/Typography"

import { ColorModeContext, useMode, colorTokens } from "./theme"

export default function App() {
    const [theme, colorMode] = useMode()
    const colors = colorTokens(theme.palette.mode)
    return (
        <>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="app">
                        <main className="content">
                            <IconButton onClick={colorMode.toggleColorMode}>
                                {theme.palette.mode === "dark" ? (
                                    <DarkModeOutlinedIcon />
                                ) : (
                                    <LightModeOutlinedIcon />
                                )}
                            </IconButton>
                            <Typography variant="h1">
                                Heading 1 - color comes from the theme settings
                                for headings
                            </Typography>
                            <Box
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    color: colors.greenAccent[300],
                                }}
                            >
                                Box - inline styles with sx property - color
                                imported from colorTokens palette inside
                                theme.js file
                            </Box>
                        </main>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    )
}
