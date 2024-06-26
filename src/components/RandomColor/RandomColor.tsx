
import { useState } from "react";
import { getRandomColor, getInvertedColor, toHexColor } from "./colorUtils";

const initialRandomColor = getRandomColor();

export default function RandomColor() {
    const [randomColor, setRandomColor] = useState(initialRandomColor);
    const backgroundColor = toHexColor(randomColor);
    const textColor = toHexColor(getInvertedColor(randomColor));

    const handleGenerateRandomColor = () => {
        setRandomColor(getRandomColor());
    };

    return (
        <div className="flex flex-col w-64 h-64 gap-2">
            <div 
                className="flex-grow flex justify-center items-center"
                style={{
                    backgroundColor: backgroundColor,
                    color: textColor,
                }}
            >
                <span className="text-2xl">{backgroundColor.toUpperCase()}</span>
            </div>
            <button 
                className="self-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100" 
                onClick={handleGenerateRandomColor}
            >
                Generate random color
            </button>
        </div>
    );
}
