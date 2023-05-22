import Form from '../Form'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

it('renders email form', () => {
  render(<Form/>)
  const email = screen.getByLabelText(/Email/i)
  expect(email).toBeInTheDocument()
})

it('renders login button', () => {
  render(<Form/>)
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
})
