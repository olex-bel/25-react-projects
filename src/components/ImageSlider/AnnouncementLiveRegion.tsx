
type AnnouncementLiveRegionProps = {
    currentItemNumber: number;
    totalNumberOfItems: number;
}

export default function AnnouncementLiveRegion({ currentItemNumber, totalNumberOfItems } : AnnouncementLiveRegionProps) {
    return (
        <div className="sr-only" aria-live="polite" aria-atomic="true">
            Item {currentItemNumber} of {totalNumberOfItems}
        </div>
    );
}