import React, { useState } from 'react';
import JobZImage from '../../../../common/jobz-img';

const SectionDisplay = ({ sections }) => {
  const sectionData = Array.isArray(sections) ? sections : [];
  const [errorImages, setErrorImages] = useState({});

  // Replace with your live server's upload directory URL
  const BASE_URL = 'https://yourdomain.com/uploads';

  const getImageUrl = (imagePath) => {
    if (!imagePath || typeof imagePath !== 'string' || imagePath.trim() === '') {
      console.warn('Invalid image path:', imagePath);
      return 'images/placeholder.jpg'; // Fallback path (must exist in public folder)
    }
    if (imagePath.startsWith('http') || imagePath.startsWith('data:')) {
      return imagePath;
    }
    // Handle backend-uploaded images (e.g., /uploads/example.jpg)
    const url = `${BASE_URL}/${imagePath.startsWith('/') ? imagePath.slice(1) : imagePath}`;
    console.log('Generated Image URL:', url); // Debug log
    return url;
  };

  const handleImageError = (index) => {
    if (!errorImages[index]) {
      console.error('Image failed to load for section:', index, 'URL:', getImageUrl(sections[index]?.image));
      setErrorImages((prev) => ({ ...prev, [index]: true }));
    }
  };

  const sectionHasValidImage = (section, index) => {
    const isValid = section?.image && typeof section.image === 'string' && section.image.trim() !== '' && !errorImages[index];
    console.log(`Section ${index} has valid image:`, isValid, 'Image:', section?.image); // Debug log
    return isValid;
  };

  console.log('SectionDisplay Props - Sections:', sectionData); // Debug log

  if (sectionData.length === 0) {
    console.warn('No sections available in SectionDisplay');
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No sections available</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {sectionData.map((section, index) => {
        const hasImage = sectionHasValidImage(section, index);

        if (!hasImage) {
          return (
            <div key={index} className="mb-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-gray-800">What is a </span>
                  <span className="text-blue-500">Trademark?</span>
                </h2>
                <div
                  className="text-lg text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: section.description || '' }}
                />
              </div>
            </div>
          );
        }

        return (
          <div key={index} className="mb-16">
            <div
              className="flex flex-col md:flex-row items-start gap-8"
              style={{ display: 'flex', margin: '2rem', justifyContent: 'space-between', width: '100%' }}
            >
              <div className="flex w-full md:w-2/3">
                <h2 className="text-3xl font-bold mb-6" style={{ marginRight: '67px' }}>
                  {section.title || `Section ${index + 1}`}
                </h2>
                <div
                  className="text-lg text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: section.description || '' }}
                />
              </div>
              {hasImage && (
                <div className="w-small md:w-1/3" style={{ maxWidth: '20%' }}>
                  {errorImages[index] ? (
                    <JobZImage
                      src="/images/about/purpose/designer.png"
                      alt="Fallback image"
                      className="w-full object-contain"
                    />
                  ) : (
                    <JobZImage
                      src={getImageUrl(section.image)}
                      alt={section.title || 'Section image'}
                      className="w-full object-contain"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionDisplay;

