import { FC } from 'react';
import { CheckboxGroupProps } from './index.d';
import './styles.css';

const CheckbocGroup: FC<CheckboxGroupProps> = ({
  title,
  options,
  handleChange,
  selectedValues,
}) => (
  <form className='form'>
    <fieldset className='form-group'>
      <legend>{title}</legend>
      {
        options.map(({ name, label}) => (
          <label key={name}>
            <input
              name={name}
              type='checkbox'
              checked={selectedValues[name]}
              onChange={({ target }) => handleChange(target.name)}
            />
            {label}
          </label>
        ))
      }
    </fieldset>
  </form>
);

export default CheckbocGroup;
