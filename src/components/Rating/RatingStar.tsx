import { useId } from 'react';
import { AiFillStar } from 'react-icons/ai';

type RatingStarProps = {
    starIndex: number;
    selectedStarIndex: number;
    selectedClass?: string;
    onStarSelect: (index: number) => void;
    onStarHover: (index: number) => void;
    onStarLeave: () => void;
};

export default function RatingStar({ starIndex, selectedStarIndex, selectedClass = "fill-amber-500", onStarHover, onStarLeave, onStarSelect } : RatingStarProps) {
    const id = useId();
    const handleMouseEnter = () => {
        onStarHover(starIndex);
    };
    const handleMouseLeave = () => {
        onStarLeave();
    };
    const handleSelect = () => {
        onStarSelect(starIndex);
    };
    const isChecked = selectedStarIndex === starIndex;
    const isSelected = starIndex <= selectedStarIndex;

    return (
        <>
            <input value={starIndex} id={id} checked={isChecked? true : false} type="radio" name="rating" className="sr-only" onChange={handleSelect} />
            <label htmlFor={id} onClick={handleSelect} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span className="sr-only">{starIndex} Stars</span>
                <AiFillStar className={isSelected? selectedClass : undefined}/>
            </label>
        </>
    );
}
