import { Box, Container, Typography, Grid, Stack, Paper } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import { motion } from 'framer-motion';

const stats = [
  { icon: <WorkIcon sx={{ fontSize: 40 }} />, number: '150+', label: 'Proyectos Completados' },
  { icon: <GroupsIcon sx={{ fontSize: 40 }} />, number: '50+', label: 'Clientes Satisfechos' },
  { icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />, number: '10+', label: 'Años de Experiencia' },
];

const About = () => {
  return (
    <Box id="nosotros" sx={{ py: { xs: 9, md: 13 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack
              component={motion.div}
              initial={{ opacity: 0, x: -34 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              spacing={3}
            >
              <Typography
                variant="overline"
                sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: '0.16em' }}
              >
                El equipo
              </Typography>
              <Typography
                variant="h2"
                sx={{ color: 'text.primary', fontSize: { xs: '2.2rem', md: '4.2rem' } }}
              >
                Cercanía de estudio, calidad de software serio
              </Typography>
              <Typography variant="body1" color="text.secondary" fontSize={18} lineHeight={1.8}>
                Somos un equipo apasionado de desarrolladores, diseñadores y estrategas
                digitales comprometidos con la excelencia tecnológica.
              </Typography>
              <Typography variant="body1" color="text.secondary" fontSize={18} lineHeight={1.8}>
                Desde 2014, hemos ayudado a empresas de todos los tamaños a transformar
                sus ideas en soluciones digitales exitosas. Nuestra experiencia abarca
                desde startups hasta grandes corporaciones.
              </Typography>
              <Typography variant="body1" color="text.secondary" fontSize={18} lineHeight={1.8}>
                Creemos en la innovación constante, la calidad del código y en construir
                relaciones duraderas con nuestros clientes.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2.5}>
              {stats.map((stat, index) => (
                <Grid key={index} size={{ xs: 12, sm: 4, md: 12 }}>
                  <Paper
                    component={motion.div}
                    initial={{ opacity: 0, x: 36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.35 }}
                    elevation={0}
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2.5,
                      background: 'rgba(17, 23, 25, 0.86)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'border-color 0.3s, transform 0.3s',
                      '&:hover': {
                        borderColor: 'rgba(246, 198, 91, 0.42)',
                      },
                    }}
                  >
                    <Box sx={{ color: 'primary.main', display: 'flex' }}>
                      {stat.icon}
                    </Box>
                    <Box>
                      <Typography variant="h3" color="text.primary" fontWeight={750}>
                        {stat.number}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Box>
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
