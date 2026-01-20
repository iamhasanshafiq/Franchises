import axios from 'axios';

const FILE_UPLOAD_URL = import.meta.env.VITE_BASE_URL_FILE_UPLOAD || 'https://api.barqibazar.org';

/**
 * Upload files to the cloud storage
 * @param {File[]} files - Array of files to upload
 * @returns {Promise<{url: string, id: string}[]>} Array of uploaded file URLs and IDs
 */
export const uploadFiles = async (files) => {
  const formData = new FormData();
  
  files.forEach((file) => {
    formData.append('files', file);
  });

  try {
    const response = await axios.post(`${FILE_UPLOAD_URL}/files/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.data.status === 'success') {
      return response.data.data.files.map((file) => ({
        id: file.id,
        url: file.url,
        originalName: file.originalName,
        size: file.size,
        type: file.type,
      }));
    } else {
      throw new Error('Upload failed');
    }
  } catch (error) {
    console.error('File upload error:', error);
    throw error;
  }
};

/**
 * Upload a single file and return the URL
 * @param {File} file - File to upload
 * @returns {Promise<{url: string, id: string}>} Uploaded file URL and ID
 */
export const uploadSingleFile = async (file) => {
  const [result] = await uploadFiles([file]);
  return result;
};

