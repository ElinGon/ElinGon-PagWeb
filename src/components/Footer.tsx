import { Box, Container, Typography, Stack, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CodeIcon from '@mui/icons-material/Code';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
            <CodeIcon sx={{ fontSize: 30 }} />
            <Typography variant="h5" fontWeight={700}>
              TechSolutions
            </Typography>
          </Box>

          <Typography variant="body1" textAlign="center" sx={{ opacity: 0.9 }}>
            Transformamos ideas en soluciones tecnológicas innovadoras
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <IconButton
              sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
              aria-label="Facebook"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
              aria-label="Twitter"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>
          </Stack>

          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)' }} />

          <Typography variant="body2" textAlign="center" sx={{ opacity: 0.8 }}>
            © 2024 TechSolutions. Todos los derechos reservados.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;