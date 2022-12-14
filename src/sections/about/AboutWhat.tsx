// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
import { MotionViewport } from '../../components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

// ----------------------------------------------------------------------

export default function AboutWhat() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Typography variant="h1">About Us</Typography>
      </Container>
    </StyledRoot>
  );
}

