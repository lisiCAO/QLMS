import React, { useState, useEffect, useMemo, useContext } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import ImageFileInput from './ImageFileInput';
import classNames from 'classnames';
import ApiService from '../../services/ApiService';
import { MessageContext } from '../../contexts/MessageContext';
import './CustomForm.scss';

const CustomForm = ({ className, onSubmit, config, initialData, mode, onSubmissionSuccess }) => {
    const shouldShowPasswordCheckbox = useMemo(() => {
        return mode === 'edit' && config.some(field => field.type === 'password');
    }, [config, mode]);

    // Initialize formData with default values
    const defaultFormData = useMemo(() => {
        return config.reduce((acc, field) => {
            acc[field.name] = '';
            return acc;
        }, {});
    }, [config]);

    const [formData, setFormData] = useState(defaultFormData);
    const [isPasswordChanging, setIsPasswordChanging] = useState(mode === 'create');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { message } = useContext(MessageContext) || {};
    const { showMessage } = useContext(MessageContext) || {};
    const formClassNames = classNames('custom-form', className);

    // Set formData to initialData when in edit mode
    useEffect(() => {
        if (mode === 'edit' && initialData) {
            const newFormData = { ...defaultFormData };
            config.forEach(field => {
                newFormData[field.name] = initialData[field.mapTo || field.name] || '';
            });
            setFormData(newFormData);
        } else {
            setFormData(defaultFormData);
        }
    }, [config, defaultFormData, initialData, mode]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleFileUpload = async (file, fieldName) => {
        const formData = new FormData();
        formData.append('file', file);
        try {
            const response = await ApiService.uploadFile(formData);
            if (response) {
                setFormData(prevFormData => ({
                    ...prevFormData,
                    [fieldName]: response
                }));
            } else {
                console.error('File upload response does not contain a URL.');
            }
        } catch (error) {
            console.error('File upload error:', error);
        }
    };

    const handleImageUpload = async (imageFile, fieldName) => {
        const formData = new FormData();
        formData.append('image', imageFile);
        try {
            const response = await ApiService.uploadImage(formData);
            if (response) {
                setFormData(prevFormData => ({
                    ...prevFormData,
                    [fieldName]: response
                }));
            } else {
                console.error('Image upload response does not contain a URL.');
            }
        } catch (error) {
            console.error('Image upload error:', error);
        }
    };

    const renderFormFields = (config, formData) => {
        return config.map((field) => {
            if (field.shouldRender && !field.shouldRender(formData)) {
                return null;
            }

            if (field.name && field.name.includes('id')) {
                return null;
            }

            if (field.name && field.name.includes('createdAt')) {
                return null;
            }

            if (field.type === 'password') {
                if (mode === 'edit' && !isPasswordChanging) {
                    return null;
                }
                return (
                    <Form.Group key={field.name} controlId={field.name}>
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control
                            type="password"
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                        />
                    </Form.Group>
                );
            }

            switch (field.type) {
                case 'text':
                case 'number':
                case 'email':
                    return (
                        <Form.Group key={field.name} controlId={field.name}>
                            <Form.Label>{field.label}</Form.Label>
                            <Form.Control
                                type={field.type}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    );
                case 'textarea':
                    return (
                        <Form.Group key={field.name} controlId={field.name}>
                            <Form.Label>{field.label}</Form.Label>
                            <Form.Control
                                as="textarea"
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    );
                case 'file':
                    return (
                        <Form.Group key={field.name} controlId={field.name}>
                            <Form.Label>{field.label}</Form.Label>
                            <ImageFileInput
                                name={field.name}
                                onImageUpload={(file) => handleFileUpload(file, field.name)}
                            />
                        </Form.Group>
                    );
                case 'image':
                    return (
                        <Form.Group key={field.name} controlId={field.name}>
                            <Form.Label>{field.label}</Form.Label>
                            <ImageFileInput
                                name={field.name}
                                onImageUpload={(imageFile) => handleImageUpload(imageFile, field.name)}
                            />
                        </Form.Group>
                    );
                case 'select':
                    return (
                        <Form.Group key={field.name} controlId={field.name}>
                            <Form.Label>{field.label}</Form.Label>
                            <Form.Control
                                as="select"
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                            >
                                {field.options.map(option => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    );
                default:
                    return null;
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Disable submit button
        let submittedFormData = formData;
        if (mode === 'edit' && !isPasswordChanging) {
            const { password, ...rest } = formData;
            submittedFormData = rest;
        }
        const jsonFormData = JSON.stringify(submittedFormData);
        try {
            await onSubmit(jsonFormData);
            onSubmissionSuccess && onSubmissionSuccess();
        } catch (error) {
            showMessage('error', error.message || 'Error occurred');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form className={formClassNames} onSubmit={handleSubmit}>
            {shouldShowPasswordCheckbox && (
                <Form.Group as={Row} controlId="changePasswordCheckbox">
                    <Form.Label column sm={2}>Change Password:</Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="checkbox"
                            checked={isPasswordChanging}
                            onChange={() => setIsPasswordChanging(!isPasswordChanging)}
                        />
                    </Col>
                </Form.Group>
            )}
            {renderFormFields(config, formData)}
            <Button className="custom-form__submit-button" type="submit" disabled={isSubmitting}>
                {mode === 'edit' ? 'Save' : 'Create'}
            </Button>
        </Form>
    );
};

export default CustomForm;