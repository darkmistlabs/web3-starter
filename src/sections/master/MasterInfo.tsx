// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Stack, Card, Button, Container, Grid, Paper, Typography, IconButton, Divider } from '@mui/material';
// components
import Image from '../../components/image';
import Iconify from '../../components/iconify';
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';
import { HEADER } from '../../config'

// mock
import { _carouselsMember, _socials } from '../../_mock/arrays';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4, 0),
}));

const StyledContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  // [theme.breakpoints.up('md')]: {
  //   bottom: 80,
  //   textAlign: 'left',
  //   position: 'absolute',
  // },
}));

// ----------------------------------------------------------------------

export default function MasterInfo() {
  const router = useRouter()
  return (
    <StyledRoot>
      <Container component={MotionContainer}>
        <StyledContent>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <MemberAvatar member={_carouselsMember} />
            </Grid>
            <Grid item xs={8}>
              <MemberInfo member={_carouselsMember} />
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                startIcon={<Iconify icon="mdi:arrow-left" width={24} />}
                sx={{ mx: 2, my: 6 }}
                onClick={() => router.push('/master')}
              >
                查看所有认证教练
              </Button>
            </Grid>
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

function MemberAvatar({ member }: MemberCardProps) {
  const { id, name, role, avatar } = member;
  return (
    <Card sx={{ boxShadow: 'none', borderRadius: 0, }}>
      <Box >
        <Image alt={name} src={avatar} ratio="1/1" />
      </Box>
    </Card>
  );
}

function MemberInfo({ member }: MemberCardProps) {
  const { id, name, role, avatar } = member;
  const router = useRouter()
  return (
    <Card sx={{ px: 2, boxShadow: 'none', borderRadius: 0, }}>
      <Stack alignItems="flex-start">
        <Typography variant="h3" sx={{ mt: 0 }}>
          {name}
        </Typography>

        <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
          {role}
        </Typography>

        <Typography sx={{ mt: 1, lineHeight: 1.8, }}>
          藏超是一位富有创新精神的健身教育家和运动教练，在健身行业拥有 20 年的经验。他是 Animal Flow 的创始人/创始人，Animal Flow 是一项独特的地面运动计划，已在 42 个国家/地区认证了 10,000 多名健身专业人士。藏超还开发了多项其他基于技能的体重训练计划，包括体重运动员，并且是一位备受追捧的主持人和内容贡献者。<br/>
          藏超花了数年时间探索和指导一系列技术，包括壶铃、奥林匹克举重、矫正运动和前后康复。然而，直到他 30 岁时才决定放下重量，只探索自重训练。他将训练方面的改变描述为他个人和职业发展的一个重要转折点：“我已经到了一个地步，我认为我太年轻了，不能一直感到如此沮丧。我一直缺少一些东西。” <br />
          从基础体操开始，藏超发现自己既受到了难以置信的挑战，也受到了启发。体操很快导致跑酷，跑酷导致霹雳舞，然后是手平衡。贯穿这些学科的一个共同点是动物运动（运动）的使用以及对“流动”的强调。
          藏超总是第一个承认他没有创造动物运动。他认为自己对这门学科的贡献是创建了一个系统化的计划，使所有年龄和技能水平的人都能轻松学习和指导这些动作。基于他之前对身体力学、解剖学和常见姿势问题的理解，他开发了特定的方法来整合动物模式和其他以体重为中心的运动，以引发特定的反应和结果。他的目标是利用这些动物运动来改善人类动物的功能和交流。<br />
          当谈到融入 Flow 组件时，藏超发现自由和可能无穷无尽的运动感觉令人难以置信。他知道其他人会感受到与他相同的直接联系。通过将所有这些整合在一起，他创建了 Animal Flow 计划及其全球灵感推动者社区。<br />
          今天，藏超仍然致力于各种基于体重的训练，但仍然利用他积累的知识来开发新的训练计划。您会看到他将壶铃、VIPR 和其他重量级重量融入他的多学科训练体系中。
        </Typography>

        <Typography variant="h5" sx={{ mt: 2 }}>资格证书</Typography>
        <Stack sx={{ px: 2, lineHeight: 1.8, }}>
          <ul>
            <li>National Academy of Sports Medicine – CPT, CES</li>
            <li>National Strength and Conditioning Association – CPT</li>
            <li>Kettlebell Athletics</li>
            <li>AAHFRP Certified Medical Exercise Specialist</li>
            <li>C.H.E.K. Exercise Coach</li>
            <li>IFPA Accredited Personal Trainer</li>
          </ul>
        </Stack>
      </Stack>
    </Card>
  );
}
