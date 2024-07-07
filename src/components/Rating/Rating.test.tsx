import "@testing-library/jest-dom/vitest"
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react";
import Rating from "./Rating";

describe("Rating component", () => {
    it('should render without crashing', () => {
        render(<Rating maxRating={3} onRatingUpdated={vi.fn()} />);
        expect(screen).toBeDefined();
    });

    it("should render the component that has 3 unchecked stars", () => {
        render(<Rating maxRating={3} onRatingUpdated={vi.fn()} />);
        const checkbox1 = screen.getByLabelText<HTMLInputElement>('1 Stars');
        const checkbox2 = screen.getByLabelText<HTMLInputElement>('2 Stars');
        const checkbox3 = screen.getByLabelText<HTMLInputElement>('3 Stars');
        expect(checkbox1.checked).toBeFalsy();
        expect(checkbox2.checked).toBeFalsy();
        expect(checkbox3.checked).toBeFalsy();
    });

    it("should render the component with selected rating", () => {
        render(<Rating maxRating={3} rating={2} onRatingUpdated={vi.fn()} />);
        const checkbox1 = screen.getByLabelText<HTMLInputElement>('1 Stars');
        const checkbox2 = screen.getByLabelText<HTMLInputElement>('2 Stars');
        const checkbox3 = screen.getByLabelText<HTMLInputElement>('3 Stars');
        expect(checkbox1.checked).toBeFalsy();
        expect(checkbox2.checked).toBeTruthy();
        expect(checkbox3.checked).toBeFalsy();
    });

    it("should update rating when a star is clicked", () => {
        const handleRatingUpdated = vi.fn();

        render(<Rating maxRating={3} onRatingUpdated={handleRatingUpdated} />);
        const checkbox1 = screen.getByLabelText<HTMLInputElement>('1 Stars');
        const checkbox2 = screen.getByLabelText<HTMLInputElement>('2 Stars');
        const checkbox3 = screen.getByLabelText<HTMLInputElement>('3 Stars');
        fireEvent.click(checkbox2);
        expect(checkbox1.checked).toBeFalsy();
        expect(checkbox2.checked).toBeTruthy();
        expect(checkbox3.checked).toBeFalsy();
        expect(handleRatingUpdated).toBeCalled();
    });
});