import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { auth } from '../../services/firebase'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/userSlice'
import Image from 'next/image'

export default function NavbarTop () {
  const user = useSelector((state) => state.user.user)
  const router = useRouter()
  const dispatch = useDispatch()

  const handleLogout = (e) => {
    e.preventDefault()
    signOut(auth)
      .then(() => {
        console.log('you are logged out')
        dispatch(logout())
        router.push('/')
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  return (
    <Navbar expand="lg" sticky="top" className="navbar-dark text-warning shadow-lg">
      <div className="container-fluid p-1 ms-5 me-5">
        <Navbar.Brand href="/home" className="text-warning d-flex align-content-center">
          <Image alt="" src="logo.svg" width={30} height={30} className="d-inline-block align-top" /> <span className="fw-bold">The Game</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-between">
            <Link href="/home" className="me-3 link-warning text-light">
              Home
            </Link>
            <Link href="/game-list" className="link-warning text-light">
              Game List
            </Link>
          </Nav>
          {!user
            ? (
            <div>
              <Link href="/login" className="me-3 link-light text-warning">
                Log in
              </Link>
              <Link href="/register" className="link-light text-warning">
                Register
              </Link>
            </div>
              )
            : (
            <NavDropdown title={user.email} id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
              )}
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
