import { m } from 'framer-motion';
import { useRef } from 'react';
// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import { Box, Stack, Card, Button, Container, Typography, IconButton } from '@mui/material';
// _mock_
import { _carouselsMembers, _socials } from '../../_mock/arrays';
// components
import Image from '../../components/image';
import Iconify from '../../components/iconify';
import Carousel, { CarouselArrows } from '../../components/carousel';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

export default function HomeMaster() {
  const carouselRef = useRef<Carousel>(null);

  const theme = useTheme();

  const carouselSettings = {
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    // rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <StyledRoot>
      <Container sx={{ p: 6, textAlign: 'center' }}>

        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ my: 2 }}>
            AF中国认证教练
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography
            sx={{
              mx: 'auto',
              maxWidth: 640,
              color: 'text.secondary',
            }}
          >
            Minimal will provide you support if you have any problems, our support team will reply
            within a day and we also have detailed documentation.
          </Typography>
        </m.div>

        <Box sx={{ position: 'relative' }}>
          <CarouselArrows
            filled
            shape="rounded"
            onNext={handleNext}
            onPrevious={handlePrev}
            leftButtonProps={{
              sx: {
                left: 24,
                ...(_carouselsMembers.length < 5 && { display: 'none' }),
              },
            }}
            rightButtonProps={{
              sx: {
                right: 24,
                ...(_carouselsMembers.length < 5 && { display: 'none' }),
              },
            }}
          >
            <Carousel ref={carouselRef} {...carouselSettings}>
              {_carouselsMembers.map((member) => (
                <Box
                  key={member.id}
                  component={m.div}
                  variants={varFade().in}
                  sx={{ px: 3, py: 5 }}
                >
                  <MemberCard member={member} />
                </Box>
              ))}
            </Carousel>
          </CarouselArrows>
        </Box>

        <Button
          variant="outlined"
          color="inherit"
          size="large"
          endIcon={<Iconify icon="ic:round-arrow-right-alt" width={24} />}
          sx={{ mx: 'auto' }}
        >
          所有认证教练
        </Button>
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

type MemberCardProps = {
  member: {
    name: string;
    role: string | undefined;
    avatar: string;
  };
};

function MemberCard({ member }: MemberCardProps) {
  const { name, role, avatar } = member;
  return (
    <Card key={name}>
      <Typography variant="h5" sx={{ mt: 3, mb: 0.5 }}>
        {name}
      </Typography>

      <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
        {role}
      </Typography>

      <Box sx={{ px: 1 }}>
        <Image alt={name} src={avatar} ratio="1/1" sx={{ borderRadius: 2 }} />
      </Box>

      <Stack direction="row" alignItems="center" justifyContent="center" sx={{ p: 2 }}>
        {_socials.map((social) => (
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
        ))}
      </Stack>
    </Card>
  );
}
