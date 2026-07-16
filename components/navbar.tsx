"use client";

import { useState } from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Sostenibilidad", href: "#sostenibilidad" },
  { label: "Especies", href: "#especies" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "rgba(244, 249, 252, 0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 76 } }}>
          <Box
            component="a"
            href="#inicio"
            sx={{ display: "flex", alignItems: "center", mr: "auto" }}
            aria-label="Crisálidas Huetares - Inicio"
          >
            <Image
              src="/logo-crisalidas-sin-fondo.png"
              alt="Logo de Crisálidas Huetares"
              width={200}
              height={200}
              style={{ height: 56, width: "auto", objectFit: "contain" }}
              priority
            />
          </Box>

          {/* Enlaces de escritorio */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            {links.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                sx={{ color: "secondary.main", fontWeight: 500 }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              href="#contacto"
              variant="contained"
              color="primary"
              sx={{ ml: 1 }}
            >
              Cotizar
            </Button>
          </Box>

          {/* Botón de menú móvil */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: "secondary.main",
            }}
            aria-label="Abrir menú"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2 }} role="presentation">
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setOpen(false)} aria-label="Cerrar menú">
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {links.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component="a"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText
                    primary={link.label}
                    slotProps={{ primary: { color: "secondary.main" } }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ mt: 2 }}>
              <Button
                href="#contacto"
                onClick={() => setOpen(false)}
                variant="contained"
                color="primary"
                fullWidth
              >
                Cotizar
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
