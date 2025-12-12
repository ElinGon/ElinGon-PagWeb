import { Box, Container, Typography, Grid, TextField, Button, Stack, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Box id="contacto" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Box textAlign="center">
            <Typography variant="h2" gutterBottom>
              Contáctanos
            </Typography>
            <Typography variant="h6" color="text.secondary">
              ¿Tienes un proyecto en mente? Nos encantaría escucharte
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid>
              <Stack spacing={3}>
                <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                  <EmailIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="h6" gutterBottom>
                    Email
                  </Typography>
                  <Typography color="text.secondary">
                    info@techsolutions.com
                  </Typography>
                </Paper>

                <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                  <PhoneIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="h6" gutterBottom>
                    Teléfono
                  </Typography>
                  <Typography color="text.secondary">
                    +595 21 123 4567
                  </Typography>
                </Paper>

                <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                  <LocationOnIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="h6" gutterBottom>
                    Ubicación
                  </Typography>
                  <Typography color="text.secondary">
                    Ciudad del Este, Paraguay
                  </Typography>
                </Paper>
              </Stack>
            </Grid>

            <Grid>
              <Paper elevation={3} sx={{ p: 4 }}>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Nombre"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />

                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />

                    <TextField
                      fullWidth
                      label="Teléfono"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                    />

                    <TextField
                      fullWidth
                      label="Mensaje"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{ py: 1.5 }}
                    >
                      Enviar Mensaje
                    </Button>
                  </Stack>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;