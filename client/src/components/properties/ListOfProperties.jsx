import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { ApiService } from './../../services/ApiService';
// import './../../css/sb-admin-2.min.css';

const ListOfProperties = () => {
    const [properties, setProperties] = useState([
        {
            property_id: 1,
            address: '123 Main St',
            rental_price: 1500.00,
            status: 'available',
            description: 'Spacious two-bedroom apartment',
            created_at: '2024-01-01 12:00:00',
        },
        // Add more sample data as needed
    ]);

    // useEffect(() => {
    //     // Replace 'your-api-endpoint' with the actual API endpoint to fetch properties
    //     ApiService.fetchPropertiesByUserId('your-user-id')
    //         .then((data) => {
    //             setProperties(data);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching properties:', error);
    //         });
    // }, []);

    return (
        <Container fluid>
            <h1 className="h3 mb-2 text-gray-800">List of Properties</h1>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Properties</h6>
                </div>
                <div className="card-body">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                {Object.keys(properties[0]).map((key) => (
                                    <th key={key}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {properties.map((property) => (
                                <tr key={property.property_id}>
                                    {Object.values(property).map((value, index) => (
                                        <td key={index}>{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    );
};

export default ListOfProperties;