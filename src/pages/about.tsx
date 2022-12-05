import Head from 'next/head'
import MainLayout from '../layouts/main'
import AboutHero from '../sections/about/AboutHero'
import AboutWhat from '../sections/about/AboutWhat'
import AboutTraining from '../sections/about/AboutTraining'
import AboutContact from '../sections/about/AboutContact'

interface Props {
  overview: any[]
}

AboutPage.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

export default function AboutPage({ overview }: Props) {
  return (
    <>
      <Head>
        <title>关于 | Animal Flow 中国</title>
      </Head>

      <AboutHero />
      <AboutWhat />
      <AboutTraining />
      <AboutContact />
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
