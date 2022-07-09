export default defineNuxtPlugin(() => {
    addRouteMiddleware('auth', () => {
        const { $firebaseAuth } = useNuxtApp()

        console.log($firebaseAuth?.currentUser)

        if(!$firebaseAuth?.currentUser?.uid) {
            return abortNavigation()
        }
    })
  })
