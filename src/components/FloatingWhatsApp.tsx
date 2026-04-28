import { Box, IconButton } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola ElinGon, te escribo desde la web.');
    window.open(`https://wa.me/595994804891?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: '24px', md: '32px' },
          right: { xs: '24px', md: '32px' },
          zIndex: 40,
        }}
      >
        <IconButton
          onClick={handleWhatsAppClick}
          sx={{
            width: { xs: 60, md: 70 },
            height: { xs: 60, md: 70 },
            backgroundColor: '#000000',
            color: 'white',
            boxShadow: '0 4px 24px rgba(255, 255, 255, 0.4)',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#000000',
              boxShadow: '0 6px 32px rgba(255, 255, 255, 0.6)',
              transform: 'translateY(-4px)',
            },
            '& .MuiSvgIcon-root': {
              fontSize: { xs: '28px', md: '32px' },
            },
          }}
        >
          <WhatsApp />
        </IconButton>
      </Box>
    </motion.div>
  );
};

export default FloatingWhatsApp;
