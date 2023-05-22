/** @jest-environment jsdom */
import React from 'react'
import { render } from './testUtils.js'
import { useRouter } from 'next/router'
import GamePage from '@/components/game-page/GamePage.jsx'

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

describe('render test', () => {
  it('renders home page without crashing', () => {
    const game = render(<GamePage />)
    expect(game).toMatchSnapshot()
  })
})
