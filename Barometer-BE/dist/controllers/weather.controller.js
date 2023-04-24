"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = void 0;
const weather_service_1 = require("../services/weather.service");
const place_validator_1 = __importDefault(require("../validators/place.validator"));
const getWeather = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const place = req.query.place;
        if (place && (0, place_validator_1.default)(place)) {
            res.json(yield (0, weather_service_1.getWeatherinfo)(place));
        }
    }
    catch (err) {
        next(err);
    }
});
exports.getWeather = getWeather;
