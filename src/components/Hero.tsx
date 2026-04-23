import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const floatTransition = {
  duration: 8,
  repeat: Infinity,
  repeatType: 'reverse' as const,
  ease: 'easeInOut' as const,
};

const Hero = () => {
  return (
    <Box
      id="inicio"
      sx={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 8, sm: 9, md: 10 },
        pb: { xs: 4, md: 5 },
        background:
          'linear-gradient(135deg, #0b0f13 0%, #141a1f 48%, #1c232a 100%)',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/elingon-ss.png"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: { xs: 'center center', md: 'center center' },
          filter: 'saturate(0.92) contrast(1.08) brightness(0.72)',
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(106, 184, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(106, 184, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          opacity: { xs: 0.28, md: 0.36 },
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.82), transparent 76%)',
        }}
      />
      <Box
        component={motion.div}
        animate={{ x: [0, 22, -14, 0], y: [0, -18, 16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          top: { xs: '14%', md: '18%' },
          right: { xs: '-120px', md: '10%' },
          width: { xs: 260, md: 420 },
          height: { xs: 260, md: 420 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(106, 184, 255, 0.18), transparent 68%)',
          filter: 'blur(8px)',
        }}
      />
      <Box
        component={motion.div}
        animate={{ x: [0, -16, 20, 0], y: [0, 20, -12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          bottom: { xs: '2%', md: '9%' },
          left: { xs: '-120px', md: '8%' },
          width: { xs: 220, md: 340 },
          height: { xs: 220, md: 340 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(246, 198, 91, 0.13), transparent 70%)',
          filter: 'blur(10px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(11, 15, 19, 0.8) 0%, rgba(11, 15, 19, 0.6) 42%, rgba(11, 15, 19, 0.9) 100%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(11, 15, 19, 0.9) 0%, rgba(11, 15, 19, 0.52) 46%, rgba(106, 184, 255, 0.14) 100%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack
          spacing={{ xs: 2.6, sm: 3.2, md: 3.8 }}
          alignItems="center"
          textAlign="center"
          sx={{
            '@media (max-height: 760px)': {
              transform: 'scale(0.9)',
            },
            '@media (max-height: 650px)': {
              transform: 'scale(0.82)',
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={floatTransition}>
              <Box
                component="img"
                src="/elingon.png"
                alt="ElinGon Logo"
                sx={{
                  width: { xs: 128, sm: 164, md: 200 },
                  height: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 22px 45px rgba(0, 0, 0, 0.45))',
                }}
              />
            </motion.div>

            <Typography
              variant="overline"
              sx={{
                display: 'block',
                mt: { xs: 1.8, md: 2.2 },
                color: 'primary.light',
                fontWeight: 800,
                fontSize: { xs: '0.74rem', md: '0.82rem' },
                letterSpacing: '0.16em',
              }}
            >
              Práctico · Profesional · Personalizado
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.18, ease: 'easeOut' }}
          >
            <Typography
              variant="h1"
              sx={{
                maxWidth: '920px',
                color: 'text.primary',
                fontSize: {
                  xs: 'clamp(2rem, 10vw, 2.85rem)',
                  sm: 'clamp(3rem, 8vw, 4rem)',
                  md: 'clamp(4.6rem, 6.4vw, 5.8rem)',
                },
              }}
            >
              Software claro para negocios que quieren{' '}
              <Box
                component="span"
                sx={{
                  color: 'primary.light',
                  textShadow: '0 0 34px rgba(106, 184, 255, 0.24)',
                }}
              >
                crecer
              </Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: '720px',
                mx: 'auto',
                mt: { xs: 1.6, md: 2.2 },
                color: 'text.secondary',
                fontWeight: 360,
                lineHeight: 1.65,
                fontSize: { xs: '0.95rem', md: '1.15rem' },
              }}
            >
              Creamos sitios, apps y sistemas a medida con diseño cuidado,
              código limpio y acompañamiento cercano.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.34, ease: 'easeOut' }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mt: { xs: 0, md: 0.5 }, width: { xs: '100%', sm: 'auto' } }}
            >
              <Button
                component={motion.button}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'primary.main',
                  color: '#07100f',
                  px: 4,
                  py: 1.6,
                  minWidth: { xs: '100%', sm: 190 },
                  '&:hover': {
                    bgcolor: 'primary.light',
                    boxShadow: '0 14px 32px rgba(106, 184, 255, 0.24)',
                  },
                }}
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Empezar proyecto
              </Button>

              <Button
                component={motion.button}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'rgba(255,255,255,0.22)',
                  color: 'text.primary',
                  px: 4,
                  py: 1.6,
                  minWidth: { xs: '100%', sm: 170 },
                  '&:hover': {
                    borderColor: 'secondary.main',
                    bgcolor: 'rgba(246, 198, 91, 0.08)',
                  },
                }}
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver servicios
              </Button>
            </Stack>
          </motion.div>
          <Box
            component={motion.div}
            animate={{ y: [0, 10, 0], opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            sx={{
              width: 22,
              height: 34,
              border: '1px solid rgba(255,255,255,0.28)',
              borderRadius: 99,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'flex-start',
              justifyContent: 'center',
              p: '6px',
            }}
          >
            <Box sx={{ width: 4, height: 8, borderRadius: 99, bgcolor: 'primary.main' }} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
