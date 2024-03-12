import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';

describe("Booking form", () => {
  test("Reset after submit", () => {
    const updateTimesMock = jest.fn();
    const timeSlots = ['10:00', '12:00', '15:00'];

    const { getByLabelText, getByText } = render(
      <BookingForm timeSlots={timeSlots} updateTimes={updateTimesMock} />
    );

    const dateInput = getByLabelText('Choose date');
    const timeSelect = getByLabelText('Choose time');
    const guestsInput = getByLabelText('Number of guests');
    const occasionSelect = getByLabelText('Occasion');
    const submitButton = getByText('Make Your reservation');

    fireEvent.change(dateInput, { target: { value: '2024-03-15' } });
    fireEvent.change(timeSelect, { target: { value: '12:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    expect(dateInput.value).toBe('2024-03-15');
    expect(guestsInput.value).toBe('4');
    expect(occasionSelect.value).toBe('Birthday');

    fireEvent.click(submitButton);

    expect(updateTimesMock).toHaveBeenCalledWith('12:00');
    expect(dateInput.value).toBe('');
    expect(timeSelect.value).toBe('10:00');
    expect(guestsInput.value).toBe('');

    const headingElement = screen.getByText("Book now");
    expect(headingElement).toBeInTheDocument();
  });

});
