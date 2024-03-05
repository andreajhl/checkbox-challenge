import { SELECT_ALL, checkboxOptions } from '../constants';

export const isSelectingAll = (value: string) => value === SELECT_ALL;

export const generateDefaultValues = (defaultValue: boolean) => (
  checkboxOptions.reduce((acc, { name } ) => {
    acc[name] = defaultValue;
    return acc;
  }, {} as Record<string, boolean>)
);

export const allOptionsSelected = (selectedValues: Record<string, boolean>) => (
  Object.values(selectedValues).every(item => item)
);
