import { Box, Container, Typography, Grid, Card, CardContent, Stack } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <WebIcon sx={{ fontSize: 50 }} />,
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas con React, Next.js y las últimas tecnologías.',
    gradient: 'linear-gradient(135deg, #000000ff 0%, #000000ff 100%)',
  },
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: 50 }} />,
    title: 'Apps Móviles',
    description: 'Desarrollo nativo y multiplataforma para iOS y Android.',
    gradient: 'linear-gradient(135deg, #000000ff 0%, #000000ff 100%)',
  },

];

const Services = () => {
  return (
    <Box
      id="servicios"
      sx={{
        py: 12,
        background: '#000000ff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Elementos de fondo */}
      <Box
        sx={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
          top: '-300px',
          left: '-300px',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: '#0000',
          bottom: '-200px',
          right: '-200px',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={8}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box textAlign="center">
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '1rem', md: '5rem' },
                  color: 'white',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  mb: 3,
                }}
              >
                Servicios 
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '700px',
                  mx: 'auto',
                }}
              >
                Soluciones tecnológicas que impulsan el crecimiento de tu negocio
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(30, 41, 59, 0.5)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 4,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                        '& .service-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box
                        className="service-icon"
                        sx={{
                          background: service.gradient,
                          width: 80,
                          height: 80,
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          color: 'white',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{ color: 'white', fontWeight: 700, mb: 2 }}
                      >
                        {service.title}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Services;