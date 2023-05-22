import { Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import LoginForm from '../../components/forms/LoginForm'
import Head from 'next/head'
import React from 'react'

export default function Login () {
  return (
    <>
      <Head >
        <title data-testid="header">Login to your account</title>
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
                  Login to your account
                </h1>
                <p className="text-center">
                  Dont have an account?
                  <Link
                    href="/register"
                    className="text-decoration-none text-warning link-light"
                  >
                    {' '}
                    Register here
                  </Link>
                </p>
                <LoginForm />
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
    </>
  )
}
