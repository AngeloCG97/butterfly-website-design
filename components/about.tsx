import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"

const stats = [
  { value: "+10", label: "Especies tropicales" },
  { value: "+2", label: "Años de experiencia" },
  { value: "100%", label: "Cría sostenible" },
  { value: "🇨🇷", label: "Hecho en Costa Rica" },
]

export default function About() {
  return (
    <Box id="nosotros" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                aspectRatio: "4 / 3",
                boxShadow: 6,
                backgroundImage: "url(/mariposario.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}>
              Quiénes somos
            </Typography>
            <Typography variant="h3" sx={{ color: "secondary.main", mt: 1, mb: 3, fontSize: { xs: "2rem", md: "2.5rem" } }}>
              Pasión por las mariposas, compromiso con la naturaleza
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 2, lineHeight: 1.7 }}>
              Crisálidas Huetares es una empresa familiar costarricense dedicada a la
              cría responsable de mariposas. Trabajamos de la mano con la biodiversidad
              de nuestro país para ofrecer ejemplares sanos y de la más alta calidad.
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.7 }}>
              Abastecemos a mariposarios, jardines botánicos, eventos y proyectos
              educativos, siempre bajo prácticas sostenibles que protegen las especies
              y su hábitat natural.
            </Typography>

            <Grid container spacing={2}>
              {stats.map((s) => (
                <Grid size={{ xs: 6 }} key={s.label}>
                  <Stack spacing={0.5}>
                    <Typography variant="h4" sx={{ color: "primary.main", fontFamily: "var(--font-serif)" }}>
                      {s.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "secondary.main", fontWeight: 500 }}>
                      {s.label}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
