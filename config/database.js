const fs = require('fs');

module.exports = {
    development: {
        dialect: 'sqlite',
        storage: 'development.sqlite'
    },
    test: {
        dialect: 'sqlite',
        storage: 'test.sqlite'
    },
    production: {
        dialect: process.env.DB_DIALECT || 'sqlite',
        storage: 'production.sqlite',
        host: process.env.DB_HOSTNAME,
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    }
};
