import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import Button from "@mui/material/Button"
import DeleteIcon from "@mui/icons-material/Delete"
import SendIcon from "@mui/icons-material/Send"
import Stack from "@mui/material/Stack"

export default function App() {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    React with Vite & MUI
                </Typography>

                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Stack>
            </Box>
        </Container>
    )
}
