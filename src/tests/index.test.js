/** @jest-environment jsdom */
import React from 'react'
import { render } from '@testing-library/react'
import Home from '../pages/index'
import GamePage from '@/components/game-page/GamePage'

test('renders without crashing', () => {
  render(<Home />)
  render(<GamePage />)
})
