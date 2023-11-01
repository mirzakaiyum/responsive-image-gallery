import { forwardRef } from "react";

export const ImageCard = forwardRef(({ images, style, faded }, ref) => {
  const inlineStyles = {
    opacity: faded ? "0.2" : "1",
    transformOrigin: "0 0",
    ...style,
  };

  return (
    <div className="relative cursor-move" style={inlineStyles} ref={ref}>
      <input
        type="checkbox"
        className="absolute top-2 left-2 z-10 accent-blue-500"
      />
      {images.map((image, index) => (
        <div key={index}>
          <div className="border rounded-md bg-gray-50 hover:brightness-95">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
});

ImageCard.displayName = "ImageCard";
