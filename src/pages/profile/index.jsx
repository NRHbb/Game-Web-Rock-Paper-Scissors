import React, { useEffect, useState, useRef } from 'react'
import { Card, Row, Col, Table, Container, Image, Button } from 'react-bootstrap'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../../services/firebase'
import { set, ref, onValue } from 'firebase/database'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/layout'
import PDFRenderer from '@/components/media/PDFRenderer'

export default function Profile () {
  const [name, setName] = useState('')
  const win = useSelector((state) => state.gameInfo.win)
  const lose = useSelector((state) => state.gameInfo.lose)
  const round = useSelector((state) => state.gameInfo.round)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.email)
      } else {
        alert('You are not Logged in')
      }
    })
  }, [])

  return (
        <>
            <Layout>
            <Head>
                <title>Profile Page</title>
            </Head>
            <div className="Profile-bg-image">
                <Container className="mt mb-">
                    <Row>
                        <Col md={2}>
                            <Card className="mb-2 square rounded-circle" style={{ width: '11rem' }}>
                                <Card.Img cls variant="top" src="Default_pfp.png"/></Card>
                        </Col>
                        <Col md={6}>
                            <div className="mt-5" style={{ color: 'whitesmoke', textAlign: 'start' }}>
                                <h2>{name}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reprehenderit?</p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <h1 className="ms-5" style={{ color: 'orange' }}>PROFILE</h1>
                            <p></p>
                            <p className="ms-5" style={{ color: 'white' }}>Share your Profile: </p>
                            <div className="ms-5" style={{ justifyContent: 'space-between', display: 'flex' }}>
                              <Link href="https://facebook.com">
                                <Image className='thumbnail' alt='' src={'facebook-48.png'}/>
                              </Link>
                              <Link href="https://twitter.com">
                                <Image className='thumbnail' alt='' src={'twitter-48.png'}/>
                              </Link>
                              <Link href="https://instagram.com">
                                <Image className='thumbnail' alt='' src={'instagram-48.png'}/>
                              </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5" style={{ width: '1350px', height: '400px' }}>
                    <div style={{ backgroundColor: 'gray', height: '570px', borderRadius: '10px' }}>
                        <Row className='mb-3'>
                            <Col md={3}>
                                <h1 className="mt-3 mb-4 ms-4" style={{ color: 'orange' }}>Performance</h1>
                                <Table className="mt-5 mb-4 ms-4" striped bordered hover size="sm" style={{ color: 'whitesmoke', textAlign: 'center' }}>
                                    <thead>
                                        <tr>
                                            <th>Match</th>
                                            <th>Win</th>
                                            <th>Lose</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{round}</td>
                                            <td>{win}</td>
                                            <td>{lose}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={{ span: 2, offset: 1 }}>
                            <h2 className="mt-3 ms-5" style={{ color: 'orange' }}>History</h2>
                            </Col>
                            <Col className="mt-5" md={{ span: 6, offset: 4 }} style={{ backgroundColor: 'white', width: '700px', height: '400px', position: 'absolute', borderRadius: '10px', top: '340px', left: '150px' }}>
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-4 ms-2">
                            <Col md={3}>
                                <h1 style={{ color: 'orange' }}>Gemes</h1>
                                <Link href="/game-detail">
                                  <Image className="rounded" alt="" src="game-list-1.png" style={{ width: '90px', height: '80px' }} />
                                </Link>
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-4 ms-2">
                            <Col md={3} style={{ color: 'orange' }}>
                                <PDFRenderer />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            </Layout>
        </>
  )
}
