import Head from 'next/head'
import MainLayout from '../layouts/main'
import AboutWhat from '../sections/about/AboutWhat'

interface Props {
  datasource: any[]
}

AboutPage.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

export default function AboutPage({ datasource }: Props) {
  return (
    <>
      <Head>
        <title>About | Web3 APP Starter</title>
      </Head>

      <AboutWhat />
    </>
  )
}


export async function getServerSideProps() {
  const datasource: any[] = []
  
  return {
    props: {
      datasource,
    }
  }
}
