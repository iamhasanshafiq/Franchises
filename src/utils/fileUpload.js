import axios from 'axios';

import { FILE_UPLOAD_URL, joinUrl } from "../config/serviceUrls";

const getFileUploadUrl = () => {
  if (!FILE_UPLOAD_URL) {
    throw new Error("Missing env var: VITE_BASE_URL_FILE_UPLOAD");
  }
  return FILE_UPLOAD_URL;
};

/**
 * Upload files to the cloud storage
 * @param {File[]} files - Array of files to upload
 * @returns {Promise<{url: string, id: string}[]>} Array of uploaded file URLs and IDs
 */
export const uploadFiles = async (files) => {
  const baseUrl = getFileUploadUrl();
  const formData = new FormData();
  
  files.forEach((file) => {
    formData.append('files', file);
  });

  try {
    const response = await axios.post(joinUrl(baseUrl, "/files/upload"), formData, {
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
