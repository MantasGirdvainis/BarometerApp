import validate from "../validators/place.validator";

describe('Title Validator', () => {
    it('should be valid', () => {
      const result = validate('abc');
  
      expect(result).toBe(true);
    });
    it('should be valid', () => {
      const result = validate('abc1*!');
  
      expect(result).toBe(true);
    });
  });