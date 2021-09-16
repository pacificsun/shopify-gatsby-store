import React from 'react';

import Image from 'gatsby-image';

import { ImageGalleryWrapper } from './styles';
import ImageThumbnail from './ImageThubnail';

export function ImageGallery({ images }) {
  console.log('Images>>', images);

  const [activeImageThumbnail, setActiveImageThumbnail] = React.useState(
    images[0]
  );

  const handleclick = image => {
    setActiveImageThumbnail(image);
  };
  return (
    <ImageGalleryWrapper>
      <div>
        <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
      </div>
      <div>
        {images.map(image => {
          return (
            <ImageThumbnail
              key={image.id}
              isActive={activeImageThumbnail.id === image.id}
              onClick={handleclick}
              image={image}
            />
          );
        })}
      </div>
    </ImageGalleryWrapper>
  );
}
