import React, { useRef, useState } from 'react'
import { Form, Button, Container, Alert } from 'react-bootstrap'
import { auth } from '../../services/firebase'
import { useRouter } from 'next/router'
import { sendPasswordResetEmail } from 'firebase/auth'

export default function RegisterForm () {
  const emailRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleForgotPassword = (e) => {
    setLoading(true)
    sendPasswordResetEmail(auth, emailRef.current.value)
      .then(() => {
        alert(
          `Berhasil mengirim reset link ke ${emailRef.current.value}. silahkan login dengan password yang baru`
        )
        router.push('/login')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error(errorCode, errorMessage)
        alert('Silahkan masukan email dengan benar')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Container className="mt-2 p-lg-5 pt-0">
      <Form>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Input your email</Form.Label>
          <Form.Control type="email" ref={emailRef} required />
        </Form.Group>
        <p>
          Reset link will generate and sent to your email after this proccess
        </p>
        <br></br>
        <Button
          className="w-50 mt-3 mb-3"
          type="submit"
          variant="outline-warning"
          disabled={loading}
          onClick={handleForgotPassword}
        >
          {loading ? 'Sending to your email address...' : 'Reset Password'}
        </Button>
      </Form>
      {error && (
        <Alert variant="danger" className="mt-3">
          {error}
        </Alert>
      )}
    </Container>
  )
}
