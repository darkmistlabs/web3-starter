// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Stack, Card, Button, Container, Grid, Paper, Typography, IconButton } from '@mui/material';
// components
import Image from '../../components/image';
import Iconify from '../../components/iconify';
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';
import { HEADER } from '../../config'

// mock
import { _carouselsMembers, _socials } from '../../_mock/arrays';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4, 0),
}))

const StyledContent = styled('div')(({ theme }) => ({
  // textAlign: 'center',
  // [theme.breakpoints.up('md')]: {
  //   bottom: 80,
  //   textAlign: 'left',
  //   position: 'absolute',
  // },
}))

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

export default function MasterList() {
  return (
    <StyledRoot>
      <Container component={MotionContainer}>
        <StyledContent>
          <Grid container spacing={2}>
            {_carouselsMembers.map((member) => (
              <Grid key={member.id} item xs={4}>
                <Box
                  sx={{ px: 3, py: 3 }}
                >
                  <MemberCard member={member} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </StyledContent>
      </Container>
    </StyledRoot>
  );
}

type MemberCardProps = {
  member: {
    id: string
    name: string
    role: string | undefined
    avatar: string
  };
};

function MemberCard({ member }: MemberCardProps) {
  const { id, name, role, avatar } = member;
  const router = useRouter()
  return (
    <Card key={name}>
      <Image alt={name} src={avatar} ratio="1/1" />

      <Stack justifyContent="center" alignItems="center">
        <Typography variant="h4" sx={{ mt: 3, mb: 0.5 }}>
          {name}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {role}
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="center" sx={{ p: 2 }}>
        <Button
          color="inherit"
          variant="outlined"
          onClick={() => router.push(`/master/${id}`)}
        >
          了解更多
        </Button>
        {/* {_socials.map((social) => (
          <IconButton
            key={social.name}
            sx={{
              color: social.color,
              '&:hover': {
                bgcolor: alpha(social.color, 0.08),
              },
            }}
          >
            <Iconify icon={social.icon} />
          </IconButton>
        ))} */}
      </Stack>
    </Card>
  );
}
