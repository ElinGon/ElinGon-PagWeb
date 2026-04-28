import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const floatTransition = {
  duration: 8,
  repeat: Infinity,
  repeatType: 'reverse' as const,
  ease: 'easeInOut' as const,
};

const proofItems = [
  'Sitios y sistemas a medida',
  'Diseño claro y profesional',
  'Acompañamiento cercano',
];

const heroLeadWords = ['Aquí', 'tus', 'ideas'];
const heroAccentWords = ['se', 'transforman'];

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const riseIn = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' as const },
  },
};

const notebookLandscapeQuery =
  '@media (min-width: 1024px) and (max-width: 1600px) and (max-height: 950px)';

const Hero = () => {
  return (
    <Box
      id="inicio"
      sx={{
        minHeight: '100svh',
        height: { md: '100svh' },
        display: 'flex',
        alignItems: 'center',
        pt: { xs: '84px', sm: '92px', md: '60px' },
        pb: { xs: '28px', md: '20px' },
        background:
          'linear-gradient(135deg, #0b0f13 0%, #141a1f 48%, #1c232a 100%)',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        '@media (max-height: 860px)': {
          pt: { xs: '80px', sm: '88px', md: '72px' },
          pb: { xs: '20px', md: '24px' },
        },
        [notebookLandscapeQuery]: {
          pt: '52px',
          pb: '16px',
        },
      }}
    >
      <Box
        component={motion.video}
        initial={{ scale: 1.08, opacity: 0.2 }}
        animate={{ scale: [1.08, 1.02, 1.08], opacity: 1 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/elingon.png"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          filter: 'saturate(0.94) contrast(1.08) brightness(0.6)',
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
      </Box>

      <Box
        component={motion.div}
        animate={{ backgroundPosition: ['0px 0px', '64px 32px', '0px 0px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(106, 184, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(106, 184, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          opacity: { xs: 0.2, md: 0.32 },
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.3) 70%, transparent)',
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
          background:
            'radial-gradient(circle, rgba(106, 184, 255, 0.22), transparent 68%)',
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
          background:
            'radial-gradient(circle, rgba(246, 198, 91, 0.16), transparent 70%)',
          filter: 'blur(10px)',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(11, 15, 19, 0.76) 0%, rgba(11, 15, 19, 0.52) 42%, rgba(11, 15, 19, 0.92) 100%)',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(11, 15, 19, 0.9) 0%, rgba(11, 15, 19, 0.55) 46%, rgba(106, 184, 255, 0.16) 100%)',
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2.25, sm: 3 },
          minHeight: { xs: 'calc(100svh - 112px)', md: 'calc(100svh - 100px)' },
          '@media (max-height: 860px)': {
            minHeight: { xs: 'calc(100svh - 100px)', md: 'calc(100svh - 96px)' },
          },
          [notebookLandscapeQuery]: {
            minHeight: 'calc(100svh - 68px)',
          },
        }}
      >
        <Stack
          spacing={{ xs: 1.9, sm: 2.8, md: 3.5 }}
          alignItems="center"
          textAlign="center"
          sx={{
            width: '100%',
            maxWidth: 1100,
            py: { xs: 0.5, md: 0 },
            gap: { xs: 1.6, sm: 2.4, md: 3.8 },
            '@media (max-height: 760px)': {
              transform: 'scale(0.92)',
            },
            '@media (max-height: 650px)': {
              transform: 'scale(0.84)',
            },
            [notebookLandscapeQuery]: {
              maxWidth: 920,
              gap: 2,
              transform: 'scale(0.88)',
              transformOrigin: 'center top',
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
                src="/elingon-ss.png"
                alt="ElinGon Logo"
                sx={{
                  width: { xs: 120, sm: 180, md: 180, lg: 210 },
                  height: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 22px 45px rgba(0, 0, 0, 0.45))',
                  [notebookLandscapeQuery]: {
                    width: 150,
                  },
                }}
              />
            </motion.div>
          </motion.div>

          <Box component={motion.div} variants={staggerContainer} initial="hidden" animate="show">


            <Typography
              variant="h1"
              component={motion.h1}
              variants={riseIn}
              sx={{
                maxWidth: { xs: 320, sm: 680, md: '980px' },
                mx: 'auto',
                color: 'text.primary',
                fontSize: {
                  xs: 'clamp(2.05rem, 9.6vw, 2.8rem)',
                  sm: 'clamp(3rem, 7vw, 4.2rem)',
                  md: 'clamp(3.5rem, 5.5vw, 4.8rem)',
                },
                lineHeight: { xs: 1, md: 0.94 },
                letterSpacing: '-0.04em',
                textWrap: 'balance',
                [notebookLandscapeQuery]: {
                  maxWidth: 760,
                  fontSize: 'clamp(2.9rem, 4.5vw, 3.7rem)',
                  lineHeight: 0.98,
                },
              }}
            >
              {heroLeadWords.map((word, index) => (
                <Box
                  key={word}
                  component={motion.span}
                  initial={{ opacity: 0, y: 22, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.55,
                    delay: 0.36 + index * 0.08,
                    ease: 'easeOut',
                  }}
                  sx={{ display: 'inline-block', mr: { xs: 0.8, md: 1.2 } }}
                  
                >
                  {word}
                </Box>
              ))}
              <Box
                component="span"
                sx={{
                  display: 'block',
                  backgroundImage:
                    'linear-gradient(92deg, #ffffff 0%, #dff1ff 34%, #a8d8ff 72%, #00336d 100%)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0 0 26px rgba(106, 184, 255, 0.18)',
                }}
              >
                {heroAccentWords.map((word, index) => (
                  <Box
                    key={word}
                    component={motion.span}
                    initial={{ opacity: 0, y: 18, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.62 + index * 0.1,
                      ease: 'easeOut',
                    }}
                    sx={{ display: 'inline-block', mr: { xs: 0.8, md: 1.2 } }}
                  >
                    {word}
                  </Box>
                ))}
              </Box>
              <Box
                component={motion.span}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.86, ease: 'easeOut' }}
                sx={{ display: 'inline-block' }}
              >
                en soluciones de software.
              </Box>
            </Typography>

            <Stack
              component={motion.div}
              variants={staggerContainer}
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
              sx={{
                mt: { xs: 1.7, md: 1.8 },
                flexWrap: 'wrap',
                rowGap: 1,
                [notebookLandscapeQuery]: {
                  mt: 1.1,
                  rowGap: 0.7,
                },
              }}
            >
              {proofItems.map((item) => (
                <Box
                  component={motion.div}
                  key={item}
                  variants={riseIn}
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={floatTransition}
                  sx={{
                    px: { xs: 1.25, md: 1.5 },
                    py: { xs: 0.72, md: 0.8 },
                    borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    bgcolor: 'rgba(12, 18, 24, 0.54)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                    [notebookLandscapeQuery]: {
                      px: 1.05,
                      py: 0.6,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: '0.77rem', md: '0.9rem' },
                      color: 'text.primary',
                      fontWeight: 520,
                      [notebookLandscapeQuery]: {
                        fontSize: '0.74rem',
                      },
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.34, ease: 'easeOut' }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{
                mt: { xs: 0.6, md: 0.4 },
                width: { xs: '100%', sm: 'auto' },
                maxWidth: { xs: 340, sm: 'none' },
                mx: 'auto',
              }}
            >
              <Button
                component={motion.button}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'primary.light',
                  color: '#07100f',
                  px: { xs: 3.2, sm: 4.4 },
                  py: { xs: 1.35, sm: 1.7 },
                  minWidth: { xs: '100%', sm: 220 },
                  boxShadow: '0 18px 40px rgba(106, 184, 255, 0.3)',
                  borderRadius: '10px',
                  '&:hover': {
                    bgcolor: '#c6e8ff',
                    boxShadow: '0 20px 40px rgba(106, 184, 255, 0.36)',
                  },
                }}
                onClick={() =>
                  document
                    .getElementById('contacto')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
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
                  borderColor: 'rgba(255,255,255,0.18)',
                  color: 'text.primary',
                  px: { xs: 3.2, sm: 4.2 },
                  py: { xs: 1.35, sm: 1.7 },
                  minWidth: { xs: '100%', sm: 190 },
                  bgcolor: 'rgba(12, 18, 24, 0.35)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '10px',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    bgcolor: 'rgba(246, 198, 91, 0.1)',
                  },
                }}
                onClick={() =>
                  document
                    .getElementById('servicios')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
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
              display: { xs: 'none', lg: 'flex' },
              alignItems: 'flex-start',
              justifyContent: 'center',
              p: '6px',
            }}
          >
            <Box
              sx={{ width: 4, height: 8, borderRadius: 99, bgcolor: 'primary.main' }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
