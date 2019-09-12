
import { Club } from "./club";

export class ClubFactory {

    static createClub() {
        return new Club('first');
    }
}