import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import store from '../store/store'
import { Provider } from 'react-redux'

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export * from '@testing-library/react'
export { StoreProvider as render }
