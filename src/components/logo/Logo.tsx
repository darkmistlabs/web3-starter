import { forwardRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link, BoxProps, Typography, Stack } from '@mui/material';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    // OR using local (public folder)
    // -------------------------------------------------------
    // const logo = (
    //   <Box
    //     component="img"
    //     src="/logo/logo_single.svg" => your path
    //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    //   />
    // );

    const logo = (
      <Box
        ref={ref}
        component="span"
        sx={{
          width: 40,
          height: 40,
          display: 'inline-flex',
          ...sx,
        }}
        {...other}
      >
        <svg
          className=""
          fill="none"
          viewBox="0 0 28 28"
          width="36"
          height="36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
          <path
            clipRule="evenodd"
            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            fill="#fff"
            fillRule="evenodd"
          />
        </svg>
      </Box>
    );

    if (disabledLink) {
      return <>{logo}</>;
    }

    return (
      <NextLink href="/" passHref>
        <Stack direction="row" alignItems="center">
          {logo}
          <Typography variant="h4" color="currentColor">Web3 Starter</Typography>
        </Stack>
      </NextLink>
    );
  }
);

export default Logo;
