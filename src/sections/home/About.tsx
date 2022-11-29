import { m, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import { Button, Box, Container, IconButton, Typography, Stack, Grid } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { textGradient, bgGradient } from '../../utils/cssStyles';
// config
import { HEADER } from '../../config';
// components
import SvgColor from '../../components/svg-color';
import Iconify from '../../components/iconify';
import { MotionContainer, varFade } from '../../components/animate';
import Image from '../../components/image'
// import { ArrowDown, HelpCircle } from 'react-feather';

// ----------------------------------------------------------------------

const StyledRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.paper,
}));

const StyledDescription = styled(Container)(({ theme }) => ({
  // maxWidth: 800,
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(10, 0),
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

const StyledEllipseTop = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: 480,
  height: 480,
  top: -80,
  right: -80,
  borderRadius: '50%',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledEllipseBottom = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: 400,
  bottom: -200,
  left: '10%',
  right: '10%',
  borderRadius: '50%',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.08),
}));

// ----------------------------------------------------------------------

export default function HomeAbout() {
  const isDesktop = useResponsive('up', 'md');

  const { scrollYProgress } = useScroll();

  const [hide, setHide] = useState(false);

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
        <Typography variant="h2" sx={{ height: 70, textAlign: 'center' }}>
          AF中国教练培训官团队
        </Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <Typography variant="body2" sx={{ md: 4, height: 60, textAlign: 'center' }}>
          The starting point for your next project is based on MUI.Easy customization Helps you
          build apps faster and better.
        </Typography>
      </m.div>

      
      <Grid container rowSpacing={{ xs: 2, sm: 4, md: 6 }} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
        <Grid item xs={12} md={6}>
          <Image src="/assets/images/home/about_img_1.png" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src="/assets/images/home/about_img_2.png" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src="/assets/images/home/about_img_3.png" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src="/assets/images/home/about_img_4.png" />
        </Grid>
      </Grid>

    </StyledDescription>
  );
}
