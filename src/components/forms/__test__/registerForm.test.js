import RegisterForm from '../RegisterForm'
import { screen, render, cleanup, getByLabelText } from '../../../tests/testUtils'

const registerForm = render(<RegisterForm/>)

it('renders register form', () => {
  expect(registerForm).toMatchSnapshot()
})
