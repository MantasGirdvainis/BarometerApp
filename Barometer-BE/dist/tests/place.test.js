"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const place_validator_1 = __importDefault(require("../validators/place.validator"));
describe('Title Validator', () => {
    it('should be valid', () => {
        const result = (0, place_validator_1.default)('abc');
        expect(result).toBe(true);
    });
    it('should be valid', () => {
        const result = (0, place_validator_1.default)('abc1*!');
        expect(result).toBe(true);
    });
});
