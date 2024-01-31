// CreateProperty.jsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useUnloadMessage } from './../hooks/useUnloadMessage';
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
        name: 'image',
        label: 'Image',
        type: 'file',
    },
    {
        name: 'description',
        label: 'Description',
        type: 'textarea',
    },
    // Omit 'created_at' and 'updated_at' as they are managed by the backend
];

const CreateProperty = () => {
    const [formData, setFormData] = useState({});
    const [files, setFiles] = useState({}); // Store uploaded files [name: file] pairs
    const [message, setMessage] = useState(''); // Store success/error message
    useUnloadMessage(setMessage); // Display a message if the user tries to leave the page with unsaved changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (event.target.type === 'file') {
            setFiles({ ...files, [name]: event.target.files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();

        // Append text fields to the FormData object
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        // Append files to the FormData object
        for (const key in files) {
            data.append(key, files[key]);
        }

        try {
            // Send the FormData object to the backend using the API service
            const response = await ApiService.createProperty(data);
            setMessage(response.message);
            // Handle success
        } catch (error) {
            setMessage(error.message);
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
                            <Form.Control as="select" name={field.name} onChange={handleInputChange} required={field.required}>
                                {field.options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </Form.Control>
                        ) : field.type === 'textarea' ? (
                            <Form.Control as="textarea" name={field.name} onChange={handleInputChange} rows={3} />
                        ) : field.type === 'image' ? (
                            <Form.Control type="file" name={field.name} onChange={handleInputChange} />
                        ) : (
                            <Form.Control type={field.type} name={field.name} onChange={handleInputChange} required={field.required} />
                        )}
                    </Form.Group>
                ))}
                {message && <div className="alert alert-danger" role="alert">{message}</div>}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default CreateProperty;