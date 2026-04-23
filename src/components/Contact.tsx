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

    const message = encodeURIComponent(
      [
        'Hola ElinGon, te escribo desde la web.',
        '',
        `Nombre: ${formData.name}`,
        `Email: ${formData.email}`,
        `Telefono: ${formData.phone || 'No informado'}`,
        '',
        'Mensaje:',
        formData.message,
      ].join('\n')
    );

    window.open(`https://wa.me/595994804891?text=${message}`, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Box
      id="contacto"
      sx={{
        minHeight: { md: '100svh' },
        py: { xs: 7, sm: 8, md: 8 },
        bgcolor: '#10151a',
        borderTop: '1px solid rgba(202, 205, 208, 0.1)',
        scrollMarginTop: { xs: 64, md: 72 },
        display: { md: 'flex' },
        alignItems: { md: 'center' },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ px: { xs: 2.5, sm: 4, lg: 7, xl: 9 } }}
      >
        <Stack spacing={{ xs: 4, md: 5, xl: 7 }}>
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
                sx={{
                  fontSize: { xs: '2.15rem', md: '4rem', lg: '4.6rem', xl: '5.25rem' },
                  mb: 2,
                }}
              >
                Hablemos de tu próximo proyecto
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                fontWeight={360}
                sx={{ fontSize: { xl: '1.45rem' } }}
              >
                ¿Tienes un proyecto en mente? Nos encantaría escucharte
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={3.5} alignItems="stretch">
            <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex' }}>
              <Stack spacing={3} sx={{ width: '100%', height: '100%' }}>
                <motion.div {...contactMotion(0)} style={{ flex: 1, display: 'flex' }}>
                  <Paper elevation={0} sx={infoCardSx}>
                    <EmailIcon color="primary" sx={{ fontSize: { xs: 40, xl: 46 }, mb: 1 }} />
                    <Typography variant="h6" gutterBottom>
                      Email
                    </Typography>
                    <Typography color="text.secondary">
                      elingonsistemas@gmail.com
                    </Typography>
                  </Paper>
                </motion.div>

                <motion.div {...contactMotion(0.1)} style={{ flex: 1, display: 'flex' }}>
                  <Paper elevation={0} sx={infoCardSx}>
                    <PhoneIcon color="primary" sx={{ fontSize: { xs: 40, xl: 46 }, mb: 1 }} />
                    <Typography variant="h6" gutterBottom>
                      Teléfono
                    </Typography>
                    <Typography color="text.secondary">
                      +595 994 804 891
                    </Typography>
                  </Paper>
                </motion.div>

                <motion.div {...contactMotion(0.2)} style={{ flex: 1, display: 'flex' }}>
                  <Paper elevation={0} sx={infoCardSx}>
                    <LocationOnIcon color="primary" sx={{ fontSize: { xs: 40, xl: 46 }, mb: 1 }} />
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

            <Grid size={{ xs: 12, md: 8 }} sx={{ display: 'flex' }}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.25 }}
                elevation={0}
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  p: { xs: 3, md: 4, lg: 5, xl: 6 },
                  background: 'rgba(23, 28, 33, 0.94)',
                  border: '1px solid rgba(202, 205, 208, 0.12)',
                }}
              >
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', width: '100%' }}>
                  <Stack spacing={3} sx={{ width: '100%', justifyContent: 'center' }}>
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
                      rows={7}
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
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

const infoCardSx = {
  p: { xs: 3, lg: 3.5, xl: 4.5 },
  textAlign: 'left',
  width: '100%',
  minHeight: { xs: 148, md: 'auto' },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: 'rgba(23, 28, 33, 0.9)',
  border: '1px solid rgba(202, 205, 208, 0.12)',
  transition: 'border-color 0.25s ease, background 0.25s ease',
  '&:hover': {
    borderColor: 'rgba(106, 184, 255, 0.42)',
    background: 'rgba(29, 35, 41, 0.98)',
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
