define(["require", "exports", "./player"], function (require, exports, player_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PlayerFactory {
        static createPlayer() {
            return new player_1.Player('first', 'last');
        }
    }
    exports.PlayerFactory = PlayerFactory;
});
