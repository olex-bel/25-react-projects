
import TreeView from "../components/TreeView";
import menu from "./menu";

export default function TreeViewDemo() {
    return (
        <main>
            <TreeView items={menu} label="Demo Tree Menu" />
        </main>
    );
}