import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Button, IconButton, Typography, Stack } from '@mui/material';
// utils
import { textGradient, bgGradient } from '../../utils/cssStyles';
// config
import { HEADER } from '../../config';
// components
import Iconify from '../../components/iconify';
import { varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
  }),
  [theme.breakpoints.up('md')]: {
    top: HEADER.H_DASHBOARD_DESKTOP,
    width: '100%',
    height: `calc(100vh - ${HEADER.H_DASHBOARD_DESKTOP}px)`,
  },
}));

const StyledDescription = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  padding: theme.spacing(15, 0),
  maxWidth: '50%',
  height: '100%',
}));

const StyledGradientText = styled(m.h1)(({ theme }) => ({
  padding: 0,
  marginTop: 8,
  marginBottom: 24,
  ...textGradient(
    `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
  ),
  minWidth: 1000,
  backgroundSize: '400%',
  fontFamily: "'Barlow', sans-serif",
  fontSize: `${64 / 16}rem`,
  textAlign: 'center',
  lineHeight: 1.5,
  letterSpacing: 4,
  [theme.breakpoints.up('md')]: {
    fontSize: `${96 / 16}rem`,
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  return (
    <>
      <StyledRoot>
        <Description />
      </StyledRoot>
    </>
  );
}

// ----------------------------------------------------------------------

function Description() {
  return (
    <StyledDescription>
      <m.div variants={varFade().in}>
        <StyledGradientText
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            repeatType: 'reverse',
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
        >
          Start Your Web3
        </StyledGradientText>
      </m.div>

      <m.div variants={varFade().in}>
        <Typography variant="body1" sx={{ textAlign: 'center', lineHeight: 2 }}>
          The starting point for your next project is based on MUI. <br/> Easy customization Helps you
          build apps faster and better.
        </Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <Stack spacing={4} direction={{ xs: 'column-reverse', sm: 'row' }} sx={{ mt: 5, mb: 20 }}>
          <Stack alignItems="center" spacing={2}>
            <NextLink href={`/`} passHref>
              <Button
                color="inherit"
                size="large"
                variant="contained"
                startIcon={<Iconify icon="eva:flash-fill" width={24} />}
                sx={{
                  bgcolor: 'text.primary',
                  color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                  '&:hover': {
                    bgcolor: 'text.primary',
                  },
                }}
              >
                Launch APP
              </Button>
            </NextLink>
          </Stack>
        </Stack>
      </m.div>
    </StyledDescription>
  );
}