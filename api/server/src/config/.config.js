require('dotenv').config();

module.exports =

    {
        "development": {
            "username": "tester",
            "password": "tester123",
            "database": "database_development",
            "host": "127.0.0.1",
            "dialect": "postgres"
        },
        "test": {
            "username": "tester",
            "password": "tester123",
            "database": "database_test",
            "host": "127.0.0.1",
            "dialect": "postgres"
        },
        "production": {
            "username": process.env.DB_USER,
            "password": process.env.DB_PASS,
            "database": process.env.DB_NAME,
            "host": process.env.DB_HOST,
            "dialect": "postgres"
        }
    }