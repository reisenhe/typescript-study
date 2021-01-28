abstract class Game {
    constructor() {}
    abstract getPrice(): void
}
class ACTGame extends Game {
    constructor() {
        super()
    }
    getPrice(){
        console.log(279)
    }
}