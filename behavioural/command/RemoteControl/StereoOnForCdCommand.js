"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StereoOnForCd = void 0;
var StereoOnForCd = /** @class */ (function () {
    function StereoOnForCd(stereo) {
        this.stereo = stereo;
    }
    StereoOnForCd.prototype.execute = function () {
        this.stereo.on();
    };
    return StereoOnForCd;
}());
exports.StereoOnForCd = StereoOnForCd;
