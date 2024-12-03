export interface Character {
    id: string
    folderId: string
    name: string
}

export interface CharacterFolders {
    id: string
    name: string
    items: Character[]
}