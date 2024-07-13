
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function DarkModeDemo() {
    const [theme, setTheme] = useLocalStorage<"dark" | "light">("theme", "light");
    const handleToggleTheme = () => {
        setTheme(theme === "light"? "dark" : "light");
    };

    return (
        <main className={theme === "dark"? "dark" : undefined}>
            <div className="w-screen h-screen flex justify-center items-center  bg-white dark:bg-black">
                <button 
                    className="py-2.5 px-5 rounded-lg border focus:z-10 focus:ring-4 text-gray-900 dark:text-white focus:outline-none bg-white dark:bg-black border-gray-200 dark:border-slate-50 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-700 dark:hover:text-blue-100 focus:ring-gray-100 dark:focus:ring-slate-700"
                    onClick={handleToggleTheme} 
                >
                    Toggle theme
                </button>
            </div>
        </main>
    );
}