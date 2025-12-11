import { Box, Container, Typography, Grid, Stack, Paper } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';

const stats = [
  { icon: <WorkIcon sx={{ fontSize: 40 }} />, number: '150+', label: 'Proyectos Completados' },
  { icon: <GroupsIcon sx={{ fontSize: 40 }} />, number: '50+', label: 'Clientes Satisfechos' },
  { icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />, number: '10+', label: 'Años de Experiencia' },
];

const About = () => {
  return (
    <Box id="about" sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid >
            <Stack spacing={3}>
              <Typography variant="h2" gutterBottom>
                Sobre Nosotros
              </Typography>
              <Typography variant="body1" color="text.secondary" fontSize={18}>
                Somos un equipo apasionado de desarrolladores, diseñadores y estrategas 
                digitales comprometidos con la excelencia tecnológica.
              </Typography>
              <Typography variant="body1" color="text.secondary" fontSize={18}>
                Desde 2014, hemos ayudado a empresas de todos los tamaños a transformar 
                sus ideas en soluciones digitales exitosas. Nuestra experiencia abarca 
                desde startups hasta grandes corporaciones.
              </Typography>
              <Typography variant="body1" color="text.secondary" fontSize={18}>
                Creemos en la innovación constante, la calidad del código y en construir 
                relaciones duraderas con nuestros clientes.
              </Typography>
            </Stack>
          </Grid>

          <Grid  >
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid  key={index}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      transition: 'transform 0.3s',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 1 }}>
                      {stat.icon}
                    </Box>
                    <Typography variant="h3" color="primary" fontWeight={700}>
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;