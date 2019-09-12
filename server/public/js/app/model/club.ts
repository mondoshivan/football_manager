
export class Club {

    static counter: number = 0;

    readonly name: string;
    readonly id: number;

    constructor(name: string) {
        this.id = Club.counter;
        this.name = name;
        Club.counter ++;
    }
}