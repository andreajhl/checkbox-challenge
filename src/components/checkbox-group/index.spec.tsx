import { render, screen, fireEvent } from '@testing-library/react';
import CheckboxGroup from '.';

const handleChange = jest.fn();
const options = [
  { name: 'option1', label: 'Option 1' },
  { name: 'option2', label: 'Option 2' },
  { name: 'option3', label: 'Option 3' },
];
const selectedValues: Record<string, boolean> = {
  option1: true,
  option2: false,
  option3: true,
};

const renderCheckboxGroup = () => (
  render (
    <CheckboxGroup
      title="Test Title"
      options={options}
      handleChange={handleChange}
      selectedValues={selectedValues}
    />
  )
);

describe('<CheckboxGroup />', () => {
  it('CheckboxGroup renders correctly', () => {
    renderCheckboxGroup();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  
    options.forEach(option => {
      const checkbox = screen.getByLabelText(option.label) as HTMLInputElement;

      expect(checkbox).toBeInTheDocument();
      expect(checkbox.checked).toBe(selectedValues[option.name]);
    });
  });
  
  it('CheckboxGroup handles change correctly', () => {
    renderCheckboxGroup();
    const firstOption = screen.getByLabelText('Option 1');

    fireEvent.click(firstOption);
    expect(handleChange).toHaveBeenCalledWith('option1');
  });
})
