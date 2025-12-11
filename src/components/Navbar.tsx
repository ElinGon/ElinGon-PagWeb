import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 2 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ flexGrow: 1 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 300,
                fontSize: '1.2rem',
                letterSpacing: '0.1em',
                color: 'white',
              }}
            >
              TECHSOLUTIONS
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', gap: 4 }}>
            {['INICIO', 'SERVICIOS', 'NOSOTROS', 'CONTACTO'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    letterSpacing: '0.1em',
                    '&:hover': {
                      color: 'white',
                      background: 'transparent',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </Button>
              </motion.div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;