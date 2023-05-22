/** @jest-environment jsdom */
import React from 'react'
import { render, screen } from './testUtils.js'
import RegisterPage from '../pages/register/index.jsx'
import { useRouter } from 'next/router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import 'react-bootstrap'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

const mockRouter = {
  route: '/mock-route',
  basePath: '',
  pathname: '/mock-route',
  query: {},
  asPath: '/mock-route'
}

useRouter.mockReturnValue(mockRouter)

jest.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: jest.fn(),
  getAuth: jest.fn()
}))

describe('render test', () => {
  it('renders register page without crashing', () => {
    render(<RegisterPage />)
  })
  // it('contains create an account text', () => {
  //   render(<RegisterPage/>)
  //   const headText = screen.getByText('Create an account')
  //   expect(headText).toBeInTheDocument()
  // })
})

describe('form test', () => {
  it('contains email input', () => {
    render(<RegisterPage />)
    const emailInput = screen.getByLabelText('Email')
    expect(emailInput).toBeInTheDocument()
  })
  it('contains password input', () => {
    render(<RegisterPage />)
    const passwordInput = screen.getByLabelText('Password')
    expect(passwordInput).toBeInTheDocument()
  })
  it('contains Register button', () => {
    render(<RegisterPage/>)
    const button = screen.getByRole('button', { name: 'Register' })
    expect(button).toBeInTheDocument()
  })
})
