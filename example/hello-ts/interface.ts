type DarkGame = {
    name: string,
    hard: number
}
interface RPGGame {
    name: string,
    role: string
}
const cbpk2077: RPGGame = {
    name: 'cyberpunk',
    role: 'V'
}

interface IdleGame {
    name: string,
    devs: number
}
interface IdleGame {
    cost: number
}
const HollowKn: IdleGame = {
    name: 'Hollow Knight',
    devs: 3,
    cost: 99
}

interface Game {
    name: string,
    sayCool(): void
}
class ACTGame implements Game {
    name: string;
    constructor(name:string) {
        this.name = name
    }
    sayCool() {
        console.log('this game is really cool')
    }
    sayHi() {
        console.log('hi')
    }
}