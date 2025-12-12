import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
        sx={{
        background: 'rgba(0, 0, 0, 0.34)',
        backdropFilter: 'blur(15px)',
        boxShadow: "#161616ff 0px 4px 25px",
      }}
    >
      <Container >
        <Toolbar >

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