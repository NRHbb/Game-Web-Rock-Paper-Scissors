import { Container } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../services/firebase'
import Head from 'next/head'
import Layout from '../../components/layout'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import AudioPlayer1 from '../../components/media/AudioPlayer1'

export default function Home () {
  const router = useRouter()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    if (!user.user) {
      router.push('/login')
    }
  }, [user, router])

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <div className="home-bg-image">
        <AudioPlayer1/>
        <Container className="d-flex flex-column align-content-center justify-content-center text-center text-light min-vh-100">
          <h1 className="mb-4 home-title">Are you ready to play a game?</h1>
          <p className="mb-4 home-subtitle">Explore our games</p>
          <div className="info">
            <Link className="btn btn-warning" href="/game-list">
              Game List
            </Link>
          </div>
        </Container>
      </div>
    </Layout>
  )
}
