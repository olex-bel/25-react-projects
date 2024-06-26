import "@testing-library/jest-dom/vitest"
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react";
import RandomColor from "./RandomColor";

describe("RandomColor component", () => {
    it("should show initial color", () => {
        render(<RandomColor />);
        expect(screen.getByRole("button")).not.toBeDisabled();
        expect(screen.queryByText(/#[0-9ABCDEF]{6}/)).toBeVisible();
    });

    it("should update color", () => {
        render(<RandomColor />);
        fireEvent.click(screen.getByRole("button"));
        expect(screen.queryByText(/#[0-9ABCDEF]{6}/)).toBeVisible();
    })
})