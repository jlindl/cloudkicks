import { render, screen } from '@testing-library/react'
import ErrorBoundary from '../app/error'

describe('ErrorBoundary', () => {
    it('renders the error boundary correctly', () => {
        const mockError = new Error('Test error')
        const mockReset = jest.fn()

        render(<ErrorBoundary error={mockError} reset={mockReset} />)

        expect(screen.getByText('Something went wrong')).toBeInTheDocument()
        expect(screen.getByText('An unexpected error occurred. We have been notified and are looking into it.')).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /go home/i })).toBeInTheDocument()
    })
})
