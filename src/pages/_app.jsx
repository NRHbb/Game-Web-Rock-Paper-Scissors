import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Globals.css'
import '../styles/Home.css'
import '../styles/Register.css'
import '../styles/Media.css'
import '../styles/Landing.css'
import { Provider } from 'react-redux'
import store from '../store/store'

export default function App ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
