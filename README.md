# Marathon-X Website

**Live Site URL**: [Visit Marathon-X Web_app](https://marathon-x.web.app/)

## Features

- **User-Friendly Dashboard**: Manage marathon events, view registrations, and track participation seamlessly.
- **Secure Authentication**: Email-password-based login and Google login options ensure safe and easy access.
- **Dynamic Content**: Upcoming marathons, detailed marathon pages, and user-specific dashboards update dynamically.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices for a seamless user experience.
- **CRUD Operations with Toast Notifications**: Add, update, and delete marathon events with real-time feedback.
- **JWT Authentication**: Secure private routes and persistent user sessions.
- **Search and Sorting**: Server-side search functionality and sorting options for marathons.
- **Countdown Timer**: Interactive countdown on marathon detail pages.
- **Dark/Light Theme**: Toggle between dark and light modes for personalized user experience.
- **404 Page**: Informative and stylish error page for incorrect routes.

## How to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/marathon-management-system.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd marathon-management-system
   ```

3. **Install Dependencies**:
   - For Client:
     ```bash
     cd client
     npm install
     ```
   - For Server:
     ```bash
     cd server
     npm install
     ```

4. **Set Up Environment Variables**:
   - Create `.env` files in both `client` and `server` directories.
   - Add Firebase config and MongoDB credentials as needed.

5. **Run the Application**:
   - Start the Client:
     ```bash
     npm start
     ```
   - Start the Server:
     ```bash
     npm run server
     ```

6. **Open in Browser**:
   Visit `http://localhost:3000` to view the application.

## Technology Stack

- **Frontend**: React, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Authentication, JWT
- **Hosting**: Firebase (Frontend), Vercel (Backend)

## Additional Information

- This project is designed for practical experience in full-stack application development.
- Implements real-world features like secure authentication, responsive design, and CRUD operations.
- Aimed to provide users with an intuitive platform to organize and participate in marathons.


