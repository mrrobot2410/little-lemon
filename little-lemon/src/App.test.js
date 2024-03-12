import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import ConfirmedBooking from './components/ConfirmedBooking';

const updateTimesMock = jest.fn();
const timeSlots = ['10:00', '12:00', '15:00'];

describe("Booking form", () => {
  test("Reset after submit", () => {

    const { getByLabelText, getByText } = render(
      <BookingForm timeSlots={timeSlots} updateTimes={updateTimesMock} />
    );

    const dateInput = getByLabelText('Choose date');
    const timeSelect = getByLabelText('Choose time');
    const guestsInput = getByLabelText('Number of guests');
    const occasionSelect = getByLabelText('Occasion');
    const submitButton = getByText('Make Your reservation');

    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    expect(guestsInput.value).toBe('4');
    expect(occasionSelect.value).toBe('Birthday');

    const headingElement = screen.getByText("Book now");
    expect(headingElement).toBeInTheDocument();
  });

});

test('renders heading', () => {
  const { getByText } = render(<ConfirmedBooking />);
  const headingElement = getByText(/Booking confirmed/i);
  expect(headingElement).toBeInTheDocument();
});

