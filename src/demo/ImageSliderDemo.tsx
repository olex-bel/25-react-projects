import ImageSlider from "../components/ImageSlider";

const IMAGES = [{
    url: "/images/hans-jurgen-mager-KgRKlQXmHR0-unsplash.jpg",
    description: "A polar bear",
  }, {
    url: "/images/marius-masalar-LN_gdbQtzvk-unsplash.jpg",
    description: "A python.",
  }, {
    url: "/images/hans-veth-ltEraYc7QrU-unsplash.jpg",
    description: "A wolf."
  }]

export function ImageSliderDemo() {
    return (
        <div className="w-[320px] md:w-[640px]">
            <ImageSlider label="Test slider" items={IMAGES} />
        </div>
    );
}