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
    value: 'telegram',
    name: 'Telegram',
    icon: 'file-icons:telegram',
    path: 'https://t.me/+TOGYnsZ2itA0NGZl',
  },
  {
    value: 'discord',
    name: 'Discord',
    icon: 'akar-icons:discord-fill',
    path: 'https://discord.gg/PphEmhTF2D',
  },
  {
    value: 'github',
    name: 'Github',
    icon: 'bi:github',
    path: 'https://github.com/minerdao',
  },
  {
    value: 'wechat',
    name: 'Wechat',
    icon: 'cib:wechat',
    path: 'https://discord.gg/PphEmhTF2D',
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
          sx={{
            textAlign: {
              xs: 'center',
              md: 'left',
            },
          }}
        >
          <Grid item xs={12} md={6}>
            <Logo height={24} fontSize={20} sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
            <Stack
              spacing={2}
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-end' }}
              sx={{ mt: 4 }}
            >
              {SOCIAL_LINKS.map((social, i) => (
                <Link key={i} href={social.path} target="_blank" rel="noopener" underline="none">
                  <IconButton key={social.name} size="large">
                    <Iconify icon={social.icon} sx={{ width: 24, height: 24 }} />
                  </IconButton>
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            Link
          </Grid>
        </Grid>
        <Grid>
          <Typography
            variant="body2"
            color={theme.palette.text.disabled}
            sx={{
              mt: 1,
              pb: 2,
            }}
          >
            Copyright &copy; 2022 zkPool
          </Typography>
        </Grid>
      </Container>
    </Box>
  );

  return mainFooter;
}
