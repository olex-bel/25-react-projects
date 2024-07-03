type Slide = {
    description: string;
};

type NavigationButtonsProps = {
    slides: Slide[];
    activeSlideIndex: number;
    onSelectSlide: (slideIndex: number) => void;
};

export default function NavigationButtons({ activeSlideIndex, slides, onSelectSlide }: NavigationButtonsProps) {
    return (
        <ul className="flex gap-1 justify-center m-1">
            {slides.map((slide, index) => {
                const isActive = index === activeSlideIndex;
                const baseClass = "w-8 h-8 font-bold rounded border-solid border-2 hover:border-dashed";
                const activeClass = "text-slate-900 border-blue-600";
                const inactiveClass = "bg-blue-600 text-white border-white";

                return (
                    <li key={slide.description}>
                        <button 
                            onClick={!isActive ? () => onSelectSlide(index) : undefined}
                            className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}
                            aria-current={isActive ? "true" : undefined}
                        >
                            <span className="sr-only">{slide.description}</span> {index + 1}
                            {isActive && <span className="sr-only">(Current Slide)</span>}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
