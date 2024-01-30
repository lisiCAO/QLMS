const { property, user } = require("../models"); // Import property model
const { sequelize } = require("../models/index");
const imageService = require("./imageService");

// Service to create a new property
/* In service layer, all errors should be thrown only , and handled in controller */
exports.createProperty = async (propertyData, userId, transaction) => {
    if (!propertyData.address || propertyData.address.length < 5) {
        throw new Error(
            "Property address is required and should be at least 5 characters."
        );
    }
    // Validate user role
    const User = await user.findByPk(userId);
    if (!User) {
        throw new Error("User not found.");
    }
    if (User.role !== "landlord") {
        throw new Error("Only landlords can create properties.");
    }
    // Trim address
    propertyData.address = propertyData.address.trim();
    // Check if property with the same address already exists
    const existingProperty = await property.findOne({
        where: { address: propertyData.address },
    });
    if (existingProperty) {
        throw new Error("A property with the same address already exists.");
    }
    // Create property
    try{
        const newProperty = await property.create({
            ...propertyData, 
            owner_user_id: userId,
        }, { transaction });

        return newProperty;
    } catch (error) {
        // Rollback transaction if any errors were encountered
        // If any operation fails, rollback the transaction
        if (transaction.rollback) {
            await transaction.rollback();
        }
        throw error; // Throw error to controller
    }
};

exports.createPropertyWithImages = async (propertyData, imagesData, userId) => {
    const transaction = await sequelize.transaction(); 

    try {
        // Step 1: Create the property
        const newProperty = await this.createProperty(propertyData, userId, transaction);
        console.log("newProperty:", newProperty);
        // Step 2: Process images with imageService
        // Ensure imageService.saveImages is adapted to accept a transaction
        const processedImages = await imageService.saveImages(imagesData, newProperty.id, transaction);
        console.log("processedImages:", processedImages);
        // If all operations are successful, commit the transaction
        await transaction.commit();
        console.log("Transaction committed");
        console.log("Transaction committed");
        return { property: newProperty, images: processedImages };
    } catch (error) {
        // If any operation fails, rollback the transaction
        if (transaction.rollback) {
            await transaction.rollback();
        }
        console.error("Error creating property with images:", error);
        throw error;
    }
};

exports.getAllProperties = async () => {
    return await property.findAll();
};

exports.getSingleProperty = async (propertyId) => {
    return await property.findByPk(propertyId);
};

exports.updateProperty = async (propertyId, propertyData) => {
    const propertyToUpdate = await property.findByPk(propertyId);

    if (!propertyToUpdate) {
        return null; // Property not found
    }

    // update property
    await propertyToUpdate.update(propertyData);
    return propertyToUpdate;
};

exports.deleteProperty = async (propertyId) => {
    const propertyToDelete = await property.findByPk(propertyId);

    if (!propertyToDelete) {
        return false; // Property not found
    }

    await propertyToDelete.destroy();
    return true;
};
