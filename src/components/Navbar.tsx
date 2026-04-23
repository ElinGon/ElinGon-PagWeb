import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: 'rgba(8, 11, 13, 0.74)',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(202, 205, 208, 0.12)',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, lg: 6, xl: 8 } }}>
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72, lg: 78, xl: 86 } }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
              width: '100%',
            }}
          >
            <Box
              component="img"
              src="/elingonHorizontal.png"
              alt="ElinGon Sistemas"
              sx={{ width: { xs: 108, sm: 128, lg: 150, xl: 172 }, height: 'auto' }}
            />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: { xs: 0.5, sm: 1, lg: 1.5, xl: 2 },
                overflowX: 'auto',
              }}
            >
              {['INICIO', 'SERVICIOS', 'NOSOTROS', 'CONTACTO'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    sx={{
                      color: 'text.secondary',
                      fontSize: {
                        xs: '0.72rem',
                        sm: '0.78rem',
                        lg: '0.92rem',
                        xl: '1.05rem',
                      },
                      letterSpacing: { xs: '0.08em', lg: '0.09em' },
                      px: { xs: 0.8, sm: 1.5, lg: 1.8, xl: 2.2 },
                      py: { lg: 1, xl: 1.15 },
                      minWidth: 'auto',
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        left: 12,
                        right: 12,
                        bottom: 6,
                        height: 2,
                        bgcolor: 'primary.main',
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.25s ease',
                      },
                      '&:hover': {
                        color: 'primary.light',
                        background: 'rgba(106, 184, 255, 0.08)',
                        '&:after': {
                          transform: 'scaleX(1)',
                        },
                      },
                    }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                  >
                    {item}
                  </Button>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
      <Box
        component={motion.div}
        style={{ scaleX }}
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 2,
          bgcolor: 'primary.main',
          transformOrigin: '0%',
        }}
      />
    </AppBar>
  );
};

export default Navbar;
