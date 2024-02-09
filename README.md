# Quebec Landlord Management System (QLMS)

Welcome to the Quebec Landlord Management System (QLMS) project repository. QLMS is a comprehensive platform designed to simplify the management of rental properties, leases, and user interactions for both tenants and property managers. It provides an interactive, real-time interface with robust financial processing capabilities and detailed property oversight tools.

## Team Members

- **Cao, Lisi**: Full-Stack Developer & DevOps
- **Li, Zhi**: Frontend Developer
- **Tang, Shixin**: Backend Developer & Database Administrator

## Technologies and Features

QLMS leverages a modern technology stack and includes several key features:

- **Front-End**: React.js with TypeScript for a dynamic and responsive user interface.
- **Back-End**: Node.js with Express for efficient server-side processing.
- **Database**: Azure MySQL for reliable data storage and management.
- **Authentication**: OAuth for secure user authentication.
- **Deployment**: Docker for containerization, GitHub for source control, and Azure (Client: [Azure Static Web Apps](https://black-sky-08b5f0d10.4.azurestaticapps.net), Server: [Azure Web App](https://qlms-server.azurewebsites.net)) for hosting.
- **API Documentation**: Available on Postman, detailing all RESTful endpoints.
- **Project Management**: Managed using GitHub Projects with a Kanban approach.

### Special Features

- Multi-tenant system architecture, allowing for efficient management of multiple properties and tenants.
- Automated lease management with renewal notifications, ensuring timely communications.
- Real-time transaction processing for up-to-date financial data.
- Personalized landlord and tenant portals for tailored user experiences.

## API Documentation

QLMS's API documentation is hosted on Postman, providing detailed information on available endpoints, such as user authentication (`/login`, `/register`), property management (`/properties`, `/properties/:id`), and lease operations (`/leases`, `/leases/:id`).
[API docs](https://documenter.getpostman.com/view/30166269/2s9YyzdJSs)

## Project Management and Contribution

### Branching Strategy

- **`main`**: Stable production builds.
- **`develop`**: Integration branch for new features and bug fixes.
- **`feature/*`**: Branches for specific features or enhancements.

### Issue-Driven Development

We employ an issue-driven development process, managed through GitHub Projects. Contributors can pick issues from the "Ready to Pick" column, work on them, and submit pull requests to the corresponding feature branch.

## Milestones and Timeline

The project is divided into key milestones, each focusing on a specific phase of development, from environment setup and scaffolding to testing, documentation, and deployment.

## Contributing

To contribute, please follow these steps:

1. Pick an issue from the "Ready to Pick" column in our GitHub Project.
2. Assign the issue to yourself and move it to "In Progress".
3. Create a branch from the appropriate feature branch for your issue.
4. Submit a pull request back to the parent feature branch after completion and testing.

For more details on contributing, please refer to the project's contribution guidelines.

## Deployment

The QLMS client and server are deployed at:

- Client: [Azure Static Web Apps](https://black-sky-08b5f0d10.4.azurestaticapps.net)
- Server: [Azure Web App](https://qlms-server.azurewebsites.net)
- 
The database is hosted on Azure MySQL, and storage is managed through Azure Blob.

<img width="1665" alt="landlord-property-list" src="https://github.com/lisiCAO/QLMS/assets/137085653/9a6774d9-46f8-45be-bd8c-5b9e9ac7ba7f">
<img width="1665" alt="landlord-property-create" src="https://github.com/lisiCAO/QLMS/assets/137085653/8e56049d-bfae-4584-992b-7a612e596bad">
<img width="1665" alt="landlord-lease-list" src="https://github.com/lisiCAO/QLMS/assets/137085653/e690b2c3-d688-4c8b-8f52-8cf72fdcc0d1">
<img width="1665" alt="lease-create" src="https://github.com/lisiCAO/QLMS/assets/137085653/db537900-859d-4d7c-89de-c58362e1d567">
<img width="1665" alt="tenant-list" src="https://github.com/lisiCAO/QLMS/assets/137085653/45ca6e53-8e52-4680-9041-53d0cc3531c9">
<img width="1665" alt="profile" src="https://github.com/lisiCAO/QLMS/assets/137085653/e1132db1-c545-4461-9c63-5b2d7b673e3d">
<img width="1320" alt="auth" src="https://github.com/lisiCAO/QLMS/assets/137085653/834b2cee-0ed3-47f5-b84e-a27089272dd2">
<img width="1719" alt="QLMS-team" src="https://github.com/lisiCAO/QLMS/assets/137085653/d46085da-cef4-422d-89fa-6954062cd504">


