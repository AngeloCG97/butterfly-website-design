"use client"

import { createTheme } from "@mui/material/styles"

/**
 * Paleta basada en el logo de Crisálidas Huetares.
 *
 * - Primario:  azul morpho brillante de las alas de la mariposa.
 * - Secundario: azul marino del texto "CRISÁLIDAS".
 * - Fondo:      celeste claro del lienzo del logo.
 *
 * Cada color define sus variantes light / main / dark.
 */
const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      light: "#5BB6E3", // variante clara del azul morpho
      main: "#1E8FC8", // azul morpho (alas de la mariposa)
      dark: "#0E5C8A", // variante oscura del azul morpho
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#3C5A7C", // variante clara del azul marino
      main: "#163A5F", // azul marino (texto del logo)
      dark: "#0B2238", // variante oscura del azul marino
      contrastText: "#ffffff",
    },
    background: {
      default: "#F4F9FC", // celeste muy claro
      paper: "#ffffff",
    },
    text: {
      primary: "#0B2238",
      secondary: "#3C5A7C",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "var(--font-sans), system-ui, sans-serif",
    h1: { fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 700 },
    h2: { fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 700 },
    h3: { fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 700 },
    h4: { fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 24, paddingBlock: 10 },
      },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0, color: "transparent" },
    },
  },
})

export default theme
