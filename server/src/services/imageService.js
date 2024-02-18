const fs = require('fs');
const path = require('path');
const { BlobServiceClient } = require('@azure/storage-blob');
require('dotenv').config();

// Azure 存储配置
const azureStorageConnectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerName = 'qlmsfile';  // 假设容器名称为 'images'

// 本地存储配置
const LOCAL_STORAGE_PATH = process.env.LOCAL_STORAGE_PATH || '/app/local_storage';
const LOCAL_STORAGE_BASE_URL = process.env.LOCAL_STORAGE_BASE_URL || 'http://localhost:8000/public';

// 确保本地存储路径存在
const ensureLocalStoragePathExists = () => {
    if (!fs.existsSync(LOCAL_STORAGE_PATH)) {
        fs.mkdirSync(LOCAL_STORAGE_PATH, { recursive: true });
    }
};

const uploadImage = async (file, propertyId) => {
    const fileName = `property_images/${propertyId}_${Date.now()}_${file.originalname}`;

    if (azureStorageConnectionString) {
        // Azure Blob Storage 逻辑
        const blobServiceClient = BlobServiceClient.fromConnectionString(azureStorageConnectionString);
        const containerClient = blobServiceClient.getContainerClient(containerName);
        const blockBlobClient = containerClient.getBlockBlobClient(fileName);
        await blockBlobClient.uploadData(file.buffer, {
            blobHTTPHeaders: { blobContentType: file.mimetype }
        });
        return blockBlobClient.url;
    } else {
        // 本地存储逻辑
        ensureLocalStoragePathExists();
        const localFilePath = path.join(LOCAL_STORAGE_PATH, fileName);
        await fs.promises.writeFile(localFilePath, file.buffer);
        return `${LOCAL_STORAGE_BASE_URL}/${fileName}`;
    }
};

exports.saveImages = async (imagesData, propertyId) => {
    const uploadPromises = imagesData.map(file => uploadImage(file, propertyId));
    const imageUrls = await Promise.all(uploadPromises);
    return imageUrls.map(url => ({
        property_id: propertyId,
        image_url: url,
        uploaded_at: new Date(),
        is_primary: false
    }));
};
