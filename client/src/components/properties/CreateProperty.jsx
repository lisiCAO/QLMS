// CreateProperty.jsx
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import ApiService from './../../services/ApiService';

const propertyFormConfig = [
    {
        name: 'owner_user_id',
        label: 'Owner User ID',
        type: 'number',
        required: true,
    },
    {
        name: 'address',
        label: 'Address',
        type: 'text',
        required: true,
    },
    {
        name: 'number_of_units',
        label: 'Number of Units',
        type: 'number',
        required: true,
    },
    {
        name: 'property_type',
        label: 'Property Type',
        type: 'select',
        options: ['apartment', 'house', 'condo'],
        required: true,
    },
    {
        name: 'size_in_sq_ft',
        label: 'Size (sq ft)',
        type: 'text',
        required: true,
    },
    {
        name: 'year_built',
        label: 'Year Built',
        type: 'text',
        required: true,
    },
    {
        name: 'rental_price',
        label: 'Rental Price',
        type: 'text',
        required: true,
    },
    {
        name: 'amenities',
        label: 'Amenities',
        type: 'text',
    },
    {
        name: 'status',
        label: 'Status',
        type: 'select',
        options: ['available', 'rented', 'under_maintenance'],
        required: true,
    },
    {
        name: 'lease_terms',
        label: 'Lease Terms',
        type: 'text',
    },
    {
        name: 'photos_url',
        label: 'Photos URL',
        type: 'image', // Assuming you want to upload multiple images
    },
    {
        name: 'description',
        label: 'Description',
        type: 'textarea',
    },
    // Omit 'created_at' and 'updated_at' as they are managed by the backend
];

const CreateProperty = () => {
    const handleSubmit = async (formData) => {
        try {
            // Format 'year_built' as a string
            formData.year_built = String(formData.year_built);

            // Assuming ApiService.createProperty is a function that sends the property data to the backend
            const response = await ApiService.createProperty(formData);
            console.log('Property created successfully:', response);

            // Handle any additional logic or navigation upon successful submission
        } catch (error) {
            console.error('Error creating property:', error);
            // Handle error, display a message, or redirect to an error page
        }
    };

    return (
        <div className="create-property">
            <h1>Create Property</h1>
            <Form onSubmit={handleSubmit}>
                {propertyFormConfig.map((field) => (
                    <Form.Group key={field.name} controlId={field.name}>
                        <Form.Label>{field.label}</Form.Label>
                        {field.type === 'select' ? (
                            <Form.Control as="select" required={field.required}>
                                {field.options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </Form.Control>
                        ) : field.type === 'textarea' ? (
                            <Form.Control as="textarea" rows={3} />
                        ) : (
                            <Form.Control type={field.type} required={field.required} />
                        )}
                    </Form.Group>
                ))}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default CreateProperty;