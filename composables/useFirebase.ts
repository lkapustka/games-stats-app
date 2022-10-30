import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  AuthError,
} from 'firebase/auth'

export const createUser = async (email: string, password: string) => {
  const auth = getAuth()
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error: AuthError) => {
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
  ).catch((error: AuthError) => {
    const errorCode = error.code
    const errorMessage = error.message
  })

  return userCredential
}

export const initUser = () => {
  const auth = getAuth()
  const firebaseUser = useFirebaseUser()

  const router = useRouter()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      firebaseUser.value = user
    } else {
      // User is signed out
      firebaseUser.value = null
      router.push('/')
    }
  })
}

export const signOutUser = async () => {
  const auth = getAuth()
  return await auth.signOut()
}
