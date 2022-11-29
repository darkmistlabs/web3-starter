import { useState } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import MainLayout from '../layouts/main'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import HomeHero from '../sections/home/Hero'
import HomeAbout from '../sections/home/About'
import HomeMaster from '../sections/home/Master'

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
