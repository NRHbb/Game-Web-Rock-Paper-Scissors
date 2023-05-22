/** @jest-environment jsdom */
import React from 'react'
import { render, screen } from './testUtils.js'
import RegisterPage from '../pages/register/index.jsx'
import { useRouter } from 'next/router'
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
    const registerPage = render(<RegisterPage />)
    expect(registerPage).toMatchSnapshot()
  })
})
