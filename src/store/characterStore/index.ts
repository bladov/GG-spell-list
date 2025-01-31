import type { Character, CharacterFolders } from './type'
import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useCharacterStore = defineStore('character', () => {
  const currentCharacter = storage.defineItem<Character | null>(
    'local:currentCharacter',
    {
      fallback: null,
    },
  )

  const characterFolders = storage.defineItem<CharacterFolders[]>(
    'local:currentCharacter',
    {
      fallback: [],
    },
  )

  return {
    currentCharacter,
    characterFolders,
  }
})
