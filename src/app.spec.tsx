import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './app';

describe('<App />', () => {
  it('should render correctly', () => {
    render(<App />);

    const title = screen.getByText(/Checkbox de países/i);
    expect(title).toBeInTheDocument();
  });

  it('When you select "all" it marks all items as selected', async() => {
    render(<App />);

    const allOption = screen.getByRole('checkbox', { name: /Seleccionar todos/i });

    fireEvent.click(allOption);

    await waitFor(() => {
      const optionSelected = screen.getAllByRole('checkbox', { checked: true });
      expect(optionSelected).toHaveLength(4);
    });
  });

  it('When all options are selected, "all" is automatically selected', async() => {
    render(<App />);

    const [, ...options] = screen.getAllByRole('checkbox');

    options.forEach(option => fireEvent.click(option));

    await waitFor(() => {
      const allOption = screen.getByRole('checkbox', { name: /Seleccionar todos/i });
      expect(allOption).toBeChecked();
    });
  });

  it('When all options are checked and you click on any option, it is unchecked and it also unchecks the "all" option.',
  async() => {
    render(<App />);

    const [, ...options] = screen.getAllByRole('checkbox');
    const allOption = screen.getByRole('checkbox', { name: /Seleccionar todos/i });

    options.forEach(option => fireEvent.click(option));

    await waitFor(() => {
      expect(allOption).toBeChecked();
    });

    const indiaOption = screen.getByRole('checkbox', { name: 'India' })
    fireEvent.click(indiaOption);

    await waitFor(() => {
      expect(allOption).not.toBeChecked();
    });

    await waitFor(() => {
      expect(indiaOption).not.toBeChecked();
    });
  });
})
