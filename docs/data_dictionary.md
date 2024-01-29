# Data Dictionary

The data dictionary details the structure of data for key system components: "users", "properties", "transactions", and "leases". It's crucial for database design, API development, and data communication between the front and back ends.

# User Table

This data dictionary describes the structure of the `User` table in the rental management system. It includes details on each field, such as data type, description, and examples.

## Table Structure

| Field Name         | Data Type      | Description                                           | Example                | Constraint             |
|--------------------|----------------|-------------------------------------------------------|------------------------|------------------------|
| user_id            | INT            | Unique identifier for each user                       | 1001                   |                        |
| username           | VARCHAR(50)    | Username chosen by the user                           | johndoe                |                        |
| password_hash      | VARCHAR(550)   | Encrypted password for the user account               | 5f4dcc3b5aa765d61...   | at least 1 digit, at least 1 uppercase, at least 1 lowercase, at least 1 special character, >=8|
| email              | VARCHAR(100)   | User's email address                                  | user@example.com       | email                  |
| role               | ENUM('tenant', 'landlord') | User role in the system                   | tenant                 |  'tenant', 'landlord'  |
| created_at         | DATETIME       | Timestamp when the account was created                | 2024-01-01 12:00:00    |                        |
| updated_at         | DATETIME       | Timestamp when the account was last updated           | 2024-01-02 12:00:00    |                        |
| first_name         | VARCHAR(50)    | The first name of the user                            | John                   |                        |
| last_name          | VARCHAR(50)    | The last name of the user                             | Doe                    |                        |
| street_number      | VARCHAR(10)    | The street number of the user's address               | 123                    |                        |
| street_name        | VARCHAR(200)   | The street name of the user's address                 | Main Street            |                        |
| city_name          | VARCHAR(50)    | The city of the user's address                        | Anytown                |                        |
| postcode           | VARCHAR(10)    | The postal code of the user's address                 | 12345                  |   H4P 0B3              |
| province           | VARCHAR(20)    | The province or state of the user's address           | StateName              |                        |
| phone_number       | VARCHAR(15)    | Contact phone number of the user / number(10)         | +1234567890            |                        |
| profile_picture_url| VARCHAR(500)   | URL to the user's profile picture                     | https://example.com/images/user1.jpg |          |
| date_of_birth      | DATE           | The user's date of birth                              | 1990-01-01             |                        |
| emerge_contact_name | VARCHAR(100)  | Emergency contact name                                | Jane Doe               |                        |
| emerge_contact_number | VARCHAR(15) | Emergency contact  phone number                       |  +1234567891           |                        |
| national_id        | VARCHAR(20)    | National identification number for verification       | AB1234567              |                        |
| employer_info      | VARCHAR(100)   | Employer name and phone number                        | College, +1234567891   |                        |
| bank_info          | VARCHAR(100)   | Bank Name and account number                          | Scotial, 12345567890   |                        |
| reference_url      | VARCHAR(100)   | A reference letter from employer or mentor            | https://example.com/   |                        |
| is_verified        | BOOLEAN        | Indicates whether the user's identity has been verified | TRUE/FALSE           |                        |
| oauth_provider          | VARCHAR(50)        | Name of the OAuth provider                   | Google                 |                        |
| oauth_provider_user_id  | VARCHAR(100)       | User's ID from the OAuth provider            | 1234567890abcdef       |                        |


## Notes

- The `user_id` field is the primary key for the table.
- `role` field is limited to 'tenant' or 'admin' to categorize the user's role within the system.
- `created_at` and `updated_at` fields are automatically managed by the system to track record creation and updates.
- Personal information fields such as `first_name`, `last_name`, `street_number`, etc., are crucial for identity verification and user management.
- `is_verified` field is important for security and verification processes in the rental management system.

## Extensibility

- The table is designed to accommodate additional fields as needed.
- It follows a modular and normalized structure for easy integration with other tables in the system.
- The choice of data types and field lengths ensures scalability for a large user base.


# Properties Table

This data dictionary outlines the structure of the `Properties` table in the rental management system, including details on each field such as data type, description, and examples.

## Table Structure

| Field Name       | Data Type               | Description                                           | Example                           |
|------------------|-------------------------|-------------------------------------------------------|-----------------------------------|
| property_id      | INT                     | Unique property identifier                            | 2002                              |
| owner_user_id    | INT                     | User ID of property owner (links to `User` table)     | 1001                              |
| address          | VARCHAR(255)            | Full address of the property                          | 123 Main St                       |
| number_of_units  | INT                     | Number of individual units in the property            | 10                                |
| created_at       | DATETIME                | Timestamp when the property record was created        | 2024-01-01 12:00:00               |
| updated_at       | DATETIME                | Timestamp when the property record was last updated   | 2024-01-02 12:00:00               |
| property_type    | ENUM('apartment', 'house', 'condo', etc.) | Type of property                    | apartment                         |
| size_in_sq_ft    | INT                     | Size of the property in square feet                   | 1200                              |
| year_built       | YEAR                    | Year in which the property was built                  | 1990                              |
| rental_price     | DECIMAL(10, 2)          | Monthly rental price for the property                 | 1500.00                           |
| amenities        | TEXT                    | List of amenities available with the property         | Pool, Gym, Wi-Fi                  |
| status           | ENUM('available', 'rented', 'under_maintenance') | Current status of the property | available                       |
| lease_terms      | TEXT                    | Terms and conditions of the lease                     | 12 months lease, no pets          |
| photos_url       | TEXT                    | URL to a gallery of photos of the property            | https://example.com/properties/2002/photos |
| description      | TEXT                    | Detailed description of the property                  | Spacious two-bedroom apartment... |

## Notes

- The `property_id` field is the primary key for the table.
- The `owner_user_id` field links to the `User` table, providing a connection to the property owner.
- Fields like `property_type`, `size_in_sq_ft`, and `year_built` offer detailed information about the property, aiding in better listing and searching.
- `status`, `rental_price`, and `lease_terms` are critical for tenants and landlords to understand the current renting conditions and costs.
- `amenities`, `photos_url`, and `description` enhance the property's appeal and provide potential renters with comprehensive information.

## Extensibility

- The table is designed for future expansions, allowing additional fields as needed.
- It follows a modular and normalized structure for easy integration with other tables like `User`, `Transactions`, and `Leases`.
- The choice of data types and field lengths ensures scalability for a diverse range of properties and user requirements.


# Image Table

This data dictionary outlines the structure of the `Image` table in the rental management system. The table is designed to store and manage images related to properties.

## Table Structure

| Field Name   | Data Type    | Description                                      | Example                                        |
|--------------|--------------|--------------------------------------------------|------------------------------------------------|
| image_id     | INT          | Unique identifier for each image                 | 5003                                           |
| property_id  | INT          | Identifier for the property (links to `Properties` table) | 2002                                  |
| image_url    | VARCHAR(255) | URL where the image is stored                    | https://example.com/properties/2002/image1.jpg |
| description  | VARCHAR(255) | Brief description or label for the image         | Front view of the property                     |
| uploaded_at  | DATETIME     | Timestamp when the image was uploaded            | 2024-01-05 15:30:00                            |
| is_primary   | BOOLEAN      | Indicates if the image is the primary display image for the property | TRUE/FALSE                 |

## Notes

- The `image_id` field serves as the primary key for the table.
- `property_id` establishes a foreign key relationship with the `Properties` table, linking each image to its respective property.
- `image_url` and `description` provide essential details about the image.
- The `is_primary` field is useful for identifying the main image for a property, especially in listings or previews.

## Extensibility

- The table can be expanded to include additional fields like image dimensions, file size, or photographer credits.
- It is designed for easy integration with the `Properties` table and other related tables in the system.
- The structure supports scalability, accommodating a large number of images as the system grows.


# Transactions Table

This data dictionary provides a detailed structure of the expanded `Transactions` table in the rental management system, catering to more specific needs in lease-related financial transactions.

## Table Structure

| Field Name        | Data Type                 | Description                                   | Example                  |
|-------------------|---------------------------|-----------------------------------------------|--------------------------|
| transaction_id    | INT                       | Unique transaction identifier                 | 3003                     |
| lease_id          | INT                       | ID of associated lease (links to `Lease` table)| 4004                    |
| payer_user_id     | INT                       | User ID of the payer (links to `User` table)  | 1001                     |
| payee_user_id     | INT                       | User ID of the payee (links to `User` table)  | 1002                     |
| amount            | DECIMAL(10, 2)            | Transaction amount                            | 1200.00                  |
| timestamp         | DATETIME                  | Transaction time                              | 2024-01-03 15:30:00      |
| type              | ENUM('rent', 'deposit')   | Type of transaction                           | rent                     |
| lease_month       | DATE                      | Month and year for which the payment applies  | 2024-01-01               |
| payment_method    | ENUM('credit_card', 'bank_transfer', 'cash', etc.) | Payment method       | bank_transfer            |
| transaction_status| ENUM('pending', 'completed', 'failed') | Status of the transaction        | completed                |
| notes             | TEXT                      | Additional notes about the transaction        | Late fee included due to delayed payment |

## Notes

- The `transaction_id` is the primary key for the table.
- The `lease_month` field allows tracking of payments with respect to specific periods, enhancing financial record-keeping.
- `payment_method` and `transaction_status` provide insights into the mode and state of each transaction.
- The `notes` field can store additional information or exceptions related to the transaction.

## Extensibility

- Additional fields like 'transaction_reference_number' or 'invoice_number' can be added for more detailed tracking.
- The table is designed to be scalable and integrate smoothly with other related tables in the system.
- The structure supports a wide range of transactional data, suitable for diverse payment scenarios.


# Leases Table

This data dictionary describes the structure of the expanded `Leases` table in the rental management system, providing comprehensive details on lease agreements.

## Table Structure

| Field Name           | Data Type          | Description                                       | Example                            |
|----------------------|--------------------|---------------------------------------------------|------------------------------------|
| lease_id             | INT                | Unique lease identifier                           | 4004                               |
| property_id          | INT                | Property ID involved in lease (links to `Properties` table) | 2002                     |
| tenant_user_id       | INT                | Tenant user ID in lease (links to `User` table)   | 1001                               |
| start_date           | DATE               | Lease start date                                  | 2024-02-01                         |
| end_date             | DATE               | Lease end date                                    | 2025-02-01                         |
| rent_amount          | DECIMAL(10, 2)     | Monthly rent amount                               | 1200.00                            |
| created_at           | DATETIME           | Lease record creation time                        | 2024-01-01 12:00:00                |
| updated_at           | DATETIME           | Lease record update time                          | 2024-01-02 12:00:00                |
| lease_clauses        | TEXT               | Additional clauses or special terms in the lease  | No pets allowed; no subletting without prior approval |
| payment_due_day      | INT                | Day of the month by which the rent is due         | 1                                  |
| utility_by_owner     | TEXT               | Detailed responsibility for utilities             | Tenant pays for electricity; owner covers water and heating |
| utility_by_tenant    | TEXT               | Detailed responsibility for utilities             | Tenant pays for electricity; owner covers water and heating |
| renewal_term         | TEXT               | Conditions for lease renewal                      | Automatic renewal unless notice given 3 months before end date |
| early_terminate_con  | TEXT               | Terms for early lease termination                 | Termination allowed with 2-month notice and penalty of one month's rent |

## Notes

- The `lease_id` is the primary key for the table.
-  `payment_due_day`, and other additional fields provide a detailed overview of the financial and contractual aspects of the lease.
- `utility_responsibility` clearly define responsibilities, helping to prevent disputes.
- The `lease_clauses` field allows for customization and inclusion of specific terms pertinent to individual leases.

# LegalDocs Table Structure

| Field Name   | Data Type           | Description                               | Example                                                   |
|--------------|---------------------|-------------------------------------------|-----------------------------------------------------------|
| doc_id       | INT                 | Unique identifier for each legal document | 5005                                                      |
| lease_id     | INT                 | Associated lease ID (links to `Leases` table) | 4004                                                   |
| doc_type     | ENUM('contract_amendment', 'termination_agreement', etc.) | Type of legal document | termination_agreement          |
| doc_url      | VARCHAR(255)        | URL link to the legal document or form    | https://example.com/legal_docs/termination_agreement.pdf |
| created_at   | DATETIME            | Timestamp when the record was created     | 2024-01-10 09:00:00                                      |

## Notes

- The revised `Leases` table removes `security_deposit` and clarifies `utility_responsibility` to align with Quebec's rental regulations.
- `renewal_term` and `early_termination_conditions` fields provide clarity on lease continuation and termination scenarios.
- The `LegalDocs` table is an essential addition for managing Quebec-specific legal documentation, ensuring compliance and accessibility.

## Extensibility

- Both tables are designed to be scalable and can include additional fields or document types as required.
- The structure ensures easy integration with other system components and adapts to evolving legal and regulatory changes.

# MaintenanceRequests Table

## Table Strucutre
| Field Name     | Data Type    | Constraints                       | Nullable | Default           | Description                           |
| -------------- | ------------ | --------------------------------- | -------- | ----------------- | ------------------------------------- |
| request_id     | INT          | PRIMARY KEY, AUTO_INCREMENT       | NO       | None              | Unique identifier for each maintenance request. |
| property_id    | INT          | FOREIGN KEY (Properties)          | NO       | None              | Identifier of the property related to the maintenance request. |
| tenant_user_id | INT          | FOREIGN KEY (Users)               | NO       | None              | Identifier of the tenant who made the request. |
| description    | TEXT         | NONE                              | NO       | None              | Detailed description of the maintenance request. |
| status         | ENUM('open', 'in_progress', 'closed') | NONE   | NO       | 'open'           | Current status of the maintenance request. |
| created_at     | DATETIME     | NONE                              | NO       | CURRENT_TIMESTAMP | Timestamp when the request was created. |
| updated_at     | DATETIME     | NONE                              | YES      | CURRENT_TIMESTAMP | Timestamp when the request was last updated. |

## Notes
- **New Addition**: This table will track maintenance requests from tenants.
- **Key Connections**:
  - `tenant_user_id` (Foreign Key): Links to `Users` (UserID) to identify the tenant who made the request.
  - `property_id` (Foreign Key): Links to `Properties` (PropertyID) to identify the property in question.

  This table stores information about maintenance requests made by tenants.

### Data Flow and Interactions

- **Maintenance Requests**:
  - Tenants (Users) can raise requests for property (Properties) maintenance.
  - These requests are tracked in the `MaintenanceRequests` table and can be associated with specific leases (Leases).

# CommunicationRecords Table

## Table Strucutre
This table logs communications between users, typically between tenants and landlords.

| Field Name    | Data Type    | Constraints                       | Nullable | Default           | Description                          |
| ------------- | ------------ | --------------------------------- | -------- | ----------------- | ------------------------------------ |
| record_id     | INT          | PRIMARY KEY, AUTO_INCREMENT       | NO       | None              | Unique identifier for each communication record. |
| from_user_id  | INT          | FOREIGN KEY (Users)               | NO       | None              | Identifier of the user who initiated the communication. |
| to_user_id    | INT          | FOREIGN KEY (Users)               | NO       | None              | Identifier of the user who received the communication. |
| property_id   | INT          | FOREIGN KEY (Properties), NULLABLE | YES      | None              | Identifier of the property related to the communication, if applicable. |
| subject       | VARCHAR(255) | NONE                              | NO       | None              | Subject or topic of the communication. |
| message       | TEXT         | NONE                              | NO       | None              | Detailed content of the communication. |
| status        | ENUM('sent', 'received', 'read') | NONE      | NO       | 'sent'           | Current status of the communication (e.g., sent, received, read). |
| created_at    | DATETIME     | NONE                              | NO       | CURRENT_TIMESTAMP | Timestamp when the record was created. |
| updated_at    | DATETIME     | NONE                              | YES      | CURRENT_TIMESTAMP | Timestamp when the record was last updated. |

- **New Addition**: This table will record communications between users.
- **Key Connections**:
  - `from_user_id` and `to_user_id` (Foreign Keys): Link to `Users` (UserID) to identify the sender and receiver of the communication.
  - This table can also be linked to `MaintenanceRequests` (request_id) if a particular communication is regarding a specific maintenance request.

### Data Flow and Interactions

- **Communication Records**:
  - Any communication between tenants and landlords or between landlords and service providers can be logged in the `CommunicationRecords` table.
  - This provides a transparent and traceable history of interactions, which can be critical for dispute resolution or service quality tracking.

### Extensibility

- This database structure allows for future expansions, such as adding a table for `ServiceProviders` or `MaintenanceWorkers` if you decide to track external service providers or in-house maintenance staff.
- Additional features, like rating systems for maintenance services or automated notifications for maintenance updates, can be integrated using these tables as a foundation.


# New OAuth Tokens Table

| Field Name     | Data Type    | Description                            | Example           |
|----------------|--------------|----------------------------------------|-------------------|
| token_id       | INT          | Unique identifier for each token record| 6006              |
| user_id        | INT          | Links to `User` table’s `user_id`      | 1001              |
| access_token   | TEXT         | The OAuth access token                 | xYzabc123...      |
| refresh_token  | TEXT         | The OAuth refresh token                | abc123xYz...      |
| expires_in     | DATETIME     | Expiry date and time of access token   | 2024-02-01 12:00:00|
| provider       | VARCHAR(50)  | Name of the OAuth provider             | Google            |

## Notes

- The integration of OAuth requires careful handling of sensitive data, such as tokens.
- Storing OAuth-related data should comply with security standards and privacy regulations.
- The schema can be adjusted or extended based on specific OAuth providers' requirements or system needs.

## Extensibility

- The schema allows for adding more fields related to OAuth or other authentication methods in the future.
- It supports integration with multiple OAuth providers.

