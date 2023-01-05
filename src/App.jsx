import { CssBaseline, ThemeProvider } from "@mui/material"
import { Box } from "@mui/system"

import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import { ColorModeContext, useMode, colorTokens } from "./theme"
import { Topbar, Sidebar } from "./layouts"
import { About, Contacts } from "./pages"

export default function App() {
    const [theme, colorMode] = useMode()
    const colors = colorTokens(theme.palette.mode)

    console.log(theme.palette)

    return (
        <>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="app">
                        <main className="content">
                            <Topbar />
                            <Sidebar />
                            <About />
                            <Contacts />
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

                            <Button variant="contained" color="topbarBg">
                                Contained
                            </Button>
                        </main>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    )
}
