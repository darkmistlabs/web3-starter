import Head from 'next/head'
import MainLayout from '../../layouts/main'
import MasterHero from '../../sections/master/MasterHero'
import MasterList from '../../sections/master/MasterList'

interface Props {
  overview: any[]
}

MasterListPage.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

export default function MasterListPage({ overview }: Props) {
  return (
    <>
      <Head>
        <title>认证教练 | Animal Flow 中国</title>
      </Head>

      <MasterHero />

      <MasterList />
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
