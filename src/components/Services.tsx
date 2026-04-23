import { Box, Container, Typography, Grid, Card, CardContent, Stack, Chip } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <WebIcon sx={{ fontSize: 50 }} />,
    title: 'Desarrollo Web',
    description: 'Landing pages, e-commerce y plataformas rápidas, escalables y listas para convertir.',
    tag: 'Web',
  },
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: 50 }} />,
    title: 'Apps Móviles',
    description: 'Experiencias móviles fluidas para Android y iOS, pensadas para uso real diario.',
    tag: 'Mobile',
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 50 }} />,
    title: 'Sistemas a medida',
    description: 'Paneles, automatizaciones y herramientas internas que ordenan procesos del negocio.',
    tag: 'Software',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 44, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const Services = () => {
  return (
    <Box
      id="servicios"
      sx={{
        py: { xs: 9, md: 13 },
        background: '#0b1012',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(106, 184, 255, 0.08) 0%, rgba(8, 11, 13, 0) 36%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={{ xs: 5, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box textAlign="center">
              <Chip
                label="Lo que hacemos"
                color="primary"
                variant="outlined"
                sx={{ mb: 2, borderColor: 'rgba(106, 184, 255, 0.36)' }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.2rem', md: '4.7rem' },
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                Servicios digitales con foco en resultado
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '700px',
                  mx: 'auto',
                  fontWeight: 360,
                }}
              >
                Diseñamos, construimos y acompañamos soluciones tecnológicas que se sienten simples por fuera y sólidas por dentro.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid key={index} size={{ xs: 12, md: 4 }}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  transition={{ duration: 0.58, delay: index * 0.05, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, rotateX: 3, rotateY: -3 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      background: 'rgba(17, 23, 25, 0.88)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(135deg, rgba(106, 184, 255, 0.16), transparent 42%, rgba(246, 198, 91, 0.08))',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover': {
                        borderColor: 'rgba(106, 184, 255, 0.46)',
                        boxShadow: '0 22px 60px rgba(0, 0, 0, 0.28)',
                        '&:before': {
                          opacity: 1,
                        },
                        '& .service-icon': {
                          color: 'secondary.main',
                          transform: 'translateX(6px) rotate(-3deg)',
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'left', position: 'relative' }}>
                      <Chip
                        label={service.tag}
                        size="small"
                        sx={{
                          mb: 3,
                          bgcolor: 'rgba(246, 198, 91, 0.12)',
                          color: 'secondary.light',
                        }}
                      />
                      <Box
                        className="service-icon"
                        sx={{
                          width: 64,
                          height: 64,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          mb: 3,
                          color: 'primary.light',
                          transition: 'color 0.3s ease, transform 0.3s ease',
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{ color: 'text.primary', mb: 2 }}
                      >
                        {service.title}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
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
