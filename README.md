# 💅 BlushBay – Full Stack Beauty & Salon Management Platform
BlushBay is a full-stack web application designed to digitalize and simplify salon management.
It provides two dedicated portals — Admin and User — that help manage appointments, professionals, and payments with an intuitive interface.
Built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Razorpay integration, it ensures a secure, efficient, and user-friendly experience for both customers and salon owners.

## 🛠️ Tech Stack
Frontend: React.js, Tailwind CSS, Vite
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JSON Web Token (JWT)
Payment Gateway: Razorpay

## ✨ Key Features

## 👩‍🦰 User Portal
Create an account, log in securely, and manage your profile.
Browse salon services categorized under Hair, Skin, Makeup, Spa, etc.
Book, reschedule, or cancel appointments easily.
View upcoming and past bookings in your dashboard.
Make secure online payments through Razorpay or opt for cash payment.
Receive real-time appointment confirmations.

## 👩‍💼 Admin Portal
Dedicated dashboard to view total customers, bookings, and revenue.
Add, update, or remove salon professionals and services.
Monitor daily appointments, manage their status, and track payments.
Control stylist availability, pricing, and service categories.
Generate insights on performance and customer activity.

## 💳 Payment Integration
Integrated Razorpay for secure, real-time payments.
Supports multiple payment modes — cash and online.
Provides transaction safety with JWT authentication and validation.

## ⚙️ Project Setup
```
1️⃣ Clone the Repository
git clone https://github.com/mehak1408/blush.git
cd blush
```
## 2️⃣ Install Dependencies
```
cd frontend && npm install
cd ../backend && npm install
```
## 3️⃣ Setup Environment Variables
```
Create a .env file in both the backend and admin/frontend folders and include:
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
RAZORPAY_API_KEY=your_razorpay_api_key  
```
## 4️⃣ Run the Application
```
npm run dev
```
## 📂 Folder Structure & Explanation
```
blush/
├── admin/ # Admin portal built with React + Vite
│ ├── src/ # React source files
│ ├── public/ # Static assets for admin app
│ ├── package.json # Admin dependencies and scripts
│ └── vite.config.js # Vite configuration
│
├── backend/ # Backend server (Node + Express)
│ ├── config/ # Database connection and environment setup
│ ├── controllers/ # Logic for handling API requests (users, bookings, etc.)
│ ├── middleware/ # Authentication, authorization, and error handling
│ ├── models/ # MongoDB schemas (User, Booking, Professional)
│ ├── routes/ # API endpoints for users, services, and admin
│ ├── server.js # Main server file connecting Express and MongoDB
│ └── vercel.json # Deployment configuration for Vercel
│
├── frontend/ # User-facing web app
│ ├── src/ # Core React app structure
│ │ ├── assets/ # Images, icons, and static media
│ │ ├── components/ # Reusable UI components (Navbar, Footer, Cards)
│ │ ├── context/ # Global state management using Context API
│ │ ├── pages/ # Main pages (Home, Services, Booking, Profile)
│ │ ├── App.jsx # App routes and layout
│ │ ├── index.css # Global styles with Tailwind integration
│ │ └── main.jsx # Root file for React app
│ ├── public/ # Static files and metadata
│ ├── package.json # Frontend dependencies
│ └── vite.config.js # Vite setup for optimized build
│
├── .env # Environment variables (ignored in Git)
├── .gitignore # Files to be ignored by Git
├── README.md # Project documentation
└── package.json # Root configuration (if needed)
```
## 🚀 Deployment
Frontend and Admin deployed via Vercel.
Backend API hosted with MongoDB Atlas for database and Express.js for routing.

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repo, open issues, or submit pull requests.

## 🌟 Acknowledgements
Thanks to the developers of MongoDB, Express.js, React.js, Node.js, and Razorpay for their tools that made BlushBay possible.
