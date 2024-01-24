# Data Dictionary

The data dictionary details the structure of data for key system components: "users", "properties", "transactions", and "leases". It's crucial for database design, API development, and data communication between the front and back ends.

# Data Dictionary for User Table

This data dictionary describes the structure of the `User` table in the rental management system. It includes details on each field, such as data type, description, and examples.

## Table Structure

| Field Name         | Data Type      | Description                                           | Example                |
|--------------------|----------------|-------------------------------------------------------|------------------------|
| user_id            | INT            | Unique identifier for each user                       | 1001                   |
| username           | VARCHAR(50)    | Username chosen by the user                           | johndoe                |
| password_hash      | VARCHAR(255)   | Encrypted password for the user account               | 5f4dcc3b5aa765d61...   |
| email              | VARCHAR(100)   | User's email address                                  | user@example.com       |
| role               | ENUM('tenant', 'admin') | User role in the system                  | tenant                 |
| created_at         | DATETIME       | Timestamp when the account was created                | 2024-01-01 12:00:00    |
| updated_at         | DATETIME       | Timestamp when the account was last updated           | 2024-01-02 12:00:00    |
| first_name         | VARCHAR(50)    | The first name of the user                            | John                   |
| last_name          | VARCHAR(50)    | The last name of the user                             | Doe                    |
| street_number      | VARCHAR(10)    | The street number of the user's address               | 123                    |
| street_name        | VARCHAR(100)   | The street name of the user's address                 | Main Street            |
| city_name          | VARCHAR(50)    | The city of the user's address                        | Anytown                |
| postcode           | VARCHAR(10)    | The postal code of the user's address                 | 12345                  |
| province           | VARCHAR(50)    | The province or state of the user's address           | StateName              |
| phone_number       | VARCHAR(15)    | Contact phone number of the user                      | +1234567890            |
| profile_picture_url| VARCHAR(255)   | URL to the user's profile picture                     | https://example.com/images/user1.jpg |
| date_of_birth      | DATE           | The user's date of birth                              | 1990-01-01             |
| emergency_contact  | VARCHAR(100)   | Emergency contact details (name and phone number)     | Jane Doe, +1234567891  |
| national_id        | VARCHAR(20)    | National identification number for verification       | AB1234567              |
| employer_info      | VARCHAR(100)   | Employer name and phone number                        | College, +1234567891   |
| bank_info          | VARCHAR(100)   | Bank Name and account number                          | Scotial, 12345567890   |
| reference_url      | VARCHAR(100)   | A reference letter from employer or mentor            | https://example.com/   |
| is_verified        | BOOLEAN        | Indicates whether the user's identity has been verified | TRUE/FALSE           |

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



## Properties

| Field Name      | Data Type                | Description                    | Example            |
| --------------- | ------------------------ | ------------------------------ | ------------------ |
| property_id     | INT                      | Unique property identifier     | 2002               |
| owner_user_id   | INT                      | User ID of property owner      | 1001               |
| address         | VARCHAR(255)             | Property address               | 123 Main St        |
| number_of_units | INT                      | Number of units                | 10                 |
| created_at      | DATETIME                 | Property record creation time  | 2024-01-01 12:00:00|
| updated_at      | DATETIME                 | Property record update time    | 2024-01-02 12:00:00|


## Transactions

This updated section of the data dictionary includes additional fields to represent the parties involved in each transaction. This is important for clarity and accountability in transaction records.

| Field Name       | Data Type            | Description                                | Example            |
| ---------------- | -------------------- | ------------------------------------------ | ------------------ |
| transaction_id   | INT                  | Unique transaction identifier              | 3003               |
| lease_id         | INT                  | ID of associated lease                     | 4004               |
| payer_user_id    | INT                  | User ID of the party making the payment    | 1001               |
| payee_user_id    | INT                  | User ID of the party receiving the payment | 1002               |
| amount           | DECIMAL(10, 2)       | Transaction amount                         | 1200.00            |
| timestamp        | DATETIME             | Transaction time                           | 2024-01-03 15:30:00|
| type             | ENUM('rent', 'deposit') | Type of transaction (Rent or Deposit) | rent               |


## Leases

| Field Name      | Data Type                | Description                    | Example            |
| --------------- | ------------------------ | ------------------------------ | ------------------ |
| lease_id        | INT                      | Unique lease identifier        | 4004               |
| property_id     | INT                      | Property ID involved in lease  | 2002               |
| tenant_user_id  | INT                      | Tenant user ID in lease        | 1001               |
| start_date      | DATE                     | Lease start date               | 2024-02-01         |
| end_date        | DATE                     | Lease end date                 | 2025-02-01         |
| rent_amount     | DECIMAL(10, 2)           | Monthly rent amount            | 1200.00            |
| created_at      | DATETIME                 | Lease record creation time     | 2024-01-01 12:00:00|
| updated_at      | DATETIME                 | Lease record update time       | 2024-01-02 12:00:00|

---

This format ensures clear and consistent documentation, which is adaptable for future modifications or expansions in the system.