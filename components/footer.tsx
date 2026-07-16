import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Image from "next/image";

const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Especies", href: "#especies" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "secondary.dark",
        color: "rgba(255,255,255,0.8)",
        pt: 6,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                display: "inline-flex",
                p: 1.5,
                mb: 2,
                pt:0
              }}
            >
              <Image
                src="/logo-crisalidas.png"
                alt="Logo de Crisálidas Huetares"
                width={160}
                height={64}
                style={{ height: 56, width: "auto", objectFit: "contain" }}
              />
            </Box>
            <Typography variant="body2" sx={{ maxWidth: 360, lineHeight: 1.7 }}>
              Cría sostenible y venta de mariposas, crisálidas y pupas
              tropicales desde Costa Rica para el mundo.
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography
              variant="subtitle2"
              sx={{ color: "common.white", mb: 2, fontWeight: 700 }}
            >
              Navegación
            </Typography>
            <Stack spacing={1}>
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  underline="hover"
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  {n.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 4 }}>
            <Typography
              variant="subtitle2"
              sx={{ color: "common.white", mb: 2, fontWeight: 700 }}
            >
              Contacto
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">+506 8888-8033</Typography>
              <Typography variant="body2">ventas@crisalidascr.com</Typography>
              <Typography variant="body2">Región Huetar, Costa Rica</Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 5,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.15)",
            textAlign: "center",
          }}
        >
          <Typography variant="caption">
            © {new Date().getFullYear()} Crisálidas Huetares. Todos los derechos
            reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
