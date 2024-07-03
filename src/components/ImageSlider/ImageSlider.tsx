
import { useId, useState } from "react";
import Slide from "./Slide";
import ArrowButton from "./ArrowButton";
import AnnouncementLiveRegion from "./AnnouncementLiveRegion";
import NavigationButtons from "./NavigationButtons";

type ImageItem = {
    url: string;
    description: string;
};

type ImageSliderProps = {
    label: string;
    items: ImageItem[],
    className?: string;
}

export default function ImageSlider({ label, items, className } : ImageSliderProps) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const id = useId();
    const nextSlide = () => {
        setCurrentSlideIndex(prevSlideIndex => (prevSlideIndex === items.length - 1)? 0 : prevSlideIndex + 1);
    };
    const prevSlide = () => {
        setCurrentSlideIndex(prevSlideIndex => (prevSlideIndex === 0)? items.length - 1 : prevSlideIndex - 1);
    };
    const setSlide = (index: number) => {
        setCurrentSlideIndex(index);
    };

    return (
        <section className="relative w-max" aria-labelledby={id}>
            <h3 id={id} className="sr-only">{label}</h3>
            <ul className={`flex overflow-hidden ${className? className : "w-[320px] md:w-[640px]"}`}>
                {
                    items.map(({ url, description }) => 
                        <Slide 
                            key={description}  
                            className="transition-[translate] duration-300  grow-0 shrink-0 max-w-full" 
                            imageUrl={url} 
                            description={description} 
                            style={{
                                translate: `${-100 * currentSlideIndex}%`
                            }}
                        />)
                }
            </ul>
            <ul>
                <li>
                    <ArrowButton buttonType="prev" onClick={prevSlide} />
                </li>
                <li>
                    <ArrowButton buttonType="next" onClick={nextSlide} />
                </li>
            </ul>
            <NavigationButtons activeSlideIndex={currentSlideIndex} slides={items} onSelectSlide={setSlide} />
            <AnnouncementLiveRegion currentItemNumber={currentSlideIndex + 1} totalNumberOfItems={items.length} />
        </section>
    );
}
