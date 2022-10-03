import { User as FirebaseUser } from 'firebase/auth'

export const useFirebaseUser = () =>
  useState<FirebaseUser | null>('firebaseUser', () => null)

export const useSidenavVisibility = () =>
  useState('sidenavVisibility', () => false)

export const useSidenavWidth = () => useState('sidenavWidth', () => '20rem')
