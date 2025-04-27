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

const getDiceByCube = (dice: '12' | '14' | '16' | '20' | '24' | '30' = '20') => {
    switch (dice) {
        case '12':
            return '1d12cs>[[15]]'
        case '14':
            return '1d14cs>[[16]]'
        case '16':
            return '1d16cs>[[17]]'
        case '20':
            return '1d20cs>[[20]]'
        case '24':
            return '1d24cs>[[23]]'
        case '30':
            return '1d30cs>[[28]]'
        default:
            return '1d20cs>[[20]]'
    }
}

const diceRoll = (cube: Cube = '20', diceBonus: string) => {
    const cubeRoll = getDiceByCube(cube)

    return `[[ ${cubeRoll} + ${diceBonus}  ]]`
}

export const createTemplateSpell = ({ name, effect, type, circle, traditions, pronunciation, range, duration, square, critical_effect }: SpellInfo, cube: Cube, diceBonus: string) => {
    const template = '&{template:DnD35StdRoll}'
    const spellFlag = '{{spellflag=true}}'
    // const characterName = '{{name=@{selected|?}}}'
    const spellTitle = `{{***${name}***}}`
    const diseRoll = `{{***${type}***: ${diceRoll(cube, diceBonus)} }}`
    const notes = `{{notes=***Эффект***: ${effect}}}`
    const traditionsTitle = `{{***Традиция***: ${traditions}}}`
    const pronunciationTitle = `{{***Произношение***: ${pronunciation}}}`
    const rangeTitle = `{{***Дальность***: ${range}}}`
    const durationTitle = `{{***Длительность***: ${duration || '-'}}}`
    const squareTitle = `{{***Область***: ${square || '-'}}}`
    const criticalEffectTitle = `{{***Крит эффект***: ${critical_effect}}}`
    const circleTitle = `{{***Круг***: ${circle}}}`

    return `${template} ${spellFlag} ${spellTitle} ${diseRoll} ${notes} ${traditionsTitle} ${circleTitle} ${pronunciationTitle} ${rangeTitle} ${durationTitle} ${squareTitle} ${criticalEffectTitle}`
}