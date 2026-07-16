import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import Chip from "@mui/material/Chip"

const products = [
  {
    name: "Morpho Azul",
    scientific: "Morpho peleides",
    image: "/morpho.png",
    tag: "Más popular",
    description:
      "Nuestra especie estrella. Alas de un azul metálico iridiscente, ideal para mariposarios y exhibiciones.",
  },
  {
    name: "Mariposa Búho",
    scientific: "Caligo eurilochus",
    image: "/buho.png",
    tag: "Tropical",
    description:
      "Reconocible por sus grandes ojos en las alas. Resistente y muy llamativa para colecciones educativas.",
  },
  {
    name: "Monarca",
    scientific: "Danaus plexippus",
    image: "/monarca.png",
    tag: "Clásica",
    description:
      "Colores naranja y negro inconfundibles. Perfecta para liberaciones en eventos y jardines.",
  },
  {
    name: "Crisálidas y pupas",
    scientific: "Varias especies",
    image: "/crisalidas.png",
    tag: "Por mayor",
    description:
      "Pupas vivas listas para exhibición de eclosión. Empaque seguro y envío especializado.",
  },
]

export default function Products() {
  return (
    <Box id="especies" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "secondary.main" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 }, maxWidth: 640, mx: "auto" }}>
          <Typography variant="overline" sx={{ color: "primary.light", fontWeight: 700, letterSpacing: 2 }}>
            Nuestros productos
          </Typography>
          <Typography variant="h3" sx={{ color: "common.white", mt: 1, mb: 2, fontSize: { xs: "2rem", md: "2.5rem" } }}>
            Especies que criamos para ti
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
            Ofrecemos una amplia variedad de mariposas vivas y crisálidas. Consulta
            disponibilidad y precios al por mayor según tu proyecto.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {products.map((p) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={p.name}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  transition: "transform .25s ease, box-shadow .25s ease",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: 10 },
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia component="img" image={p.image} alt={`${p.name} (${p.scientific})`} sx={{ height: 200 }} />
                  <Chip
                    label={p.tag}
                    size="small"
                    color="primary"
                    sx={{ position: "absolute", top: 12, left: 12, fontWeight: 600 }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ color: "secondary.main", fontWeight: 700 }}>
                    {p.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "primary.main", fontStyle: "italic", display: "block", mb: 1 }}>
                    {p.scientific}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                    {p.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button href="#contacto" size="small" color="primary">
                    Consultar precio
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
