const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 20,
    host: 'localhost',
    user: 'root',  // Consider using a non-root user for application purposes
    password: 'HunterNC',  // Ensure to secure your real password
    database: 'medical_database'
});

pool.query('SELECT 1 + 1 AS solution', (error, results) => {
    if (error) {
        console.error('Error executing query:', error);
    } else {
        console.log('The solution is:', results[0].solution); // Should log: The solution is: 2
    }
    pool.end(); // Close the pool
});


function registerUser(username, password, fullname, phone_number, gender, callback) {
    pool.query(
        'INSERT INTO users (username, password, fullname, email, phone_number, gender) VALUES (?, ?, ?, ?, ?, ?)',
        [username, password, fullname, phone_number, gender],
        (error, results) => {
            if (error) {
                console.error('Error registering user:', error);
                return callback(error);
            }
            callback(null, results);
        }
    );
}

module.exports = { registerUser };
