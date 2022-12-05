import Head from 'next/head'
import MainLayout from '../layouts/main'
import HomeHero from '../sections/home/HomeHero'
import HomeAbout from '../sections/home/HomeAbout'
import HomeMaster from '../sections/home/HomeMaster'

interface Props {
  navs: any[]
  tokens: any[]
  overview: any[]
}

HomePage.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

export default function HomePage({ navs, tokens, overview }: Props) {
  return (
    <>
      <Head>
        <title>首页 | Animal Flow 中国</title>
      </Head>
      <HomeHero />
      <HomeAbout />
      {/* <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} /> */}
      <HomeMaster />
    </>
  )
}


export async function getServerSideProps() {
  const overview: any[] = []
  
  return {
    props: {
      overview,
    }
  }
}
