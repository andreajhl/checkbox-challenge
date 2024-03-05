import { useState } from 'react';
import CheckbocGroup from './components/checkbox-group';
import { SELECT_ALL, checkboxOptions } from './constants';
import { allOptionsSelected, generateDefaultValues, isSelectingAll } from './utils';
import { SelectedValues } from './app.d';

const App = () => {
  const [selectedValues, setSelectedValues] = useState(generateDefaultValues(false));

  const setStateWhenSelectAll = () => {
    const valueChangeStateOptions = Boolean(selectedValues[SELECT_ALL]);
    setSelectedValues(generateDefaultValues(!valueChangeStateOptions));
  }

  const setStateWhenAllIsActive = (name: string) => {
    const selectedValue = selectedValues[name];

    setSelectedValues({
      ...selectedValues,
      all: false,
      [name]: !selectedValue,
    });
  }

  const setStateWhenSelectOption = (name: keyof SelectedValues) => {
    const selectedValue = selectedValues[name];
    const { all, ...optionsCountry } = {
      ...selectedValues,
      [name]: !selectedValue,
    } as unknown as SelectedValues;

    allOptionsSelected(optionsCountry)
      ? setSelectedValues(generateDefaultValues(true))
      : setSelectedValues({ all, ...optionsCountry});
  }

  const handleChange = (name: string) => {
    const keySelectValue = name as keyof SelectedValues;

    if (isSelectingAll(name)) setStateWhenSelectAll();
    else if (selectedValues.all) setStateWhenAllIsActive(keySelectValue);
    else setStateWhenSelectOption(keySelectValue);
  }

  return (
    <main>
      <CheckbocGroup
        title='Checkbox de países'
        options={checkboxOptions}
        handleChange={handleChange}
        selectedValues={selectedValues}
      />
    </main>
  );
}

export default App;
