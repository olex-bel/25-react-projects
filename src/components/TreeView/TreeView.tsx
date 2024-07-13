
import MenuList from "./MenuList";
import type { MenuItem } from "./types";

type TreeViewProps = {
    items: MenuItem[],
    label: string;
};

export default function TreeView({ items, label }: TreeViewProps) {
    return (
        <nav aria-label={label}>
            <MenuList items={items} role="tree" label={label} />
        </nav>
    );
}