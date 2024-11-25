Omniplex Project
This repository contains the Omniplex project with enhanced features, including UI improvements, API integration, and deployment readiness.

Table of Contents
Project Overview
Features
Technologies Used
Setup and Run Instructions
Approach to the Tasks
Challenges Faced and Solutions
Acknowledgments
Project Overview
The Omniplex project has been enhanced to provide a refined user experience. The primary goals include:

Upgrading the UI of the login page to align with Claude.ai's minimalist and user-friendly design.
Integrating a public API from RapidAPI to add meaningful, dynamic functionality.
Features
Modern UI: Redesigned login page for an intuitive user experience.
API Integration: Added public API to fetch and display dynamic data.
Responsive Design: Ensures compatibility with different screen sizes.
Technologies Used
Frontend: ReactJS, Tailwind CSS
Backend: Node.js
Database: Firebase (Firestore, Authentication, and Storage)
APIs: Public APIs from RapidAPI
AI Tools: ChatGPT (for code review and optimization)
Setup and Run Instructions
Follow these steps to set up and run the project locally:

Prerequisites
Install Node.js (v18 or above).
Install npm (comes with Node.js).
Install Firebase CLI:
bash
Copy code
npm install -g firebase-tools
Clone the Repository
Clone the repository:
bash
Copy code
git clone https://github.com/SaniyaPathre/omniplex-UI_Saniya.git
Navigate into the project directory:
bash
Copy code
cd omniplex
Install Dependencies
Run the following command to install all required dependencies:

bash
Copy code
npm install
Set Up Firebase
Create a Firebase project on the Firebase Console.
Enable the following:
Authentication: Configure email/password authentication.
Firestore Database: Set up a Firestore database in test mode.
Storage: Enable Firebase Storage for user file uploads.
Update the firebaseConfig object in src/firebaseConfig.js with your Firebase project details:
javascript
Copy code
export const firebaseConfig = {
  apiKey: "<YOUR_API_KEY>",
  authDomain: "<YOUR_AUTH_DOMAIN>",
  projectId: "<YOUR_PROJECT_ID>",
  storageBucket: "<YOUR_STORAGE_BUCKET>",
  messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
  appId: "<YOUR_APP_ID>",
  measurementId: "<YOUR_MEASUREMENT_ID>",
};
Run the Project
Start the development server:

bash
Copy code
npm run dev
Visit http://localhost:3000 in your browser to access the application.

Approach to the Tasks
UI Enhancement
Objective: To make the login page visually appealing and intuitive, inspired by Claude.ai.
Implementation:
Used Tailwind CSS for responsive styling.
Focused on minimalist design with clear call-to-action buttons and smooth transitions.
API Integration
Objective: To fetch meaningful data dynamically using a public API.
Implementation:
Integrated a weather API from RapidAPI to display current weather data based on user location.
Used Axios for API requests.
Handled errors gracefully with appropriate loading indicators and messages.
AI Tools Used
ChatGPT:
Assisted in debugging errors and optimizing code.
Provided suggestions for better UI design patterns.
VS Code Extensions:
Leveraged tools like ESLint for linting and Prettier for code formatting.
Challenges Faced and Solutions
1. Error: Firebase Invalid API Key
Challenge: The app threw an "invalid API key" error when initializing Firebase.
Solution:
Rechecked the firebaseConfig values to ensure correctness.
Verified that the Firebase services (Auth, Firestore, Storage) were enabled.
2. UI Responsiveness
Challenge: Ensuring consistent styling across different devices.
Solution:
Used Tailwind CSS's utility classes for mobile-first design.
Tested the application on various screen sizes using browser developer tools.
3. API Rate Limiting
Challenge: API calls were blocked due to exceeding the free tier limits.
Solution:
Added caching for API responses using localStorage to minimize unnecessary calls.
4. Local Setup Issues
Challenge: Dependency mismatches caused errors during npm install.
Solution:
Updated the package.json to specify compatible versions.
Used the --legacy-peer-deps flag during installation.
