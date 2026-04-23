import { Box, Container, Typography, Grid, TextField, Button, Stack, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
    <Box
      id="contacto"
      sx={{
        py: { xs: 9, md: 13 },
        bgcolor: '#0b1012',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Box textAlign="center">
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '2.2rem', md: '4.5rem' }, mb: 2 }}
              >
                Hablemos de tu próximo proyecto
              </Typography>
              <Typography variant="h6" color="text.secondary" fontWeight={360}>
                ¿Tienes un proyecto en mente? Nos encantaría escucharte
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={3.5}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={3}>
                <motion.div {...contactMotion(0)}>
                  <Paper elevation={0} sx={infoCardSx}>
                    <EmailIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="h6" gutterBottom>
                      Email
                    </Typography>
                    <Typography color="text.secondary">
                      elingonsistemas@gmail.com
                    </Typography>
                  </Paper>
                </motion.div>

                <motion.div {...contactMotion(0.1)}>
                  <Paper elevation={0} sx={infoCardSx}>
                    <PhoneIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="h6" gutterBottom>
                      Teléfono
                    </Typography>
                    <Typography color="text.secondary">
                      +595 21 123 4567
                    </Typography>
                  </Paper>
                </motion.div>

                <motion.div {...contactMotion(0.2)}>
                  <Paper elevation={0} sx={infoCardSx}>
                    <LocationOnIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="h6" gutterBottom>
                      Ubicación
                    </Typography>
                    <Typography color="text.secondary">
                      Ciudad del Este, Paraguay
                    </Typography>
                  </Paper>
                </motion.div>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.25 }}
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  background: 'rgba(17, 23, 25, 0.92)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                }}
              >
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
                      component={motion.button}
                      whileHover={{ y: -2, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        py: 1.5,
                        bgcolor: 'secondary.main',
                        color: '#151006',
                        '&:hover': { bgcolor: 'secondary.light' },
                      }}
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

const infoCardSx = {
  p: 3,
  textAlign: 'left',
  background: 'rgba(17, 23, 25, 0.82)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'border-color 0.25s ease, background 0.25s ease',
  '&:hover': {
    borderColor: 'rgba(106, 184, 255, 0.42)',
    background: 'rgba(17, 23, 25, 0.98)',
  },
};

const contactMotion = (delay: number) => ({
  initial: { opacity: 0, x: -28 },
  whileInView: { opacity: 1, x: 0 },
  whileHover: { x: 6 },
  transition: { duration: 0.55, delay, ease: 'easeOut' as const },
  viewport: { once: true, amount: 0.35 },
});

export default Contact;
