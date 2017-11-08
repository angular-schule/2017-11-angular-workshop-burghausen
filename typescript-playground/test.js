"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Test = /** @class */ (function () {
    function Test(id) {
        var _this = this;
        this.id = id;
        console.log('Die Antwort: ', id);
        var x = function () { console.log('test', _this); };
    }
    return Test;
}());
exports.Test = Test;
//# sourceMappingURL=test.js.map