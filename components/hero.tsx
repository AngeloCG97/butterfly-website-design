import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Chip from "@mui/material/Chip"

export default function Hero() {
  return (
    <Box
      id="inicio"
      sx={{
        position: "relative",
        minHeight: { xs: "88vh", md: "92vh" },
        display: "flex",
        alignItems: "center",
        color: "common.white",
        overflow: "hidden",
      }}
    >
      {/* Imagen de fondo */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/hero-mariposas.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Velo de color para legibilidad */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(100deg, rgba(11,34,56,0.86) 0%, rgba(14,92,138,0.66) 55%, rgba(30,143,200,0.30) 100%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", py: { xs: 8, md: 0 } }}>
        <Box sx={{ maxWidth: 680 }}>
          <Chip
            label="Empresa costarricense · Cría sostenible"
            sx={{
              mb: 3,
              bgcolor: "rgba(255,255,255,0.16)",
              color: "common.white",
              backdropFilter: "blur(4px)",
              fontWeight: 500,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.25rem", md: "4rem" },
              lineHeight: 1.05,
              mb: 3,
              textWrap: "balance",
            }}
          >
            Mariposas vivas criadas en el corazón de Costa Rica
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              color: "rgba(255,255,255,0.9)",
              mb: 4,
              maxWidth: 560,
              lineHeight: 1.6,
            }}
          >
            En Crisálidas Huetares criamos y comercializamos mariposas, crisálidas
            y pupas de especies tropicales con los más altos estándares de calidad
            y respeto por la naturaleza.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button href="#especies" variant="contained" color="primary" size="large">
              Ver nuestras especies
            </Button>
            <Button
              href="#contacto"
              variant="outlined"
              size="large"
              sx={{
                color: "common.white",
                borderColor: "rgba(255,255,255,0.6)",
                "&:hover": { borderColor: "common.white", bgcolor: "rgba(255,255,255,0.08)" },
              }}
            >
              Solicitar cotización
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
