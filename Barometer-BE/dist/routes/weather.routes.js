"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weather_controller_1 = require("../controllers/weather.controller");
const router = express_1.default.Router();
router.get('/', weather_controller_1.getWeather);
exports.default = router;
