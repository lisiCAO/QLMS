const { body, validationResult } = require("express-validator");
const leaseService = require("../services/leaseService");

// Validate and sanitize fields using express-validator
exports.createLeaseValidationRules = [
    /* TODO: adjust validation according to business logic */
    body("property_id").isInt().withMessage("Property ID must be an integer"),
    body("tenant_user_id")
        .isInt()
        .withMessage("Tenant user ID must be an integer"),
    body("start_date").isISO8601().withMessage("Invalid start date format"),
    body("end_date").isISO8601().withMessage("Invalid end date format"),
    body("rent_amount")
        .isDecimal()
        .withMessage("Rent amount must be a decimal number"),
    body("payment_due_day")
        .isInt({ min: 1, max: 31 })
        .withMessage("Payment due day must be between 1 and 31"),
    // ...
];

exports.updateLeaseValidationRules = [
    body("property_id")
        .optional()
        .isInt()
        .withMessage("Property ID must be an integer"),
    body("tenant_user_id")
        .optional()
        .isInt()
        .withMessage("Tenant user ID must be an integer"),
    body("start_date")
        .optional()
        .isISO8601()
        .withMessage("Invalid start date format"),
    body("end_date")
        .optional()
        .isISO8601()
        .withMessage("Invalid end date format"),
    body("rent_amount")
        .optional()
        .isDecimal()
        .withMessage("Rent amount must be a decimal number"),
    body("payment_due_day")
        .optional()
        .isInt({ min: 1, max: 31 })
        .withMessage("Payment due day must be between 1 and 31"),
    //
];

const handleValidationErrors = (req, res, message) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.sendError(
            message +
                errors
                    .array()
                    .map((err) => err.msg)
                    .join(", "),
            422
        );
    }
};

exports.getAllLeases = async (req, res) => {
    try {
        const leases = await leaseService.getAllLeases();
        res.json({ success: true, data: leases });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getSingleLease = async (req, res) => {
    try {
        const lease = await leaseService.getSingleLease(req.params.id);
        if (lease) {
            res.json({ success: true, data: lease });
        } else {
            res.status(404).json({
                success: false,
                message: "Lease not found",
            });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.createLease = async (req, res) => {
    // Check if there are validation errors
    handleValidationErrors(req, res, "Create a new lease failed: ");

    try {
        const newLease = await leaseService.createLease(req.body);
        res.status(201).json({ success: true, data: newLease });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.updateLease = async (req, res) => {
    // Check if there are validation errors
    handleValidationErrors(req, res, "Update lease failed: ");

    try {
        const updatedLease = await leaseService.updateLease(
            req.params.id,
            req.body
        );
        if (updatedLease) {
            res.json({ success: true, data: updatedLease });
        } else {
            res.status(404).json({
                success: false,
                message: "Lease not found",
            });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.deleteLease = async (req, res) => {
    try {
        const deleted = await leaseService.deleteLease(req.params.id);
        if (deleted) {
            res.json({ success: true, message: "Lease deleted successfully" });
        } else {
            res.status(404).json({
                success: false,
                message: "Lease not found",
            });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
