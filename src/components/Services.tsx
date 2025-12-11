import { Box, Container, Typography, Grid, Card, CardContent, Stack } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CloudIcon from '@mui/icons-material/Cloud';
import ApiIcon from '@mui/icons-material/Api';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';

const services = [
  {
    icon: <WebIcon sx={{ fontSize: 50 }} />,
    title: 'Desarrollo Web',
    description: 'Creamos aplicaciones web modernas, responsivas y escalables con las últimas tecnologías.',
  },
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: 50 }} />,
    title: 'Aplicaciones Móviles',
    description: 'Desarrollo de apps nativas y multiplataforma para iOS y Android.',
  },
  {
    icon: <CloudIcon sx={{ fontSize: 50 }} />,
    title: 'Soluciones Cloud',
    description: 'Migración y optimización de infraestructura en la nube (AWS, Azure, GCP).',
  },
  {
    icon: <ApiIcon sx={{ fontSize: 50 }} />,
    title: 'APIs & Microservicios',
    description: 'Diseño e implementación de arquitecturas escalables y APIs RESTful.',
  },
  {
    icon: <StorageIcon sx={{ fontSize: 50 }} />,
    title: 'Base de Datos',
    description: 'Diseño, optimización y administración de bases de datos SQL y NoSQL.',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 50 }} />,
    title: 'Ciberseguridad',
    description: 'Auditorías de seguridad y implementación de mejores prácticas.',
  },
];

const Services = () => {
  return (
    <Box id="services" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Box textAlign="center">
            <Typography variant="h2" gutterBottom>
              Nuestros Servicios
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
              Ofrecemos soluciones tecnológicas integrales para llevar tu negocio al siguiente nivel
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom fontWeight={600}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Services;