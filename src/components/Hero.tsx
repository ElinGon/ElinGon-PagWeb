import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      id="inicio"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#000000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.5,
        }}
      />

      {/* Gradiente sutil */}
      <Box
        sx={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: '#000000ff',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(60px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={6} alignItems="center" textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >

            <Box
              component="img"
              src="/public/elingon.png"
              alt="ElinGon Logo"
              sx={{
                width: { xs: '120px', sm: '160px', md: '290px', lg: '220px' },
                height: 'auto',
                maxWidth: '100%',
              }}
            />

            <Typography
              variant="h6"
              sx={{
                marginTop: '10%',
                maxWidth: '800px',
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: 500,
                lineHeight: 1.8,
                fontSize: { xs: '1.2rem', md: '1.2rem' },
              }}
            >
              Práctico, Profesional y Personalizado
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          >
            <Typography
              variant="h6"
              sx={{
                maxWidth: '600px',
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: 300,
                lineHeight: 1.8,
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              Creamos experiencias digitales excepcionales
              <br />
              con código limpio y diseño elegante
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mt: 4 }}>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 6,
                  py: 2,
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                  borderRadius: 0,
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'white',
                    color: 'black',
                  },
                  transition: 'all 0.3s ease',
                }}
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                EMPEZAR PROYECTO
              </Button>

              <Button
                size="large"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  px: 6,
                  py: 2,
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                  '&:hover': {
                    color: 'white',
                    bgcolor: 'transparent',
                  },
                  transition: 'all 0.3s ease',
                }}
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              >
                EXPLORAR →
              </Button>
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;