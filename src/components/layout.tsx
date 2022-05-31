import * as React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Divider from "@mui/material/Divider"
import theme from "../theme"
import { Link as GatsbyLink } from "gatsby"
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded"

interface LayoutProps {
  children: React.ReactNode
  title: string
  location: Location
}

const Layout = ({ location, title, children }: LayoutProps) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {!isRootPath && (
        <Box sx={{ px: 4, py: 2 }}>
          <Link component={GatsbyLink} to="/">
            {title}
          </Link>
        </Box>
      )}

      <Container
        data-is-root-path={isRootPath}
        maxWidth={false}
        sx={{ mt: 10, maxWidth: 700 }}
      >
        <Box component="main" sx={{ mb: 8 }}>
          {children}
        </Box>

        <Box component="footer" sx={{ mb: 8 }}>
          <Divider sx={{ mb: 2 }} />
          <Typography fontSize={16}>
            © {new Date().getFullYear()}{" "}
            <Link href="https://www.opensesame.com">OpenSesame</Link>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
