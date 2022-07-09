import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: runtimeConfig.firebaseApiKey,
    authDomain: runtimeConfig.firebaseAuthDomain,
    projectId: runtimeConfig.firebaseProjectId,
    storageBucket: runtimeConfig.firebaseStorageBucket,
    messagingSenderId: runtimeConfig.firebaseMessagingSenderId,
    appId: runtimeConfig.firebaseAppId,
    measurementId: runtimeConfig.firebaseMeasurementId
  }

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  initUser()

  return {
    provide: {
      firebaseApp: app,
      firebaseAuth: auth
    }
  }
})
