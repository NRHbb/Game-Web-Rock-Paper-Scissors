import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBMOpFEyAmmBi-qLI1lGV4wEJh7Ew0yoVU',
  authDomain: 'the-game-fca98.firebaseapp.com',
  projectId: 'the-game-fca98',
  storageBucket: 'the-game-fca98.appspot.com',
  messagingSenderId: '1046866122853',
  appId: '1:1046866122853:web:063d28cba5a46fcad98e8c',
  databaseURL: 'https://the-game-fca98-default-rtdb.asia-southeast1.firebasedatabase.app'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const storage = getStorage(app)
const db = getDatabase(app)

export { auth, storage, db }

export default app
