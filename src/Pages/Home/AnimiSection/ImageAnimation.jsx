import  { useState } from 'react';
import './ImageAnimation.css'; // Import CSS file for styling

const ImageAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleImageHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className='md:flex md:gap-4'>
      <div className="image-container relative w-1/3 h-auto overflow-hidden">
      <img
        src="https://i.ibb.co/znTHHTn/Adobe-Stock-537281594-Preview.jpg"
        alt="Image"
        className={`image ${isHovered ? 'zoomed' : ''}`}
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageHover}
      />
    </div>
    <div className="image-container relative w-1/3 h-auto overflow-hidden">
      <img
        src="https://i.ibb.co/ryhkmPX/Adobe-Stock-294947897-Preview.jpg"
        alt="Image"
        className={`image ${isHovered ? 'zoomed' : ''}`}
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageHover}
      />
    </div>
    <div className="image-container relative w-1/3 h-auto overflow-hidden">
      <img
        src="https://i.ibb.co/z4j0qWF/Adobe-Stock-125615546-Preview.jpg"
        alt="Image"
        className={`image ${isHovered ? 'zoomed' : ''}`}
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageHover}
      />
    </div>
    </div>
  );
};

export default ImageAnimation;