define(["require", "exports", "./club"], function (require, exports, club_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ClubFactory {
        static createClub() {
            return new club_1.Club('first');
        }
    }
    exports.ClubFactory = ClubFactory;
});
