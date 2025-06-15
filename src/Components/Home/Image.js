import { useState } from 'react';
import './Image.css';

function Image() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image-container">
      <img
        src="/Images/portfolio-pic.jpg"
        alt="portfolio-picture"
        width={500}
        height={500}
        className={`profile-image${loaded ? ' loaded' : ''}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
export default Image;
