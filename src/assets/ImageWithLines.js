import { React } from 'react';

const ImageWithLines = ({ imageSrc, lines, className }) => {

  return (
    <div className="image-container">
      <img
        alt=""
        className={className}
        src={imageSrc}
      />
        {lines.map((line, index) => (
          <div key={index} className="line" style={line}></div>
        ))}
      </div>
  );
};

export default ImageWithLines;
