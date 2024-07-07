import "@testing-library/jest-dom/vitest"
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";

describe("Accordion component", () => {
    const setup = () =>
        render(
            <Accordion>
                <Accordion.Item itemId="first-item">
                <Accordion.Header className="font-semibold">The first item</Accordion.Header>
                <Accordion.Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item itemId="second-item">
                <Accordion.Header className="font-semibold">The second item</Accordion.Header>
                <Accordion.Content>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Content>
                </Accordion.Item>
            </Accordion>
        );
    
    it('should render without crashing', () => {
        render(<Accordion></Accordion>);
        expect(screen).toBeDefined();
    });

    it("should render accordion with two items and hidden content", () => {
        setup();
        screen.getByText("The first item");
        screen.getByText("The second item");

        const content1 = screen.getByLabelText("The first item");
        expect(content1).toHaveClass("hidden");
        const content2 = screen.getByLabelText("The second item");
        expect(content2).toHaveClass("hidden");
    });

    it("should show content when an item is clicked", () => {
        setup();
        const item = screen.getByText("The first item");
        fireEvent.click(item);
        const content1 = screen.getByLabelText("The first item");
        expect(content1).not.toHaveClass("hidden");
        const content2 = screen.getByLabelText("The second item");
        expect(content2).toHaveClass("hidden");
    });
});
