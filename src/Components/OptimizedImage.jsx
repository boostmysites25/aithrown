import { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+',
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    setImageError(true);
  };

  return (
    <div className="relative">
      {!imageLoaded && !imageError && (
        <img
          src={placeholder}
          alt=""
          className={`${className} animate-pulse bg-gray-300`}
          loading="eager"
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          position: imageLoaded ? 'static' : 'absolute',
          top: imageLoaded ? 'auto' : 0,
          left: imageLoaded ? 'auto' : 0,
        }}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
