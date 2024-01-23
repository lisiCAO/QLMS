Got it! I'll adjust the data dictionary to use lowercase field names with underscores and reformat it into Markdown. This format is often used in database schema design for readability and consistency. Here's the updated Markdown documentation:

---

# Data Dictionary

The data dictionary details the structure of data for key system components: "users", "properties", "transactions", and "leases". It's crucial for database design, API development, and data communication between the front and back ends.

## Users

| Field Name      | Data Type                | Description                    | Example            |
| --------------- | ------------------------ | ------------------------------ | ------------------ |
| user_id         | INT                      | Unique user identifier         | 1001               |
| username        | VARCHAR(50)              | Username                       | johndoe            |
| password_hash   | VARCHAR(255)             | Encrypted password             | 5f4dcc3b5aa765d61...|
| email           | VARCHAR(100)             | User's email address           | user@example.com   |
| role            | ENUM('tenant', 'admin')  | User role (Tenant or Admin)    | tenant             |
| created_at      | DATETIME                 | Account creation time          | 2024-01-01 12:00:00|
| updated_at      | DATETIME                 | Account update time            | 2024-01-02 12:00:00|

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