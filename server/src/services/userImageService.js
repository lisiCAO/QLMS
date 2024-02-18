const { BlobServiceClient } = require("@azure/storage-blob");
const fs = require('fs');
const path = require('path');

const azureStorageConnectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerName = "qlmsfile"; // 假设容器名称为 'images'

let storageClient;

if (azureStorageConnectionString) {
    // 使用 Azure 存储连接字符串初始化 Blob 服务客户端
    const blobServiceClient = BlobServiceClient.fromConnectionString(azureStorageConnectionString);
    storageClient = blobServiceClient.getContainerClient(containerName);
} else {
    // 本地存储路径配置
    const LOCAL_STORAGE_PATH = process.env.LOCAL_STORAGE_PATH;

    // 确保本地存储路径存在
    const ensureLocalStoragePathExists = () => {
        if (!fs.existsSync(LOCAL_STORAGE_PATH)) {
            fs.mkdirSync(LOCAL_STORAGE_PATH, { recursive: true });
        }
    };

    // 本地存储客户端
    storageClient = {
        uploadData: async (blobName, buffer, options) => {
            ensureLocalStoragePathExists();
            const localFilePath = path.join(LOCAL_STORAGE_PATH, blobName);

            await fs.promises.writeFile(localFilePath, buffer);

            // 返回本地文件路径作为“URL”
            return { url: `file://${localFilePath}` };
        },
        // 根据需要添加其他方法
    };
}

module.exports = { storageClient };
