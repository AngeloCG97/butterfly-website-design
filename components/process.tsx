import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import EggAltIcon from "@mui/icons-material/EggAlt"
import SpaIcon from "@mui/icons-material/Spa"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import VerifiedIcon from "@mui/icons-material/Verified"

const steps = [
  {
    icon: EggAltIcon,
    title: "Cría controlada",
    text: "Huevos y larvas se desarrollan en ambientes monitoreados que garantizan ejemplares sanos.",
  },
  {
    icon: SpaIcon,
    title: "Alimentación natural",
    text: "Cultivamos las plantas hospederas de cada especie para una nutrición óptima y libre de químicos.",
  },
  {
    icon: VerifiedIcon,
    title: "Control de calidad",
    text: "Cada crisálida es inspeccionada y clasificada antes de su entrega o exportación.",
  },
  {
    icon: LocalShippingIcon,
    title: "Envío especializado",
    text: "Empaque seguro y logística adecuada para que lleguen en perfecto estado a su destino.",
  },
]

export default function Process() {
  return (
    <Box id="proceso" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 }, maxWidth: 640, mx: "auto" }}>
          <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}>
            Nuestro proceso
          </Typography>
          <Typography variant="h3" sx={{ color: "secondary.main", mt: 1, mb: 2, fontSize: { xs: "2rem", md: "2.5rem" } }}>
            Del huevo a la mariposa
          </Typography>
          <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
            Un proceso cuidadoso y sostenible que asegura calidad en cada etapa.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={step.title}>
                <Box
                  sx={{
                    height: "100%",
                    p: 4,
                    borderRadius: 2,
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                    textAlign: "center",
                  }}
                >
                  <Stack spacing={2} sx={{ alignItems: "center" }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "primary.light",
                        color: "secondary.dark",
                      }}
                    >
                      <Icon fontSize="large" />
                    </Box>
                    <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 700 }}>
                      Paso {i + 1}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "secondary.main", fontWeight: 700 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                      {step.text}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}
