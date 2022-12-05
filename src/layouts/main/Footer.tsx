// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import { Box, Grid, Link, Stack, Divider, Container, Typography, IconButton, useTheme } from '@mui/material';
// _mock
import { _socials } from '../../_mock/arrays';
// components
import Logo from '../../components/logo';
import Iconify from '../../components/iconify';
// hooks
// import { useFooterSocial } from '../../state/application/hooks'

// ----------------------------------------------------------------------

const SOCIAL_LINKS = [
  {
    value: 'weibo',
    name: '微博',
    icon: 'mdi:sina-weibo',
    path: '/',
  },
  {
    value: 'wechat',
    name: '微信',
    icon: 'cib:wechat',
    path: '/',
  },
  {
    value: 'tiktok',
    name: '抖音',
    icon: 'ic:baseline-tiktok',
    path: '/',
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
  const theme = useTheme()
  const { pathname } = useRouter();

  // const isHome = pathname === '/';

  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Divider />

      <Container sx={{ p: theme.spacing(2, 0) }}>
        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
          alignItems="center"
          sx={{
            textAlign: {
              xs: 'center',
              md: 'left',
            },
          }}
        >
          <Grid item xs={12} md={2}>
            <Logo height={24} fontSize={20} sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack
              spacing={2}
              direction="row"
              alignItems={{ xs: 'flex-start', md: 'flex-end' }}
            >
              {SOCIAL_LINKS.map((social, i) => (
                <Link key={i} href={social.path} target="_blank" rel="noopener" underline="none">
                  <IconButton key={social.name} size="large">
                    <Iconify icon={social.icon} width={28} />
                  </IconButton>
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack alignItems="center" justifyContent="center" >
              <Typography
                variant="body1"
                color={theme.palette.text.disabled}
                sx={{
                  mt: 1,
                  pb: 2,
                }}
              >
                Copyright &copy; 2022 <Link href="https://animalflow.com.cn" color={theme.palette.primary.light}>AnimalFlowChina.com</Link>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  return mainFooter;
}
