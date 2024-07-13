import "@testing-library/jest-dom/vitest"
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react";
import TreeView from "./TreeView";

const items = [
    {
        label: "Test Item 1",
        path: "#id1",
        children: [
            {
                label: "Test Sub Item 1",
                path: "#sid1",
            },
            {
                label: "Test Sub Item 2",
                path: "#sid2",
            }
        ],
    },
    {
        label: "Test Item 2",
        path: "#id2",
    }
];

describe("TreeView component", () => {
    it("should render TreeView", () => {
        render(<TreeView label="Test TreeView" items={items} />);
        expect(screen.queryByText("Test Item 1")).toBeVisible();
        expect(screen.queryByText("Test Item 2")).toBeVisible();
        expect(screen.queryByText("Test Sub Item 1")).to.be.null;
        expect(screen.queryByText("Test Sub Item 2")).to.be.null;
    });

    it("should open item", () => {
        render(<TreeView label="Test TreeView" items={items} />);
        const item1 = screen.getByText("Test Item 1");
        fireEvent.click(item1);
        expect(screen.queryByText("Test Sub Item 1")).toBeVisible();
        expect(screen.queryByText("Test Sub Item 2")).toBeVisible();
    });
});