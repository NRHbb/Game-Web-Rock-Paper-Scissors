import { useRef, useState } from 'react'
import { Form, Button, Container, Alert } from 'react-bootstrap'
import { auth } from '../../services/firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'
import { loginWithGoogleSuccess } from '../../store/userSlice'
import { BsGoogle, BsFacebook } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { finishLoad, loadButton } from '../../store/buttonSlice'

export default function RegisterForm () {
  const dispatch = useDispatch()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const [error, setError] = useState('')
  const loading = useSelector((state) => state.button.loading)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      dispatch(loadButton(true))
      const user = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      router.push('/login')
    } catch (error) {
      setError(error.message)
    }

    dispatch(finishLoad(false))
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
        alert(`Sign in Error: ${errorMessage}`)
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
    <Container className="mt-2 p-lg-5 pt-0 d-flex flex-column justify-content-center align-content-center">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" ref={emailRef} required placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" ref={passwordRef} required placeholder="Enter your password" />
        </Form.Group>
        <Form.Group controlId="confirmPassword" className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" ref={confirmPasswordRef} required placeholder="Confirm your password " />
        </Form.Group>
        <Button className="w-50 mt-3" type="submit" variant="outline-warning" disabled={loading}>
          {loading ? 'Creating your account...' : 'Register'}
        </Button>
        <div>
          <p className="mt-3">Or login with:</p>
          <Button variant="outline-warning" className="me-3" onClick={handleLoginWithGoogle}>
            <BsGoogle />
          </Button>
          <Button variant="outline-warning" onClick={handleLoginWithFacebook}>
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
