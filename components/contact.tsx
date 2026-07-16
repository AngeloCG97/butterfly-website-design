"use client"

import { useState } from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Alert from "@mui/material/Alert"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import PlaceIcon from "@mui/icons-material/Place"

const contactInfo = [
  { icon: PhoneIcon, label: "Teléfono", value: "+506 7180-7494" },
  { icon: EmailIcon, label: "Correo", value: "agricolahuetares@gmail.com" },
  { icon: PlaceIcon, label: "Ubicación", value: "Región Huetar, Costa Rica" },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      species: String(formData.get("species") ?? ""),
      message: String(formData.get("message") ?? ""),
      _subject: "Nueva solicitud de contacto desde Crisálidas Huetares",
      _captcha: "false",
      _template: "table",
    }

    setSending(true)
    setError(false)
    setSent(false)

    try {
      const response = await fetch("https://formsubmit.co/ajax/agricolahuetares@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(payload).toString(),
      })

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario")
      }

      setSent(true)
      form.reset()
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <Box id="contacto" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}>
              Contacto
            </Typography>
            <Typography variant="h3" sx={{ color: "secondary.main", mt: 1, mb: 3, fontSize: { xs: "2rem", md: "2.5rem" } }}>
              Solicita tu cotización
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.7 }}>
              Cuéntanos sobre tu proyecto y te enviaremos disponibilidad y precios.
              Atendemos pedidos nacionales y de exportación.
            </Typography>

            <Stack spacing={3}>
              {contactInfo.map((c) => {
                const Icon = c.icon
                return (
                  <Stack key={c.label} direction="row" spacing={2} sx={{ alignItems: "center" }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        bgcolor: "primary.main",
                        color: "common.white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>
                        {c.label}
                      </Typography>
                      <Typography sx={{ color: "secondary.main", fontWeight: 600 }}>{c.value}</Typography>
                    </Box>
                  </Stack>
                )
              })}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, bgcolor: "background.paper", boxShadow: 4 }}
            >
              {sent && (
                <Alert severity="success" sx={{ mb: 3 }} onClose={() => setSent(false)}>
                  ¡Gracias! Hemos recibido tu solicitud y te contactaremos pronto.
                </Alert>
              )}
              {error && (
                <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError(false)}>
                  No se pudo enviar el mensaje en este momento. Intenta de nuevo más tarde.
                </Alert>
              )}
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField label="Nombre completo" name="name" fullWidth required />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField label="Correo electrónico" name="email" type="email" fullWidth required />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField label="Teléfono" name="phone" fullWidth />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField label="Especie de interés" name="species" fullWidth />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField label="Mensaje" name="message" fullWidth required multiline rows={4} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button type="submit" variant="contained" color="primary" size="large" fullWidth disabled={sending}>
                    {sending ? "Enviando..." : "Enviar solicitud"}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
