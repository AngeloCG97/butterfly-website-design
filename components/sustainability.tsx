import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import ForestIcon from "@mui/icons-material/Forest"
import LocalFloristIcon from "@mui/icons-material/LocalFlorist"
import PublicIcon from "@mui/icons-material/Public"

const pillars = [
  {
    icon: ForestIcon,
    title: "Especies autóctonas",
    text: "Criamos únicamente mariposas nativas de nuestra zona, evitando especies invasoras y protegiendo el equilibrio de los ecosistemas locales.",
  },
  {
    icon: LocalFloristIcon,
    title: "Flora vital",
    text: "Cultivamos y conservamos las plantas hospederas y nectaríferas que las mariposas necesitan, reproduciendo flora nativa esencial para su ciclo de vida.",
  },
  {
    icon: PublicIcon,
    title: "Estándar costarricense",
    text: "Trabajamos bajo los altos estándares de cuidado ambiental que caracterizan a Costa Rica, un país líder mundial en conservación.",
  },
]

export default function Sustainability() {
  return (
    <Box
      id="sostenibilidad"
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "secondary.dark", color: "primary.contrastText" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
            <Typography variant="overline" sx={{ color: "primary.light", fontWeight: 700, letterSpacing: 2 }}>
              Producción sostenible
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: "common.white", mt: 1, mb: 3, fontSize: { xs: "2rem", md: "2.5rem" } }}
            >
              Criar mariposas es sembrar naturaleza
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.82)", mb: 2, lineHeight: 1.8 }}>
              Nuestra producción va mucho más allá de la cría: es una labor de conservación.
              Reproducimos especies de mariposas autóctonas de la zona con técnicas
              responsables que reducen la presión sobre las poblaciones silvestres y ayudan
              a mantener su diversidad genética.
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.82)", mb: 4, lineHeight: 1.8 }}>
              Al cultivar las plantas hospederas y nectaríferas de las que dependen, también
              impulsamos la conservación y reproducción de flora vital para las mariposas y
              para toda la cadena de polinizadores. Cada crisálida que producimos es un
              compromiso con el patrimonio natural de Costa Rica.
            </Typography>

            <Stack spacing={3}>
              {pillars.map((p) => {
                const Icon = p.icon
                return (
                  <Stack key={p.title} direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: 52,
                        height: 52,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "primary.main",
                        color: "common.white",
                      }}
                    >
                      <Icon />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ color: "common.white", fontWeight: 700, mb: 0.5 }}>
                        {p.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                        {p.text}
                      </Typography>
                    </Box>
                  </Stack>
                )
              })}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                aspectRatio: "4 / 5",
                boxShadow: 8,
                backgroundImage: "url(/sostenibilidad.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
