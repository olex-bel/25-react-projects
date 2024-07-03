
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import type { ComponentProps } from "react"

type ButtonType = "prev" | "next";

type ArrowButtonProps = {
    buttonType: ButtonType;
} & ComponentProps<"button">


export default function ArrowButton({ buttonType, className, ...props} : ArrowButtonProps) {
    const isNext = buttonType === "next";
    const icon = isNext? <AiOutlineRight /> : <AiOutlineLeft />;
    const label = isNext? "Next Item" : "Previous Item";
    const buttonPositionClass  = isNext? "right-0 rounded-l" : "left-0 rounded-r";

    return (
        <button 
            type="button" 
            className={`absolute py-2.5 px-1 ${buttonPositionClass} top-1/2 bg-white/50 -translate-y-1/2 transition-[padding] duration-400 hover:pr-3.5 hover:pl-3.5 hover:bg-white/90  ${className?? ""}`} 
            aria-label={label} 
            {...props}
        >
            {icon}
        </button>
    );
}
 