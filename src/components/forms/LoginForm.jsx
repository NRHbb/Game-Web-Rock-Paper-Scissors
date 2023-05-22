import React, { useRef, useState } from 'react'
import { Form, Button, Container, Alert } from 'react-bootstrap'
import { auth } from '../../services/firebase'
import { useRouter } from 'next/router'
import { BsGoogle, BsFacebook } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess, loginWithGoogleSuccess } from '../../store/userSlice'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, FacebookAuthProvider, onAuthStateChanged } from 'firebase/auth'
import Link from 'next/link'
import { finishLoad, loadButton } from '../../store/buttonSlice'

export default function RegisterForm () {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const loading = useSelector((state) => state.button.loading)
  const router = useRouter()
  const dispatch = useDispatch()

  const handleLoginWithEmail = async (e) => {
    e.preventDefault()
    dispatch(loadButton(true))

    try {
      const user = await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      dispatch(loginSuccess(user))
      console.log(user)
      router.push('/home')
    } catch (err) {
      const errorCode = err.code
      const errorMessage = err.message
      console.error(errorCode, errorMessage)
      alert('Sign in failed. Username email not found or wrong password, please try again!')
    } finally {
      dispatch(finishLoad(false))
    }
  }

  const handleLoginWithGoogle = (e) => {
    e.preventDefault()
    dispatch(loadButton(true))
    const providerGoogle = new GoogleAuthProvider()
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        alert('sign in with google account successfull')
        onAuthStateChanged(auth, (user) => {
          if (user) {
            dispatch(loginWithGoogleSuccess(user))
          }
        })
        router.push('/home')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.error(errorCode, errorMessage)
        alert('Sign in with google account failed!')
      })
      .finally(() => {
        dispatch(finishLoad(false))
      })
  }

  const handleLoginWithFacebook = (e) => {
    e.preventDefault()
    dispatch(loadButton(true))
    const providerFacebook = new FacebookAuthProvider()
    signInWithPopup(auth, providerFacebook)
      .then((result) => {
        // The signed-in user info.
        const user = result.user

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result)
        const accessToken = credential.accessToken

        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user)
        alert('sign in with facebook account successfull')
        dispatch(loginSuccess(user))
        router.push('/home')
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error)
        // ...
        alert('Sign in with facebook account failed!')
      })
      .finally(() => {
        dispatch(finishLoad(false))
      })
  }

  return (
    <Container className="mt-2 p-lg-5 pt-0">
      <Form>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" ref={emailRef} required />
        </Form.Group>
        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={passwordRef} required />
        </Form.Group>
        <Link href="/forgot-password" className="text-decoration-none text-warning link-light">
          {' '}
          Forgot password?
        </Link>
        <br></br>
        <Button className="w-50 mt-3 mb-3" type="submit" variant="outline-warning" disabled={loading} onClick={handleLoginWithEmail}>
          {loading ? 'Logging in...' : 'Sign In'}
        </Button>
        <div>
          <p>Or login with:</p>
          <Button type="submit" variant="outline-warning" className="me-3" disabled={loading} onClick={handleLoginWithGoogle}>
            <BsGoogle />
          </Button>
          <Button type="submit" variant="outline-warning" disabled={loading} onClick={handleLoginWithFacebook}>
            <BsFacebook />
          </Button>
        </div>
      </Form>
      {error && (
        <Alert variant="danger" className="mt-3">
          {error}
        </Alert>
      )}
    </Container>
  )
}
