import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import logo from '/logo.png'
// import Head from "next/head";
import Image from 'next/image'
import { auth } from '../../services/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

import { useRouter } from 'next/router'

export default function NavigationBar () {
  const router = useRouter()
  const [user, setUser] = useState('')

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email)
      } else {
        setUser('')
      }
    })
  }, [])

  const handleLogout = (e) => {
    e.preventDefault()
    signOut(auth)
      .then(() => {
        console.log('you are logged out')
        router.push('/')
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  return (
        <>
            <Navbar variant="dark" className='transparent-navbar text-warning py-3' sticky="top">
                <div className="container-fluid p-1 ms-5 me-5">
                    <Navbar.Brand href="/home" className="text-warning d-flex align-content-center">
                        <Image alt="" src={'/logo.png'} width={30} height={30} className="d-inline-block align-top" /> <span className="fw-bold">The Game</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto d-flex nav-content">
                            <Nav.Link href="#home" className="link-warning text-light">
                                Home
                            </Nav.Link>
                            <Nav.Link href="#about" className="link-warning text-light">
                                About
                            </Nav.Link>
                            <Nav.Link href="#features" className="link-warning text-light">
                                Features
                            </Nav.Link>
                            <Nav.Link href="#requirements" className="link-warning text-light">
                                Requirements
                            </Nav.Link>
                            <Nav.Link href="#quotes" className="link-warning text-light">
                                Quotes
                            </Nav.Link>
                        </Nav>
                        {user
                          ? (
                            <NavDropdown title={user} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#" onClick={handleLogout}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                            )
                          : (
                            <Nav className="nav-content">
                                <Nav.Link href="/login" className="link-warning text-light">
                                    Login
                                </Nav.Link>
                                <Nav.Link href="/register" className="link-warning text-light">
                                    Register
                                </Nav.Link>
                            </Nav>
                            )}
                    </Navbar.Collapse>
                </div>
            </Navbar>
            {/* <Navbar variant="dark" className='transparent-navbar py-3' fixed="top" >
                <div className="container-fluid">
                    <Navbar.Brand href="#home" className='me-4 ms-5'>
                        <Image src={logo} width={30} height={30} alt="" />
                    </Navbar.Brand>
                    <Nav className=" ms-5 me-auto text-white nav-content">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#requirements">Requirements</Nav.Link>
                        <Nav.Link href="#quotes">Quotes</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto text-white nav-content mx-lg-5 ">
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </div>
            </Navbar> */}
        </>
  )
}
