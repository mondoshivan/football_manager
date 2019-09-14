define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function fizzBuzz(n) {
        let output = "";
        for (let i = 1; i <= n; i++) {
            if (i % 5 && i % 3) {
                output += i + ' ';
            }
            if (i % 3 === 0) {
                output += 'Fizz ';
            }
            if (i % 5 === 0) {
                output += 'Buzz ';
            }
        }
        return output;
    }
    exports.fizzBuzz = fizzBuzz;
});
