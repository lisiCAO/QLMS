import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './PropertyList.scss';
import ApiService from '../../../services/ApiService';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  
  useEffect(() => {

    // const properties = [
        // {
        //   property_id: 1,
        //   address: '123 Main St, San Francisco, CA 94101',
        //   property_type: 'Apartment',
        //   size_in_sq_ft: 1000,
        //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
        //   number_of_units: 10,
        //   year_built: 2010,
        //   rental_price: 2000,
        //   amenities: 'Swimming pool, gym, parking',
        //   status: 'available',
        //   lease_terms: '1 year'
        // },
        // {
        //   property_id: 2,
        //   address: '456 Elm St, San Francisco, CA 94101',
        //   property_type: 'Condo',
        //   size_in_sq_ft: 1500,
        //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
        //   number_of_units: 5,
        //   year_built: 2015,
        //   rental_price: 3000,
        //   amenities: 'Swimming pool, gym, parking',
        //   status: 'available',
        //   lease_terms: '1 year'
        // },
        // {
        //   property_id: 3,
        //   address: '789 Oak St, San Francisco, CA 94101',
        //   property_type: 'House',
        //   size_in_sq_ft: 2000,
        //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
        //   number_of_units: 1,
        //   year_built: 2020,
        //   rental_price: 4000,
        //   amenities: 'Swimming pool, gym, parking',
        //   status: 'available',
        //   lease_terms: '1 year'
        // }
        ApiService.fetchProperties() 
            .then((data) => {
                setProperties(data);
            })
            .catch((error) => {
                console.error('Error fetching properties:', error);
            });
   

      

        setProperties(properties);
        setLoading(false);

    }, []);

  if (loading) return <div>Loading properties...</div>;
  if (message) return <div>Error fetching properties: {message}</div>;

  return (
    <div className="properties-list">
      {properties.map(property => (
        <Card key={property.property_id} className="property-card mb-3">
          <Card.Img variant="top" src={property.image_urls ? property.image_urls[0] : 'default-image-url'} />
            {/* Assuming photos_url contains a comma-separated list of URLs */}
          <Card.Body>
            <Card.Title>{property.address}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{property.property_type} - {property.size_in_sq_ft} sq ft</Card.Subtitle>
            <Card.Text>
              {property.description}
              <br />
              Units: {property.number_of_units} | Built in: {property.year_built}
              <br />
              Rental Price: ${property.rental_price} / month
              <br />
              Amenities: {property.amenities}
              <br />
              Status: {property.status}
              <br />
              Lease Terms: {property.lease_terms}
            </Card.Text>
            <Button variant="primary" disabled={property.status !== 'available'}>Apply For Leasing</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PropertyList;
