"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StereoOffForCd = void 0;
var StereoOffForCd = /** @class */ (function () {
    function StereoOffForCd(stereo) {
        this.stereo = stereo;
    }
    StereoOffForCd.prototype.execute = function () {
        this.stereo.off();
    };
    return StereoOffForCd;
}());
exports.StereoOffForCd = StereoOffForCd;
