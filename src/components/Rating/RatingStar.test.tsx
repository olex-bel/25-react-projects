import "@testing-library/jest-dom/vitest"
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react";
import RatingStar from "./RatingStar";

describe("RatingStar component", () => {
    it('should render without crashing', () => {
        render(<RatingStar starIndex={1} selectedStarIndex={1} onStarHover={vi.fn()} onStarLeave={ vi.fn()} onStarSelect={ vi.fn()}  />);
        expect(screen).toBeDefined();
    });

    it("should render unchecked checkbox", () => {
        const handleStarHover = vi.fn();
        const handleStarLeave = vi.fn();
        const handleStarSelect = vi.fn();
        
        render(<RatingStar starIndex={1} selectedStarIndex={0} onStarHover={handleStarHover} onStarLeave={handleStarLeave} onStarSelect={handleStarSelect}  />);
        const checkbox = screen.getByLabelText<HTMLInputElement>('1 Stars');
        expect(checkbox.checked).to.be.false;
        expect(handleStarHover).to.not.toHaveBeenCalled();
        expect(handleStarLeave).to.not.toHaveBeenCalled();
        expect(handleStarSelect).to.not.toHaveBeenCalled();
    });

    it("should render checked checkbox", () => {      
        render(<RatingStar starIndex={1} selectedStarIndex={1} onStarHover={vi.fn()} onStarLeave={ vi.fn()} onStarSelect={ vi.fn()}  />);
        const checkbox = screen.getByLabelText<HTMLInputElement>('1 Stars');
        expect(checkbox.checked).to.be.true;
    });

    it("should trigger onStarSelect event when is selecterd", () => {
        const handleStarHover = vi.fn();
        const handleStarLeave = vi.fn();
        const handleStarSelect = vi.fn();
        
        render(<RatingStar starIndex={1} selectedStarIndex={0} onStarHover={handleStarHover} onStarLeave={handleStarLeave} onStarSelect={handleStarSelect}  />);
        const checkbox = screen.getByLabelText<HTMLInputElement>('1 Stars');
        fireEvent.click(checkbox);
        expect(handleStarHover).to.not.toHaveBeenCalled();
        expect(handleStarLeave).to.not.toHaveBeenCalled();
        expect(handleStarSelect).to.toHaveBeenCalled();
    });

    it("should trigger move enter and mouse leave events", () => {
        const handleStarHover = vi.fn();
        const handleStarLeave = vi.fn();
        const handleStarSelect = vi.fn();
        
        render(<RatingStar starIndex={1} selectedStarIndex={0} onStarHover={handleStarHover} onStarLeave={handleStarLeave} onStarSelect={handleStarSelect}  />);
        const label = screen.getByText('1 Stars');
        fireEvent.mouseEnter(label);
        fireEvent.mouseLeave(label);
        expect(handleStarHover).to.toHaveBeenCalled();
        expect(handleStarLeave).to.toHaveBeenCalled();
        expect(handleStarSelect).to.not.toHaveBeenCalled();
    });
})
