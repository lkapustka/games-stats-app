import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'

export const createUser = async (email: string, password: string) => {
  const auth = getAuth()
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
  })

  return userCredential
}

export const signInUser = async (email: string, password: string) => {
  const auth = getAuth()
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
  })

  return userCredential
}

export const initUser = async () => {
  const auth = getAuth()
  const firebaseUser = useFirebaseUser()
  firebaseUser.value = auth.currentUser

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid
    } else {
      // User is signed out
    }

    firebaseUser.value = user
  })
}

export const signOutUser = async () => {
  const auth = getAuth()
  const result = await auth.signOut()

  return result
}
