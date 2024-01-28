// const { BlobServiceClient } = require('@azure/storage-blob');
const { image } = require('../models');

// initialize Azure Blob Storage client
// const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);
// const containerName = 'images'; // assume container name is 'images'


exports.saveImages = async (imagesData, propertyId,  { transaction } = {}) => {
    try {
        const uploadPromises = imagesData.map(file => {
            // TODO: Handle image data, e.g. save to database or upload to cloud storage, etc.
            // const blobName = `property_images/${Date.now()}_${file.originalname}`; // create a unique name for each image
            // const blockBlobClient = containerClient.getBlockBlobClient(blobName);

            // // upload image to Azure Blob Storage
            // await blockBlobClient.uploadData(file.buffer, {
            //     blobHTTPHeaders: { blobContentType: file.mimetype }, // set blob content type
            // });

            // // get image URL from Azure Blob Storage
            // const imageUrl = blockBlobClient.url;

            // //  return image data to save to database
            return {
                property_id: propertyId, // retrieve property ID from newProperty
                image_url: file.path, // Or use URL created by cloud storage
                description: 'image description', // Or use image description from request body
                uploaded_at: new Date(), // Or handle it by sequelize
                is_primary: false // as default
            };
        });

        // Parallelly save images to database and return the result
        const images = await Promise.all(uploadPromises);

        return await image.bulkCreate(images, { transaction });
    } catch (error) {
        // handle error
        console.error("Error saving images:", error);
        throw error; // throw error to the caller
    }
};
