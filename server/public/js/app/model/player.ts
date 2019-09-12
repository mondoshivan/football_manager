
export class Player {

    static counter: number = 0;

    readonly firstName: string;
    readonly secondName: string;
    readonly id: number;

    constructor(firstName: string, secondName: string) {
        this.id = Player.counter;
        this.firstName = firstName;
        this.secondName = secondName;
        Player.counter ++;
    }
}