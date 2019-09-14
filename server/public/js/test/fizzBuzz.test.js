/// <reference types="jest" />
define(["require", "exports", "../app/fizzBuzz"], function (require, exports, fizzBuzz_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    test("FizzBuzz test", () => {
        expect(fizzBuzz_1.fizzBuzz(2)).toBe("1 2 ");
        expect(fizzBuzz_1.fizzBuzz(3)).toBe("1 2 Fizz ");
    });
});
