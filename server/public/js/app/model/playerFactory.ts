
import { Player } from "./player";

export class PlayerFactory {

    static createPlayer() {
        return new Player('first', 'last');
    }
}