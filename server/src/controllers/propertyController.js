const { body, validationResult } = require('express-validator');
const propertyService = require('../services/propertyService');

// Validate and sanitize fields using express-validator
exports.propertyValidationRules = [
        /* TODO: adjust validation according to business logic */
    body('owner_user_id').isInt().withMessage('Owner user ID must be an integer'),
    body('address').isLength({ min: 1 }).withMessage('Address is required'),
    body('number_of_units').isInt({ min: 1 }).withMessage('Number of units must be at least 1'),
    body('property_type').isIn(['apartment', 'house', 'condo']).withMessage('Invalid property type'),
    body('size_in_sq_ft').isInt({ min: 1 }).withMessage('Size in square feet must be a positive integer'),
    body('year_built').isInt({ min: 1900, max: new Date().getFullYear() }).withMessage('Invalid year built'),
    body('rental_price').isDecimal().withMessage('Rental price must be a decimal'),
    body('status').isIn(['available', 'rented', 'under_maintenance']).withMessage('Invalid status'),
    // ...
];

// Create a new property
exports.createProperty  = async (req, res) => {

    // Check if there are validation errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.sendError(errors.array(), 400); // TODO: Change error message format
    }

    try {        
        // Create property, body is property, req.user.id is owner_user_id, req.files is images
        const result = await propertyService.createPropertyWithImages(req.body, req.files, req.user.id);
        // Send success response
        res.sendSuccess(result, 
            "Property created successfully"
            );
            
    } catch (error) {
        // TODO: Log error
        res.sendError("Failed to create property: " + error.message, 500);
    }
};
