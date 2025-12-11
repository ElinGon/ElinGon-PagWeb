"use client"

import { Box, Container, Typography, Button, Stack } from "@mui/material"
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #434344ff 0%, #000000ff 50%, #1b171bff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Elementos de fondo animados */}
      <Box
        sx={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          top: "-250px",
          right: "-250px",
          animation: "float 6s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(20px)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          bottom: "-150px",
          left: "-150px",
          animation: "float 8s ease-in-out infinite",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <Box
              sx={{
                p: 3,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
                display: "inline-block",
              }}
            >
              <RocketLaunchIcon sx={{ fontSize: 80, color: "white" }} />
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "5rem" },
                color: "white",
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                background: "linear-gradient(to right, #fff, #f0f0f0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Innovación Digital
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h5"
              sx={{
                maxWidth: "800px",
                color: "rgba(255,255,255,0.95)",
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Transformamos tus ideas en experiencias digitales extraordinarias con tecnología de vanguardia y diseño
              excepcional
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  px: 5,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  borderRadius: "50px",
                  boxShadow: "0 8px 30px rgba(255,255,255,0.3)",
                  "&:hover": {
                    bgcolor: "grey.100",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 40px rgba(255,255,255,0.4)",
                  },
                  transition: "all 0.3s ease",
                }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Comenzar Proyecto
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "white",
                  color: "white",
                  px: 5,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  borderRadius: "50px",
                  borderWidth: "2px",
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderWidth: "2px",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explorar Servicios
              </Button>
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
