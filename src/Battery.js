"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battery = void 0;
const react_1 = __importDefault(require("react"));
const react_use_1 = require("react-use");
const Battery = () => {
    const batteryState = react_use_1.useBattery();
    if (!batteryState.isSupported) {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("strong", null, "Battery sensor"),
            ": ",
            react_1.default.createElement("span", null, "not supported")));
    }
    if (!batteryState.fetched) {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("strong", null, "Battery sensor"),
            ": ",
            react_1.default.createElement("span", null, "supported"),
            " ",
            react_1.default.createElement("br", null),
            react_1.default.createElement("strong", null, "Battery state"),
            ": ",
            react_1.default.createElement("span", null, "fetching")));
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("strong", null, "Battery sensor"),
        ":\u00A0\u00A0 ",
        react_1.default.createElement("span", null, "supported"),
        " ",
        react_1.default.createElement("br", null),
        react_1.default.createElement("strong", null, "Battery state"),
        ": ",
        react_1.default.createElement("span", null, "fetched"),
        " ",
        react_1.default.createElement("br", null),
        react_1.default.createElement("strong", null, "Charge level"),
        ":\u00A0\u00A0",
        " ",
        react_1.default.createElement("span", null,
            (batteryState.level * 100).toFixed(0),
            "%"),
        " ",
        react_1.default.createElement("br", null),
        react_1.default.createElement("strong", null, "Charging"),
        ":\u00A0\u00A0",
        " ",
        react_1.default.createElement("span", null, batteryState.charging ? "yes" : "no"),
        " ",
        react_1.default.createElement("br", null),
        react_1.default.createElement("strong", null, "Charging time"),
        ":\u00A0\u00A0",
        react_1.default.createElement("span", null, batteryState.chargingTime ? batteryState.chargingTime : "finished"),
        " ",
        react_1.default.createElement("br", null),
        react_1.default.createElement("strong", null, "Discharging time"),
        ":\u00A0\u00A0",
        " ",
        react_1.default.createElement("span", null, batteryState.dischargingTime)));
};
exports.Battery = Battery;
