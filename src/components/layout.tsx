import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"

const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(", "),
  },
  palette: {
    primary: {
      main: "#e87722",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
  },
})

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

      <Container data-is-root-path={isRootPath} maxWidth="sm" sx={{ mt: 10 }}>
        <main>{children}</main>

        <footer>
          <Typography>
            © {new Date().getFullYear()}{" "}
            <Link href="https://www.opensesame.com">OpenSesame</Link>
          </Typography>
        </footer>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
