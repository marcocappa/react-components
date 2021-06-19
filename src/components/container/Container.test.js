import { render, screen } from '@testing-library/react';
import Container from './Container';

test('renders container with is children', () => {
	render(<Container>This is a children</Container>);
	const container = screen.getByText(/This is a children/i);
	expect(container).toBeInTheDocument();
});
