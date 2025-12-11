import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar position="sticky" color="primary" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CodeIcon sx={{ mr: 1, fontSize: 30 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            TechSolutions
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" onClick={() => scrollToSection('hero')}>
              Inicio
            </Button>
            <Button color="inherit" onClick={() => scrollToSection('services')}>
              Servicios
            </Button>
            <Button color="inherit" onClick={() => scrollToSection('about')}>
              Nosotros
            </Button>
            <Button color="inherit" onClick={() => scrollToSection('contact')}>
              Contacto
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;