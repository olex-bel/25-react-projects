import { useState, useId, useContext } from "react";
import MenuList from "./MenuList";
import { LevelContext } from "./levelContext";
import { AiOutlineCaretRight } from "react-icons/ai";
import type { MenuItem } from "./types";

type MenuItemProps = {
    item: MenuItem;
};

export default function MenuItem({ item }: MenuItemProps) {
    const id = useId();
    const [isOpen, setIsOpen] = useState(false);
    const level = useContext(LevelContext);
    const hasChildren = !!item.children;
    const expanded = hasChildren? isOpen : undefined;
    const owns = hasChildren? id : undefined;
    const handleToggleChildren = () => {
        setIsOpen(!isOpen);
    };
    const paddingLeft = `${level}rem`;

    return (
        <LevelContext.Provider value={level + 1}>
            <li role="none">
                <a 
                    role="treeitem" 
                    className="block focus:pl-1.5 focus:outline-0 focus:border-2 focus:border-solid focus:border-slate-500 hover:underline" 
                    aria-expanded={expanded} 
                    aria-owns={owns} 
                    href={`#${item.path}`}
                    onClick={hasChildren? handleToggleChildren : undefined}
                >
                    <span className="flex leading-normal items-center" style={{ paddingLeft }}>
                        {hasChildren && <span className={`transition-transform ${isOpen? "rotate-90": ""}`}><AiOutlineCaretRight /></span>}
                        {item.label}
                    </span>   
                </a>

                {item.children && isOpen && <MenuList role="group" label={item.label} items={item.children} /> }
            </li>
        </LevelContext.Provider>
    )
}
