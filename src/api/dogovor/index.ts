import data from '../../data/dogovor.json'
export function getDogovorData() {
    return new Promise<{ sections: any[] }>(resolve => {
        setTimeout(resolve, 0, data)
    })
}
type CircleNumber = {
    number: string,
    description: string
}
type ITask = {
    number: string,
    string: string
}
export type IConscious = {
    numbersText: string,
    importantText: string,
    planet: string,
    energetika: string,
    stone: string,
    color: string,
    day: string,
    theme: string,
    circleNumbers: CircleNumber[],
    circleText: string,
    tasks: ITask[]
    positive: string,
    negative: string
}