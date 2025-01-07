

export const uploadImage = async (image: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME || '');
  
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );
  
    if (!response.ok) {
      throw new Error('Image upload to Cloudinary failed');
    }
  
    const data = await response.json();
  
    if (!data.secure_url) {
      throw new Error('Image URL is missing in the Cloudinary response');
    }
  
    return data.secure_url; // This is the public URL of the uploaded image
  };
  