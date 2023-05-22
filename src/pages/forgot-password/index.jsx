import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../services/firebase'
import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import { Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import ResetPassForm from '../../components/forms/ResetPassForm'

export default function ForgotPassword () {
  const email = useRef()
  const router = useRouter()

  const handleForgotPassword = (e) => {
    sendPasswordResetEmail(auth, email.current.value)
      .then(() => {
        alert(
          `Berhasil mengirim reset link ke ${email.current.value}. silahkan login dengan password yang baru`
        )
        router.push('/login')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error(errorCode, errorMessage)
        alert('Silahkan masukan email dengan benar')
      })
  }
  return (
    <Layout>
      <Head>
        <title>Passsword Recovery</title>
      </Head>
      <div className="bg-image">
        <div className="container-fluid">
          <Row>
            <div className="bg-right p-5 col-lg">
              <Container
                className="d-flex flex-column align-content-center justify-content-center text-light min-vh-100"
                id="register"
              >
                <h1 className="text-center text-warning">
                  Forgot Password?
                </h1>
                <p className="text-center">
                  Remember your account?
                  <Link
                    href="/login"
                    className="text-decoration-none text-warning link-light"
                  >
                    {' '}
                    Login here
                  </Link>
                </p>
                <ResetPassForm />
              </Container>
            </div>
            <div className="p-5 col-lg bg-left">
              <Container className="d-flex flex-column justify-content-center align-content-center min-vh-100 text-center text-light">
                <h1>
                  Play <span className="text-warning">The Game</span> with all
                  your courages
                </h1>
                <p>Get the highest score and defeat all the opponent</p>
              </Container>
            </div>
          </Row>
        </div>
      </div>
    </Layout>
  )
}
