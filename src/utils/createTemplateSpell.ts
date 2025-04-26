type Tradition = "Тьма" | "Теургия" | "Стихии" | "Свет" | "Природа" | "Мистика" | "Аркана" | "Хаос"

// interface SpellInfo {
//     "name": string +
//     "circle": 1 | 2 | 3 | 4,
//     "traditions": Traditions,
//     "type": string,
//     "pronunciation": string,
//     "range": string,
//     "effect": string,
//     "critical_effect": string
//     "duration"?: string,
//     "square"?: string
// }

export const createTemplateSpell = ({ name, effect, type }: SpellInfo, diceBonus: string) => {
    const template = '&{template:DnD35StdRoll}'
    const spellFlag = '{{spellflag=true}}'
    const characterName = '{{name= ? }}'
    const spellTitle = `{{**${name}**}}`
    const diseRoll = `{{${type}: [[ ?{кубов?| 20,1d20cs>[[20]]| 24,1d24cs>[[23]]| 30,1d30cs>[[28]]| 16, 1d16cs>[[17]]| 14, 1d14cs>[[16]]| 12, 1d12cs>[[15]]} + ${diceBonus}  ]] }}`
    const notes = `{{notes=${effect}}}`
  
    return `${template} ${spellFlag} ${characterName} ${spellTitle} ${diseRoll} ${notes}`
}