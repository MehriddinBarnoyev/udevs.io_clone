import React from 'react'
import Layout from '../../../components/Layout'
import { Typography } from '@mui/material'
import { useRouter } from 'next/router'


export default function Home() {
    const router = useRouter()
  return (
    <Layout>
      <Typography variant='h4'> Project: {router.query.projects}</Typography>
    </Layout>
  )
}
