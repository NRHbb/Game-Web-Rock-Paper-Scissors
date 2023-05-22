import React, { useEffect, useState, useRef } from 'react'
import { Card, Nav, Navbar, NavbarBrand, NavItem, Row, Col, Table, Container } from 'react-bootstrap'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../../services/firebase'
import { set, ref, onValue } from 'firebase/database'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'

export default function Profile () {
  const [name, setName] = useState('')
  const win = useSelector((state) => state.gameInfo.win)
  const round = useSelector((state) => state.gameInfo.round)

  useEffect(() => {
    const dbRef = ref(db, 'posts')
    onValue(dbRef, (snapshot) => {
      const newPosts = []

      snapshot.forEach((childSnapshot) => {
        newPosts.push({
          key: childSnapshot.key,
          match: childSnapshot.val().match,
          result: childSnapshot.val().result
        })
      })

      console.log(newPosts)
    })
  }, [])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.email)
      } else {
        alert('You are not Logged in')
      }
    })
  }, [])

  const createPost = () => {
    const newPostRef = ref(db, 'posts').push()
    const postData = {
      match: round,
      result: win
    }

    set(createPost, newPostRef, postData)
      .then(() => {
        alert('Post Created Successfully')
      })
      .catch((error) => {
        console.error('Error creating post:', error)
      })
  }

  return (
    <>
      <Head>
        <title>Profile Page</title>
        <link rel="stylesheet" href="/styles/Profile.css"/>
      </Head>
      <div className="Profile-bg-image">
        <Container className="mb-4">
          <Navbar>
            <NavbarBrand style={{ fontSize: '1.5rem', color: 'whitesmoke' }}>
              <Link href="/home">
                <img src="previous.png" alt="previous" style={{ height: 25, width: 25 }}/>
                Back
              </Link>
            </NavbarBrand>
            <Navbar.Collapse className="justify-content-end">
              <Nav className="flex-column">
                <NavItem>
                  <Navbar.Text style={{ fontSize: '1rem', color: 'whitesmoke' }}>Hello, {name}</Navbar.Text>
                </NavItem>
                <NavItem>
                  <Navbar.Text style={{ fontSize: '2rem', color: 'whitesmoke' }}>WELCOME BACK.</Navbar.Text>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        <Container className="mt-4 mb-4">
          <Card className="mb-2 square rounded-circle" style={{ width: '11rem' }}>
            <Card.Img cls variant="top" src="Default_pfp.png"/>
          </Card>

          <div className="mt-3 ms-2" style={{ color: 'whitesmoke' }}>
            <h3 className="ms-4">{name}</h3>
          </div>
        </Container>

        <Container className="mt-4 mb-5">
          <div style={{ backgroundColor: 'gray' }}>
            <Row>
              <Col md>
                <Table striped bordered hover size="sm" style={{ color: 'whitesmoke', textAlign: 'center' }}>
                  <thead>
                    <tr>
                      <th>GamePlayed</th>
                      <th>Menang</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{round}</td>
                      <td>{win}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}
