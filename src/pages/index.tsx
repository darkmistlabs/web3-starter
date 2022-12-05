import Head from 'next/head'
import MainLayout from '../layouts/main'
import HomeHero from '../sections/home/HomeHero'

interface Props {
  overview: any[]
}

HomePage.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

export default function HomePage({ overview }: Props) {
  return (
    <>
      <Head>
        <title>Home | Web3 APP Starter</title>
      </Head>
      <HomeHero />
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
