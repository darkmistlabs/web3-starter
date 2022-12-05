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

export default function HelpWhat() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Typography variant="h1">Need Help</Typography>
      </Container>
    </StyledRoot>
  );
}

