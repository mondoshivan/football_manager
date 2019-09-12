define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Player {
        constructor(firstName, secondName) {
            this.id = Player.counter;
            this.firstName = firstName;
            this.secondName = secondName;
            Player.counter++;
        }
    }
    Player.counter = 0;
    exports.Player = Player;
});
