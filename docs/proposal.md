# Integrated Property Management Solution (IPMS)

## Project Title
Integrated Property Management Solution (IPMS)

## Team Members
- **Cao, Lisi**: Full-Stack Developer & DevOps
- **Li, Zhi**: Frontend Developer
- **Tang, Shixin**: Backend Developer & Database Administrator

## Project Description
IPMS is envisioned as a comprehensive platform engineered to streamline the intricacies of managing rental properties, leases, and user interactions. Our application aims to furnish both tenants and property managers with an interactive, real-time interface for managing their operations. With robust financial processing capabilities, IPMS also offers a suite of tools for detailed property oversight, ensuring efficiency and tenant satisfaction. 

## Technologies and Features

- **Technologies Used**:
  - **Front-End**: React.js
  - **Back-End**: Node.js with Express
  - **Database**: MySQL
  - **Authentication**: JWT
  - **Deployment**: Docker, GitHub, Azure

- **Special Features**:
  - Multi-tenant system architecture
  - Automated lease management with renewal notifications
  - Real-time transaction processing
  - Personalized tenant portal
  - Role-based access control system

- **Additional Libraries**:
  - Sequelize ORM
  - Axios
  - React Bootstrap

- **Challenges Beyond Classroom**:
  - Payment gateway integration
  - Real-time notifications system
  - Secure document management

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

## Database Design
The database is designed to be simple yet scalable, incorporating:

- **Users Table**: User credentials and roles
- **Properties Table**: Property details and ownership
- **Leases Table**: Records of lease agreements
- **Transactions Table**: Financial transactions related to leases

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
This proposal serves as a dynamic blueprint for the IPMS project. It outlines our technical approach, features, and the project's developmental trajectory. Our aim is to establish a robust platform that enhances property management through technology.

---

For the ERD, Figma designs, and API documentation, these will be detailed in supplemental documents and shared accordingly. Please note that while this proposal provides a comprehensive overview, it remains flexible for adjustments as the project progresses. 
