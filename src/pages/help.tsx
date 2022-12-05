import Head from 'next/head'
import MainLayout from '../layouts/main'
import HelpWhat from '../sections/help/HelpWhat'

interface Props {
  datasource: any[]
}

HelpPage.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

export default function HelpPage({ datasource }: Props) {
  return (
    <>
      <Head>
        <title>Help | Web3 APP Starter</title>
      </Head>

      <HelpWhat />
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
