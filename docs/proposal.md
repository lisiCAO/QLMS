# Quebec Landlord Management System (QLMS) Proposal (QLMS)

## Project Title
Quebec Landlord Management System (QLMS) 

## Team Members
- **Cao, Lisi**: Full-Stack Developer & DevOps
- **Li, Zhi**: Frontend Developer
- **Tang, Shixin**: Backend Developer & Database Administrator

## Project Description
QLMS is envisioned as a comprehensive platform engineered to streamline the intricacies of managing rental properties, leases, and user interactions. Our application aims to furnish both tenants and property managers with an interactive, real-time interface for managing their operations. With robust financial processing capabilities, QLMS also offers a suite of tools for detailed property oversight, ensuring efficiency and tenant satisfaction. 

## Technologies and Features

- **Technologies Used**:
  - **Front-End**: React.js
  - **Back-End**: Node.js with Express
  - **Database**: MySQL
  - **Authentication**: OAuth
  - **Deployment**: Docker, GitHub, Azure
  - **Project-Management**: GitHub Project - KanBan

- **Special Features**:
  - Multi-tenant system architecture
  - Automated lease management with renewal notifications
  - Real-time transaction processing
  - Personalized landlord portal
  - Role-based access control system

- **Additional Libraries**:
  - Sequelize ORM / Sequelize Cli
  - Axios
  - React Bootstrap / tailwindcss CSS
  - dotenv
  - Passport
  - bcryptjs
  - cors

- **Challenges Beyond Classroom**:
  - Payment gateway integration
  - Real-time notifications system
  - Secure document management
  - Project management

## URL Endpoints
Outlined below are the proposed RESTful API endpoints:

- **Authentication**:
  - `/login` - POST: Authenticate users
  - `/register` - POST: Register new users

- **Users & Tenants**:
  - `/users` - GET: Retrieve user list
  - `/users/:id` - GET/PUT/DELETE: User-specific operations

- **Properties**:
  - `/properties` - GET/POST: Property listings and creation
  - `/properties/:id` - GET/PUT/DELETE: Property-specific operations

- **Transactions**:
  - `/transactions` - GET/POST: Transaction records and creation
  - `/transactions/:id` - GET/PUT: Transaction-specific operations

- **Leases**:
  - `/leases` - GET/POST: Lease agreements and initiation
  - `/leases/:id` - GET/PUT/DELETE: Lease-specific operations

  ## Optional Future Enhancement: Cross-Search Endpoint

  In the future, we can consider adding a cross-search endpoint to enhance the search functionality of the application. This endpoint would allow users to search for properties based on multiple criteria, such as location, price range, number of bedrooms, and amenities.

  The proposed endpoint could be:

  - `/properties/search` - POST: Search for properties based on specified criteria

  Detailed API documentation will be provided.
  
## Database Design
The database is designed to be simple yet scalable, incorporating:

- **Users Table**: User credentials and roles
- **Properties Table**: Property details and ownership
- **Leases Table**: Records of lease agreements
- **Transactions Table**: Financial transactions related to leases
- ***Image Table***: This table stores images related to the rental properties. 
- ***LegalDoc Table***: This table stores legal documents related to the rental properties.

A detailed ERD will be provided to visualize the database schema.

## Timeline (12 Days)
- **Day 1-2**: Environment setup by Lisi Cao
- **Day 3-8**: Backend and database scaffolding by Shixin Tang
- **Day 3-8**: Frontend development kickoff by Zhi Li
- **Day 6-9**: Testing,documentation, CI/CD 
- **Day 9**: Integration of frontend and backend
- **Day 10-11**: Deployment preparation
- **Day 12**: Final review and launch

## Conclusion
This proposal serves as a dynamic blueprint for the QLMS project. It outlines our technical approach, features, and the project's developmental trajectory. Our aim is to establish a robust platform that enhances property management through technology.

---

For the ERD, Figma designs, and API documentation, these will be detailed in supplemental documents and shared accordingly. Please note that while this proposal provides a comprehensive overview, it remains flexible for adjustments as the project progresses. 
