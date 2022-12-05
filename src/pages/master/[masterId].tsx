import Head from 'next/head'
import MasterInfo from 'src/sections/master/MasterInfo'
import MainLayout from '../../layouts/main'
import MasterHero from '../../sections/master/MasterHero'
import MasterList from '../../sections/master/MasterList'

interface Props {
  overview: any[]
}

MasterInfoPage.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

export default function MasterInfoPage({ overview }: Props) {
  return (
    <>
      <Head>
        <title>认证教练 | Animal Flow 中国</title>
      </Head>

      <MasterHero />

      <MasterInfo />
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
