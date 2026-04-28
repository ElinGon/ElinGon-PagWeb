import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { WhatsApp } from "@mui/icons-material";

const redirectToInstagram = () => {
  window.open("https://www.instagram.com/elingonsistemas_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank");
};

const redirectToWhatsApp = () => {
  window.open("https://api.whatsapp.com/send/?phone=595994804891&text=Hola+ElinGon%21%21+Te+escribo+desde+tu+website%2C+estoy+interesado%2Fa+en+adquirir+una+p%C3%A1gina+web.&type=phone_number&app_absent=0", "_blank");
}

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'rgba(11, 15, 19, 0.45)',
        backdropFilter: 'blur(32px)',
        color: "white",
        py: 6,
        borderTop: '1px solid rgba(106, 184, 255, 0.15)',
        boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={1}
          >
            <Box
              component="img"
              src="/elingonHorizontal.png"
              alt="ElinGon Logo"
              sx={{
                width: { xs: "120px", sm: "150px" },
                height: "auto",
                maxWidth: "100%",
              }}
            />
          </Box>

          <Typography variant="body1" textAlign="center" sx={{ opacity: 0.9 }}>
            Transformamos ideas en soluciones tecnológicas innovadoras
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <IconButton
              sx={{
                color: "white",
                border: "1px solid rgba(202,205,208,0.14)",
                "&:hover": { bgcolor: "rgba(106,184,255,0.12)", color: "primary.light" },
              }}
              onClick={redirectToWhatsApp}
              aria-label="WhatsApp"
            >
              <WhatsApp />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                border: "1px solid rgba(202,205,208,0.14)",
                "&:hover": { bgcolor: "rgba(246,198,91,0.12)", color: "secondary.light" },
              }}
              onClick={redirectToInstagram}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>
          </Stack>

          <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)" }} />

          <Typography variant="body2" textAlign="center" sx={{ opacity: 0.8 }}>
            © 2024 ElinGon Sistemas. Todos los derechos reservados.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
