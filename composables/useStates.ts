import { User as FirebaseUser } from 'firebase/auth'

export const useFirebaseUser = () => useState<FirebaseUser | null>('firebaseUser', () => null)
