import { createTheme } from "@mui/material/styles"

export default createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(", "),
    fontSize: 18,
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
