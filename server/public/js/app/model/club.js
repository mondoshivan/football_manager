define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Club {
        constructor(name) {
            this.id = Club.counter;
            this.name = name;
            Club.counter++;
        }
    }
    Club.counter = 0;
    exports.Club = Club;
});
