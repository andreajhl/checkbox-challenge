export interface CheckboxGroupProps {
  title: string;
  options: CheckboxProps[];
  selectedValues: Record<string, boolean>;
  handleChange: (value: string) => void;
}

export interface CheckboxProps {
  name: string;
  label: string;
}
