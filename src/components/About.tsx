import { Box, Container, Typography, Grid, Stack, Paper } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import { motion } from 'framer-motion';

const notebookLandscapeQuery =
  '@media (min-width: 1024px) and (max-width: 1600px) and (max-height: 950px)';

const stats = [
  { icon: <WorkIcon sx={{ fontSize: 40 }} />, number: '150+', label: 'Proyectos Completados' },
  { icon: <GroupsIcon sx={{ fontSize: 40 }} />, number: '50+', label: 'Clientes Satisfechos' },
  { icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />, number: '10+', label: 'Años de Experiencia' },
];

const About = () => {
  return (
    <Box
      id="nosotros"
      sx={{
        py: { xs: 7, sm: 8, md: 8 },
        bgcolor: 'background.default',
        scrollMarginTop: { xs: 64, md: 72 },
        '@media (min-width: 1024px) and (orientation: landscape)': {
          minHeight: 'clamp(620px, calc(100svh - 72px), 860px)',
          display: 'flex',
          alignItems: 'center',
          py: 5,
        },
        [notebookLandscapeQuery]: {
          py: 4,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2.5, sm: 4, lg: 7, xl: 9 },
          width: '100%',
          [notebookLandscapeQuery]: {
            px: 5,
          },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 8, xl: 12 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack
              component={motion.div}
              initial={{ opacity: 0, x: -34 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              spacing={{ xs: 3, xl: 3.5 }}
              sx={{
                [notebookLandscapeQuery]: {
                  spacing: 2.2,
                },
              }}
            >
              <Typography
                variant="overline"
                sx={{ color: 'grey.300', fontWeight: 800, letterSpacing: '0.16em' }}
              >
                El equipo
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: 'text.primary',
                  fontSize: { xs: '2.15rem', md: '3.8rem', lg: '4.35rem', xl: '5rem' },
                  [notebookLandscapeQuery]: {
                    fontSize: '3.15rem',
                  },
                }}
              >
                Cercanía de estudio, calidad de software serio
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                fontSize={{ xs: 18, xl: 21 }}
                lineHeight={1.8}
                sx={{
                  [notebookLandscapeQuery]: {
                    fontSize: '1rem',
                  },
                }}
              >
                Somos un equipo apasionado de desarrolladores, diseñadores y estrategas
                digitales comprometidos con la excelencia tecnológica.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                fontSize={{ xs: 18, xl: 21 }}
                lineHeight={1.8}
                sx={{
                  [notebookLandscapeQuery]: {
                    fontSize: '1rem',
                  },
                }}
              >
                Desde 2014, hemos ayudado a empresas de todos los tamaños a transformar
                sus ideas en soluciones digitales exitosas. Nuestra experiencia abarca
                desde startups hasta grandes corporaciones.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                fontSize={{ xs: 18, xl: 21 }}
                lineHeight={1.8}
                sx={{
                  [notebookLandscapeQuery]: {
                    fontSize: '1rem',
                  },
                }}
              >
                Creemos en la innovación constante, la calidad del código y en construir
                relaciones duraderas con nuestros clientes.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={{ xs: 2.5, xl: 3 }}>
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
                      p: { xs: 3, lg: 3.5, xl: 4.5 },
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2.5,
                      background: 'rgba(23, 28, 33, 0.9)',
                      border: '1px solid rgba(202, 205, 208, 0.12)',
                      transition: 'border-color 0.3s, transform 0.3s',
                      '&:hover': {
                        borderColor: 'rgba(246, 198, 91, 0.42)',
                      },
                      [notebookLandscapeQuery]: {
                        p: 2.8,
                      },
                    }}
                  >
                    <Box sx={{ color: 'primary.main', display: 'flex' }}>
                      {stat.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h3"
                        color="text.primary"
                        fontWeight={750}
                        sx={{
                          fontSize: { xl: '4rem' },
                          [notebookLandscapeQuery]: {
                            fontSize: '2.6rem',
                          },
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          fontSize: { xl: '1.18rem' },
                          [notebookLandscapeQuery]: {
                            fontSize: '0.98rem',
                          },
                        }}
                      >
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
