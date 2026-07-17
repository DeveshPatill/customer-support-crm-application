# Customer Support CRM System

A full-stack Customer Support Ticketing CRM application that allows users to create, manage, search, filter, and update customer support tickets.

The application provides a simple interface for handling customer issues with a React frontend, Node.js backend API, and MongoDB database.

---

## 🚀 Features

### Ticket Management
- Create new support tickets
- Auto-generated ticket ID
- Store customer name and email
- Add issue title and description
- Track ticket creation time

### Ticket Listing
- View all support tickets
- Display:
  - Ticket ID
  - Customer name
  - Subject
  - Status
  - Created date

### Search Functionality
- Search tickets by:
  - Customer name
  - Email
  - Ticket ID
  - Description

### Status Filtering
Filter tickets based on status:
- Open
- In Progress
- Closed

### Ticket Details & Updates
- View complete ticket information
- Update ticket status
- Add notes/comments
- Track ticket progress

### Authentication
- User registration
- Login system
- JWT-based authentication

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- CSS
- React Icons
- Axios

### Backend
- Node.js
- Express.js
- JWT Authentication
- REST API

### Database
- MongoDB
- Mongoose ODM

### Tools
- Git & GitHub
- Postman for API testing
- VS Code

---

## 📂 Project Structure
Customer-Support-CRM/

│
├── client/
│ └── client/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ └── App.jsx
│ └── package.json
│
├── server/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│ └── package.json
│
└── README.md


---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/DeveshPatill/customer-support-crm-application.git


Navigate into project:

cd Customer-Support-CRM
Backend Setup

Go to server folder:

cd server

Install dependencies:

npm install

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start backend server:

npm run dev

Backend will run on:

http://localhost:5000
Frontend Setup

Open another terminal:

cd client/client

Install dependencies:

npm install

Start React application:

npm run dev

Frontend will run on:

http://localhost:5173
🔗 API Endpoints
Authentication
Register User
POST /api/auth/register

Body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
Login User
POST /api/auth/login

Body:

{
  "email": "john@example.com",
  "password": "password123"
}
Ticket APIs
Create Ticket
POST /api/tickets

Request:

{
  "customer_name": "John",
  "customer_email": "john@gmail.com",
  "subject": "Payment issue",
  "description": "Unable to complete payment"
}
Get All Tickets
GET /api/tickets

Optional filters:

GET /api/tickets?status=Open
GET /api/tickets?search=payment
Get Ticket Details
GET /api/tickets/:ticket_id
Update Ticket
PUT /api/tickets/:ticket_id

Request:

{
  "status": "Closed",
  "notes": "Issue resolved successfully"
}
Database Schema
Tickets Collection

Fields:

_id
ticket_id
customer_name
customer_email
subject
description
status
notes
createdAt
updatedAt
Future Improvements
Separate Admin and Customer dashboards
Email notifications
File attachments for tickets
Team assignment system
Ticket priority levels
Analytics dashboard
Deployment

Frontend:

Vercel / Render

Backend:

Render

Database:

MongoDB Atlas
Author

Devesh Patil

Full Stack Developer | AI Student

GitHub:
https://github.com/DeveshPatill