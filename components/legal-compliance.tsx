import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GavelIcon from "@mui/icons-material/Gavel";
import BadgeIcon from "@mui/icons-material/Badge";

const legalItems = [
  {
    title: "Registro institucional",
    text: "CVO 403392-01 de Senasa - MAG",
    icon: VerifiedUserIcon,
  },
  {
    title: "Resolución vigente",
    text: "Número de resolución SINAC-ACAHN-SS-VS-026-2025",
    icon: GavelIcon,
  },
  {
    title: "Certificado PYMPA",
    text: "Estamos certificados como PYMPA desde 2025",
    icon: BadgeIcon,
  },
  {
    title: "Sello PYME",
    text: "Autorización institucional como PYME y respaldo de cumplimiento legal en Costa Rica.",
    icon: BadgeIcon,
    image: "/pyme-sello.png",
  },
];

export default function LegalCompliance() {
  return (
    <Box
      id="cumplimiento-legal"
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          sx={{ alignItems: "center" }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                width: { xs: 260, md: 320 },
                height: { xs: 260, md: 320 },
                borderRadius: "50%",
                bgcolor: "background.default",
                border: "10px solid",
                borderColor: "primary.main",
                boxShadow: "0 20px 60px rgba(11, 34, 56, 0.16)",
                p: 3,
                overflow: "hidden",
                backgroundImage:
                  "radial-gradient(circle at top left, rgba(91, 182, 227, 0.2), transparent 62%)",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src="/logo-crisalidas-sin-fondo.png"
                alt="Sello institucional de PYMPA autorizada en Costa Rica"
                sx={{
                  width: "88%",
                  height: "88%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 8px 20px rgba(11, 34, 56, 0.22))",
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="overline"
              sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}
            >
              Cumplimiento legal
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "secondary.main",
                mt: 1,
                mb: 3,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Una empresa autorizada para impulsar esta actividad con respaldo
              regulatorio
            </Typography>
            <Typography
              sx={{ color: "text.secondary", mb: 2, lineHeight: 1.8 }}
            >
              Crisálidas Huetares opera como una PYMPA autorizada en Costa Rica,
              lo que demuestra que la empresa cumple con las regulaciones
              exigidas por la normativa costarricense para desarrollar esta
              actividad económica de forma responsable y legal.
            </Typography>
            <Typography
              sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}
            >
              Este respaldo institucional ratifica el compromiso de la empresa
              con la naturaleza, la conservación de la biodiversidad y el
              desarrollo sostenible de la actividad.
            </Typography>

            <Stack spacing={2}>
              {legalItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Box
                    key={item.title}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.5,
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "background.default",
                      border: "1px solid",
                      borderColor: "primary.light",
                    }}
                  >
                    {!item.image ? (
                      <Box
                        sx={{
                          flexShrink: 0,
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "primary.main",
                          color: "common.white",
                        }}
                      >
                        <Icon fontSize="small" />
                      </Box>
                    ) : (
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.title}
                        sx={{
                          width: 72,
                          height: 72,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      />
                    )}
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "secondary.main", fontWeight: 700 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", lineHeight: 1.6 }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
