"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotionButton = void 0;
const react_1 = __importDefault(require("react"));
const framer_motion_1 = require("framer-motion");
const style = {
    backgroundColor: "red",
    display: "inline-block",
    width: 100,
    height: 100,
};
const MotionButton = () => (react_1.default.createElement(framer_motion_1.motion.button, { whileHover: { scale: 0.9 }, whileTap: { scale: 0.7 }, style: style }));
exports.MotionButton = MotionButton;
