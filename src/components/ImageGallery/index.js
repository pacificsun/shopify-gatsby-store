import React from 'react';

import Image from 'gatsby-image';

import { ImageGalleryWrapper } from './styles';
import ImageThumbnail from './ImageThubnail';

export function ImageGallery({ selectedVariantImageId, images }) {
  console.log('Images>>', images);

  const [activeImageThumbnail, setActiveImageThumbnail] = React.useState(
    images.find(({ id }) => id === selectedVariantImageId) || images[0]
  );

  React.useEffect(() => {
    setActiveImageThumbnail(
      images.find(({ id }) => id === selectedVariantImageId) || images[0]
    );
  }, [selectedVariantImageId, setActiveImageThumbnail]);

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
