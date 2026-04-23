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
        minHeight: { md: '100svh' },
        py: { xs: 7, sm: 8, md: 8 },
        background: '#10151a',
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: { xs: 64, md: 72 },
        display: { md: 'flex' },
        alignItems: { md: 'center' },
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

      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 1,
          px: { xs: 2.5, sm: 4, lg: 7, xl: 9 },
        }}
      >
        <Stack spacing={{ xs: 4, md: 5, xl: 7 }}>
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
                sx={{
                  mb: 2,
                  borderColor: 'rgba(160, 170, 180, 0.32)',
                  color: 'grey.200',
                  width: 'fit-content',
                  maxWidth: '100%',
                  mx: 'auto',
                  height: { xs: 28, md: 32 },
                  fontSize: { xs: '0.72rem', md: '0.82rem' },
                  px: { xs: 0.5, md: 1 },
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: '2.15rem',
                    md: '4rem',
                    lg: '4.7rem',
                    xl: '5.35rem',
                  },
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
                  maxWidth: { xs: '700px', xl: '860px' },
                  mx: 'auto',
                  fontWeight: 360,
                  fontSize: { xs: '1rem', md: '1.25rem', xl: '1.45rem' },
                }}
              >
                Diseñamos, construimos y acompañamos soluciones tecnológicas que se sienten simples por fuera y sólidas por dentro.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid key={index} size={{ xs: 12, md: 4 }} sx={{ display: 'flex' }}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  transition={{ duration: 0.58, delay: index * 0.05, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, rotateX: 3, rotateY: -3 }}
                  style={{ display: 'flex', width: '100%' }}
                >
                  <Card
                    sx={{
                      width: '100%',
                      height: '100%',
                      minHeight: { xs: 280, md: 340, lg: 380, xl: 430 },
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      background: 'rgba(23, 28, 33, 0.92)',
                      border: '1px solid rgba(202, 205, 208, 0.12)',
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
                    <CardContent
                      sx={{
                        p: { xs: 3, md: 4, lg: 5, xl: 6 },
                        textAlign: 'left',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                      }}
                    >
                      <Chip
                        label={service.tag}
                        size="small"
                        sx={{
                          alignSelf: 'flex-start',
                          width: 'fit-content',
                          maxWidth: '100%',
                          mb: 3,
                          bgcolor: 'rgba(115, 123, 132, 0.22)',
                          color: 'grey.100',
                          fontWeight: 700,
                          '& .MuiChip-label': {
                            px: 1,
                          },
                        }}
                      />
                      <Box
                        className="service-icon"
                        sx={{
                          width: { xs: 64, lg: 72, xl: 84 },
                          height: { xs: 64, lg: 72, xl: 84 },
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
                        sx={{
                          color: 'text.primary',
                          mb: 2,
                          mt: 'auto',
                          fontSize: { lg: '1.7rem', xl: '2rem' },
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.7,
                          minHeight: { md: 82, xl: 96 },
                          fontSize: { lg: '1.05rem', xl: '1.22rem' },
                        }}
                      >
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
