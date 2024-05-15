//server.js
const express = require('express');
const userRepository = require('./userRepository');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors()); // Apply CORS middleware

// User registration
app.post('/register', (req, res) => {
    const { username, password, fullname, email, phone_number, gender } = req.body;

    if (!username || !password || !fullname || !email || !phone_number || !gender) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate password length
    if (password.length < 6) {
        return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    // Store user information in the database using the repository
    userRepository.registerUser(username, password, fullname, email, phone_number, gender, (error, results) => {
        if (error) {
            console.error('Error registering user:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        console.log('User registered successfully:', {
            id: results.insertId,
            username,
            password: '********',
            fullname,
            email,
            phone_number,
            gender
        });

        res.status(200).json({ message: 'User registered successfully', user: { username, fullname, email, phone_number, gender } });
    });
});

// Route handler for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the backend of your application!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
