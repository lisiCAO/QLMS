const { BlobServiceClient } = require("@azure/storage-blob");
const { image } = require("../models");

// Initialize Azure Blob Storage client
const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.AZURE_STORAGE_CONNECTION_STRING
);
const containerName = "qlmsfile"; // Assume container name is 'images'
const containerClient = blobServiceClient.getContainerClient(containerName); // Initialize container client

exports.saveImages = async (imagesData, propertyId, transaction) => {
    try {
        console.log("imagesData:", imagesData);
        const uploadPromises = imagesData.map(async (file) => {
            const blobName = `property_images/${Date.now()}_${
                file.originalname
            }`; // Create a unique name for each image
            const blockBlobClient =
                containerClient.getBlockBlobClient(blobName);

            console.log("Uploading image to Azure Blob Storage:", blobName);
            // Upload image to Azure Blob Storage
            await blockBlobClient.uploadData(file.buffer, {
                blobHTTPHeaders: { blobContentType: file.mimetype }, // Set blob content type
            });

            console.log("Image uploaded to Azure Blob Storage:", blobName);
            // Get image URL from Azure Blob Storage
            const imageUrl = blockBlobClient.url;

            console.log("Image URL:", imageUrl);
            // Return image data to save to database
            return {
                property_id: propertyId,
                image_url: imageUrl,
                description: file.originalname, // Consider allowing user input for description
                uploaded_at: new Date(),
                is_primary: false, // Consider logic for setting primary image
            };
        });

        // Parallelly save images to database and return the result
        const images = await Promise.all(uploadPromises);

        console.log("Saving images to database:", images);
        return await image.bulkCreate(images, { transaction });
    } catch (error) {
        console.error("Error saving images:", error);
        throw error; // Throw error to the caller
    }
};
