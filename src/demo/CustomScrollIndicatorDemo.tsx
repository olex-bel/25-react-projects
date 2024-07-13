import { useState, useCallback, useEffect } from "react";
import { quotes } from "./quotes";

export default function CustomScrollIndicatorDemo() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const handleScrollPercentage = useCallback(() => {
        const scrolledHeight = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((scrolledHeight / height) * 100);
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage);

        return () => {
            window.removeEventListener("scroll", handleScrollPercentage);
        }
    }, [handleScrollPercentage]);

    return (
        <main>
            <div className="fixed top-0 bg-lime-600 w-full">
                <h1 className="text-center text-2xl">Demo Scroll Indicator</h1>
                <div className="w-full h-3 bg-lime-300">
                    <div className="h-3 bg-lime-950" style={{ width: scrollPercentage + "%"}}></div>
                </div>
            </div>
            <div className="text-center mt-5">
                {
                    quotes.map((quota, index) => <p key={index}>{quota}</p>)
                }
            </div>
        </main>
    );
}