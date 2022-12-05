import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Stack, Typography, LinearProgress } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// _mock_
import { _contacts } from '../../_mock/arrays';
// utils
import { fPercent } from '../../utils/formatNumber';
// components
import Image from '../../components/image';
import Iconify from '../../components/iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

// ----------------------------------------------------------------------

export default function AboutContact() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.48
  )}`;

  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6} lg={6}>
            <m.div variants={varFade().inLeft}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                联系我们
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft}>
              <Box sx={{ my: 5 }}>
                {_contacts.map((info) => (
                  <m.div key={info.label} variants={varFade().inLeft}>
                    <ContactItem info={info} />
                  </m.div>
                ))}
              </Box>
            </m.div>
          </Grid>

          <Grid item xs={6}>
            <m.div variants={varFade().inRight}>
              <Image
                alt="our office 1"
                src="/assets/images/about/location.jpg"
                ratio="4/3"
                sx={{
                  borderRadius: 2,
                  boxShadow: shadow,
                }}
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

type ContactItemProps = {
  info: {
    icon: string
    label: string
    value: string
  };
};

function ContactItem({ info }: ContactItemProps) {
  const { icon, label, value } = info;
  return (
    <Stack sx={{ mt: 4 }} display="flex" direction="row" spacing={1}>
      <Iconify icon={icon} width={22} />
      <Typography variant="subtitle2">{label}:</Typography>
      <Typography>{value}</Typography>
    </Stack>
  );
}
