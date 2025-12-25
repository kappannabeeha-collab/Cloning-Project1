import { useEffect, useState } from "react";

const images = [
  "https://picsum.photos/id/1011/1920/800",
  "https://picsum.photos/id/1015/1920/800",
  "https://picsum.photos/id/1018/1920/800",
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative w-full overflow-hidden">
      <img
        src={images[index]}
        alt="Hero"
        className="w-full h-[70vh] object-cover transition-all duration-700"
      />

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full"
      >
        ›
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
