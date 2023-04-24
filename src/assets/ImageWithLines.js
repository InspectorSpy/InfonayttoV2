import { React } from 'react';

// Tämä luo infonäytössä kuvien päälle luotujen viivojen toiminnot. Eli kuva itse, viivat ja luokan nimi.

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
