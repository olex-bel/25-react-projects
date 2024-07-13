
import MenuItem from "./MenuItem";
import type { MenuItem as MenuItemType  } from "./types";

type MenuListProps = {
    items: MenuItemType[];
    label: string;
    role: "tree" | "group";
};

export default function MenuList({ label, role, items }: MenuListProps) {
    return (
        <ul role={role} aria-label={label}>
            {
                items.map((item) => <MenuItem key={item.label} item={item} />)
            }
        </ul>
    )
}