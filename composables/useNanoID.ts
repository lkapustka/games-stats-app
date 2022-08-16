import { nanoid } from 'nanoid'

export const useNanoID = () => {
  const nanoID = nanoid()

  return { nanoID }
}
