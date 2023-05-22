/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Button, Container, Row, Card } from 'react-bootstrap'
// import evant from '/evan-lahti.jpg'
// import jada from '/jada-griffin.jpg'
// import aaron from '/aaron-williams.jpg'
// import Head from "next/head";
import Image from 'next/image'

export default function Quotes () {
  return (
    <>
      {/* <Head>
                <link rel="stylesheet" href="/landing.css" />
            </Head> */}
      <section id="quotes">
        <div className="Quotes">
          <Container className="lg">
            <Row>
              <div className="col-lg text-area d-flex flex-column justify-content-center">
                <div className="quotes-area">
                  <h1 className="text-uppercase quotes-title text-white ms-5">
                    top scores
                  </h1>
                  <div className="ms-5 text-white">
                    This top score from various games provided
                    <br />
                    on this platform
                  </div>
                  <div>
                    <Button
                      href="#"
                      variant="warning"
                      className="btn fw-bold ms-5 text-center"
                    >
                      see more
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <Card
                  style={{ width: '28rem', height: '12rem' }}
                  className="bg-dark mt-4 c-one"
                >
                  <Card.Body className="d-flex flex-column header">
                    <div className="d-flex">
                      <div className="Image-container ">
                        <Image
                          src={'/evan-lahti.jpg'}
                          width={50}
                          height={50}
                          alt=""
                          className="img"
                        />
                      </div>
                      <div className="d-flex flex-column  ms-3 name lh-1">
                        <Card.Title className="name text-warning">
                          Evan Lahti
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          PC Gamer
                        </Card.Subtitle>
                        {/* <Image src={twitter} alt="" /> */}
                      </div>
                      {/* <Image style={{ width: "50px" }} src={twitter} className="twitter flex-row col-2 offset-1 offset-md-0 offset-lg-1  mb-3" alt="" /> */}
                    </div>
                    <div className="flex-column p-2">
                      <Card.Text className="text-white">
                        <q>One of my gaming highlight of the year</q>
                        <br />
                        <small>June 18, 2021</small>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: '28rem', height: '12rem' }}
                  className="bg-dark mt-4"
                >
                  <Card.Body className="d-flex flex-column header">
                    <div className="d-flex">
                      <div className="Image-container">
                        <Image
                          src={'/jada-griffin.jpg'}
                          width={50}
                          height={50}
                          alt=""
                          className="img"
                        />
                      </div>
                      <div className="d-flex flex-column ms-3 name lh-1">
                        <Card.Title className="name text-warning">
                          Jada Griffin
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Nerdreactor
                        </Card.Subtitle>
                        {/* <Image src={twitter} alt="" /> */}
                      </div>
                    </div>
                    <div className="flex-column p-2">
                      <Card.Text className="text-white">
                        <q>
                          The next big thing in the world of streaming and
                          survival games
                        </q>
                        <small>July 10, 2021</small>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: '28rem', height: '12rem' }}
                  className="bg-dark mt-4 c-two"
                >
                  <Card.Body className="d-flex flex-column header">
                    <div className="d-flex">
                      <div className="Image-container">
                        <Image
                          src={'/aaron-williams.jpg'}
                          width={50}
                          height={50}
                          alt=""
                          className="img"
                        />
                      </div>
                      <div className="d-flex flex-column ms-3 name lh-1">
                        <Card.Title className="name text-warning">
                          Aaron Williams
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Nerdreactor
                        </Card.Subtitle>
                        {/* <Image src={twitter} alt="" /> */}
                      </div>
                    </div>
                    <div className="flex-column p-2">
                      <Card.Text className="text-white">
                        <q>
                          Snoop Dogg playing the wildly entertaining 'SOS' is
                          ridiculous
                        </q>
                        <small>December 24, 2018</small>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}
