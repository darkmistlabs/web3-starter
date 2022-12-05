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
import { useRouter } from 'next/router';
// import { ArrowDown, HelpCircle } from 'react-feather';

// ----------------------------------------------------------------------

const StyledRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[200],
}));

const StyledDescription = styled(Container)(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(10, 0),
  height: '100%',
}));

const StyledGridItem = styled(Box)(({ theme }) => ({
  position: 'relative',
}))

const StyledGridAction = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  padding: 20,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: alpha(theme.palette.common.black, .8),
}))

const StyledGridButton = styled(Button)(({ theme }) => ({
}))

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
  const theme = useTheme()
  const router = useRouter()

  return (
    <StyledDescription>
      <m.div variants={varFade().in}>
        <Typography variant="h2" sx={{ height: 70, textAlign: 'center', color: theme.palette.grey[900] }}>
          AF中国教练培训官团队
        </Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <Stack sx={{ mb: 4, p: theme.spacing(0, 8),  }}>
          <Typography variant="body2" sx={{ textAlign: 'center', color: theme.palette.grey[500] }}>
            Animal Flow 是基于地面的运动，有趣、具有挑战性且有效。该系统旨在提高各级健身爱好者的力量、爆发力、灵活性、机动性和协调性。无论您是想自己锻炼、与专业人士一起训练，还是参加小组课程，Animal Flow 都能满足每个人的需求！
          </Typography>
        </Stack>
      </m.div>
      
      <Grid container rowSpacing={{ xs: 2, sm: 4, md: 6 }} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
        <Grid item xs={12} md={6}>
          <StyledGridItem>
            <Image src="/assets/images/home/about_img_1.png" />
            <StyledGridAction>
              <StyledGridButton
                variant="outlined"
                color="inherit"
                size="large"
                onClick={() => router.push('/about')}
              >
                <Typography variant="h5">关于Animal Flow中国</Typography>
              </StyledGridButton>
            </StyledGridAction>
          </StyledGridItem>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledGridItem>
            <Image src="/assets/images/home/about_img_2.png" />
            <StyledGridAction>
              <StyledGridButton
                variant="outlined"
                color="inherit"
                size="large"
                onClick={() => router.push('/about')}
              >
                <Typography variant="h5">我们的优势</Typography></StyledGridButton>
            </StyledGridAction>
          </StyledGridItem>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledGridItem>
            <Image src="/assets/images/home/about_img_3.png" />
            <StyledGridAction>
              <StyledGridButton
                variant="outlined"
                color="inherit"
                size="large"
                onClick={() => router.push('/about')}
              >
                <Typography variant="h5">培训报名指南</Typography></StyledGridButton>
            </StyledGridAction>
          </StyledGridItem>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledGridItem>
            <Image src="/assets/images/home/about_img_4.png" />
            <StyledGridAction>
              <StyledGridButton
                variant="outlined"
                color="inherit"
                size="large"
                onClick={() => router.push('/about')}
              >
                <Typography variant="h5">联系我们</Typography></StyledGridButton>
            </StyledGridAction>
          </StyledGridItem>
        </Grid>
      </Grid>

    </StyledDescription>
  );
}
