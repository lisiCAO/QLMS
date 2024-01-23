Based on our discussions and the details provided, I'll structure the API documentation in Markdown format. This document will cover authentication, user management, property management, transactions, and lease management. Each endpoint will be described with its HTTP method, path, request parameters, and the expected response structure.

# API Documentation for Integrated Property Management Solution (IPMS)

## Overview

This document outlines the API endpoints for the IPMS, detailing the interaction with the backend services for user authentication, property, transaction, and lease management.

### Base URL

```
http://localhost:3000/api
```

## Authentication

### User Login

- **POST** `/login`
  
  Authenticates a user and returns a JWT for accessing protected routes.

  #### Request Body

  ```json
  {
    "username": "user@example.com",
    "password": "password123"
  }
  ```

  #### Response

  ```json
  {
    "success": true,
    "data": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    },
    "message": "User authenticated successfully."
  }
  ```

### User Registration

- **POST** `/register`
  
  Registers a new user account.

  #### Request Body

  ```json
  {
    "username": "newuser@example.com",
    "password": "password123",
    "role": "tenant"
  }
  ```

  #### Response

  ```json
  {
    "success": true,
    "data": {
      "userId": 12,
      "username": "newuser@example.com"
    },
    "message": "User registered successfully."
  }
  ```

## Users & Tenants

### List Users

- **GET** `/users`
  
  Retrieves a list of users.

  #### Response

  ```json
  {
    "success": true,
    "data": [
      {
        "userId": 12,
        "username": "user@example.com",
        "role": "tenant"
      }
    ],
    "message": "Users retrieved successfully."
  }
  ```

### User Details

- **GET** `/users/:id`
  
  Retrieves details for a single user.

  #### Response

  ```json
  {
    "success": true,
    "data": {
      "userId": 12,
      "username": "user@example.com",
      "role": "tenant"
    },
    "message": "User details retrieved successfully."
  }
  ```

- **GET** `/me`
    
    Retrieves the details of the currently authenticated user.
    #### Request
    GET with credentials
    #### Response

    ```json
    {
        "success": true,
        "data": {
            "userId": 12,
            "username": "user@example.com",
            "role": "tenant"
        },
        "message": "User details retrieved successfully."
    }
    ```

### Create User (Admin)

- **POST** `/users`
  
  Allows an administrator to create a new user account.

  #### Request Body

  ```json
  {
    "username": "newadmin@example.com",
    "password": "securePassword123",
    "role": "admin"
  }
  ```

  #### Response

  ```json
  {
    "success": true,
    "data": {
      "userId": 13,
      "username": "newadmin@example.com"
    },
    "message": "User created successfully."
  }
  ```

### Update User Details (Admin)

- **PUT** `/users/:id`
  
  Allows an administrator to update details for an existing user.

  #### Request Body

  ```json
  {
    "username": "updateduser@example.com",
    "role": "tenant"
  }
  ```

  #### Response

  ```json
  {
    "success": true,
    "message": "User details updated successfully."
  }
  ```

### Delete User (Admin)

- **DELETE** `/users/:id`
  
  Allows an administrator to delete a user account.

  #### Response

  ```json
  {
    "success": true,
    "message": "User deleted successfully."
  }
  ```

### List All Users (Admin)

- **GET** `/admin/users`
  
  Retrieves a list of all users, including both tenants and administrators.

  #### Response

  ```json
  {
    "success": true,
    "data": [
      {
        "userId": 12,
        "username": "user@example.com",
        "role": "tenant"
      },
      {
        "userId": 13,
        "username": "newadmin@example.com",
        "role": "admin"
      }
    ],
    "message": "All users retrieved successfully."
  }
  ```


## Properties

### List Properties

- **GET** `/properties`
  
  Retrieves all properties.

  #### Response

  ```json
  {
    "success": true,
    "data": [
      {
        "propertyId": 101,
        "address": "123 Main St",
        "numberOfUnits": 10
      }
    ],
    "message": "Properties retrieved successfully."
  }
  ```

### Add Property

- **POST** `/properties`
  
  Adds a new property.

  #### Request Body

  ```json
  {
    "ownerUserId": 12,
    "address": "123 Main St",
    "numberOfUnits": 10
  }
  ```

  #### Response

  ```json
  {
    "success": true,
    "data": {
      "propertyId": 101
    },
    "message": "Property added successfully."
  }
  ```

### Property Details

- **GET** `/properties/:id`
  
  Retrieves details for a single property.

  #### Response

  ```json
  {
    "success": true,
    "data": {
      "propertyId": 101,
      "ownerUserId": 12,
      "address": "123 Main St",
      "numberOfUnits": 10
    },
    "message": "Property details retrieved successfully."
  }
  ```

### Update Property

- **PUT** `/properties/:id`
  
  Updates an existing property.

  #### Request Body

  ```json
  {
    "ownerUserId": 14,
    "address": "456 Elm St",
    "numberOfUnits": 15
  }
  ```

  #### Response

  ```json
  {
    "success": true,
    "message": "Property updated successfully."
  }
  ```

### Delete Property

- **DELETE** `/properties/:id`
  
  Deletes a property.

  #### Response

  ```json
  {
    "success": true,
    "message": "Property deleted successfully."
  }
  ```

### Search Properties

- **GET** `/properties/search`
  
  Search for properties based on various criteria.

  #### Query Parameters

  - `address` (optional)
  - `ownerUserId` (optional)
  - `numberOfUnits` (optional)

  #### Response

  ```json
  {
    "success": true,
    "data": [
      {
        "propertyId": 101,
        "address": "123 Main St",
        "numberOfUnits": 10
      }
    ],
    "message": "Properties matching criteria retrieved successfully."
  }
  ```

## Transactions

### List Transactions

- **GET** `/transactions`
  
  Retrieves a list of financial transactions.

  #### Response

  ```json
  {
    "success": true,
    "data": [
      {
        "transactionId": 1001,
        "leaseId": 201,
        "amount": 1200.00,
        "timestamp": "2023-01-01T12:00:00Z",
        "type": "rent"
      }
    ],
    "message": "Transactions retrieved successfully."
  }
  ```

## Transactions

This section details the API endpoints related to financial transactions, including listing, creating, and retrieving specific transaction details.

### List Transactions

- **GET** `/transactions`
  
  Retrieves a list of all financial transactions.

  #### Response

  ```json
  {
    "success": true,
    "data": [
      {
        "transactionId": 1001,
        "leaseId": 201,
        "amount": 1200.00,
        "timestamp": "2023-01-01T12:00:00Z",
        "type": "rent"
      }
      // Additional transactions here
    ],
    "message": "Transactions retrieved successfully."
  }
  ```

### Create a New Transaction

- **POST** `/transactions`
  
  Submits a new financial transaction.

  #### Request Body

  ```json
  {
    "sender": "12",
    "receiver": "15",
    "amount": 1200.00,
    "type": "rent",
    "timestamp": "2024-01-01T12:00:00Z"
  }
  ```

  #### Response

  ```json
  {
    "success": true,
    "data": {
      "transactionId": 1002
    },
    "message": "Transaction created successfully."
  }
  ```

### Transaction Details

- **GET** `/transactions/:id`
  
  Retrieves details for a single transaction.

  #### Response

  ```json
  {
    "success": true,
    "data": {
      "transactionId": 1002,
      "sender": "12",
      "receiver": "15",
      "amount": 1200.00,
      "type": "rent",
      "timestamp": "2024-01-01T12:00:00Z"
    },
    "message": "Transaction details retrieved successfully."
  }
  ```

### Update Transaction

- **PUT** `/transactions/:id`
  
  Updates details for an existing transaction.

  #### Request Body

  ```json
  {
    "amount": 1300.00,
    "type": "deposit"
  }
  ```

  #### Response

  ```json
  {
    "success": true,
    "message": "Transaction updated successfully."
  }
  ```

### Delete Transaction

- **DELETE** `/transactions/:id`
  
  Deletes a specific transaction.

  #### Response

  ```json
  {
    "success": true,
    "message": "Transaction deleted successfully."
  }
  ```

## Leases

This section outlines the API endpoints related to managing lease agreements, including listing, creating, updating, and retrieving specific lease details.

### List Leases

- **GET** `/leases`
  
  Retrieves a list of all lease agreements.

  #### Response

  ```json
  {
    "success": true,
    "data": [
      {
        "leaseId": 201,
        "propertyId": 101,
        "tenantUserId": 12,
        "startDate": "2023-01-01",
        "endDate": "2023-12-31",
        "rentAmount": 1200.00
      }
      // Additional leases here
    ],
    "message": "Leases retrieved successfully."
  }
  ```

### Lease Details

- **GET** `/leases/:id`
  
  Retrieves details for a specific lease.

  #### Response

  ```json
  {
    "success": true,
    "data": {
      "leaseId": 201,
      "propertyId": 101,
      "tenantUserId": 12,
      "startDate": "2023-01-01",
      "endDate": "2023-12-31",
      "rentAmount": 1200.00
    },
    "message": "Lease details retrieved successfully."
  }
  ```

### Create Lease

- **POST** `/leases`
  
  Creates a new lease agreement.

  #### Request Body

  ```json
  {
    "propertyId": 102,
    "tenantUserId": 15,
    "startDate": "2024-01-01",
    "endDate": "2024-12-31",
    "rentAmount": 1300.00
  }
  ```

  #### Response

  ```json
  {
    "success": true,
    "data": {
      "leaseId": 202
    },
    "message": "Lease created successfully."
  }
  ```

### Update Lease

- **PUT** `/leases/:id`
  
  Updates an existing lease agreement.

  #### Request Body

  ```json
  {
    "endDate": "2025-12-31",
    "rentAmount": 1400.00
  }
  ```

  #### Response

  ```json
  {
    "success": true,
    "message": "Lease updated successfully."
  }
  ```

### Delete Lease

- **DELETE** `/leases/:id`
  
  Deletes a specific lease agreement.

  #### Response

  ```json
  {
    "success": true,
    "message": "Lease deleted successfully."
  }
  ```

## Error Handling

All endpoints return a consistent error payload when requests fail validation or when an internal error occurs.

### Example Error Response

```json
{
  "success": false,
  "message": "An error occurred."
}
```

The API uses standard HTTP response codes to indicate the success or failure of an API request.

## Conclusion

The above endpoints provide a RESTful API for the IPMS, designed to manage all aspects of property management, from user authentication to detailed property oversight. Each endpoint returns a structured JSON response with clear success/error messaging, making integration straightforward for front-end developers.

