
# Auth based - Dashboard
-built using react

# Features 
- User Login & Logout
- Admin and User roles
- Protected routes
- Auth using Context API
- localStorage persistence

# Teck-Stack
- React
- react-router-dom
- Formik & Yup
- Tailwindcss


# Folder-Structure 

src/
│
├── assets/
│   └── images/
│
├── components/
│   |── Loading.jsx
│   
│   
│
├── contexts/
│   └── AuthContext.jsx
│   └── AuthProvider.jsx
│
├── constants/
│   └── data.js
│
├── hooks/
│   └── useAuth.js
│
├── pages/
│   ├── Login.jsx
│   ├── AdminPage.jsx
│   ├── UserPage.jsx
│   ├── Unauthorized.jsx
│   └── PageNotFound.jsx
│
├── routerProtectors/
│   └── ProtectedRoute.jsx
│  
├── App.jsx
└── main.jsx
