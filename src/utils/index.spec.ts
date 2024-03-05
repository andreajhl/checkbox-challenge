import { SELECT_ALL } from '../constants';
import { isSelectingAll, generateDefaultValues, allOptionsSelected } from '.';

describe('utils', () => {
  describe('isSelectingAll', () => {
    it('should return true if the value is SELECT_ALL', () => {
      expect(isSelectingAll(SELECT_ALL)).toBe(true);
    });

    it('should return false if the value is not SELECT_ALL', () => {
      expect(isSelectingAll('india')).toBe(false);
    });
  });

  describe('generateDefaultValues', () => {
    it('should generate default values correctly', () => {
      const defaultValue = false;
      const result = generateDefaultValues(defaultValue);

      expect(result).toEqual({
        all: false,
        india: defaultValue,
        usa: defaultValue,
        france: defaultValue
      });
    });
  });

  describe('allOptionsSelected', () => {
    it('should return true if all options are selected', () => {
      const selectedValues = {
        india: true,
        usa: true,
        france: true
      };
      expect(allOptionsSelected(selectedValues)).toBe(true);
    });

    it('should return false if not all options are selected', () => {
      const selectedValues = {
        india: true,
        usa: false,
        france: true
      };
      expect(allOptionsSelected(selectedValues)).toBe(false);
    });
  });  
});
