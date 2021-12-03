import {initializeApp} from 'firebase/app'

import firebaseConfig from './FirebaseConfig'

const firebase = initializeApp(firebaseConfig)

export default firebase