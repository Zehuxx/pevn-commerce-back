const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pevn_commerces', 'postgres', 'postgres', {
    host: 'db', //hace referencia al service que  se definio en docker-compose.yml
    dialect: 'postgres',
    port: 5432,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    //logging: false
});


// connect to DB
async function connect() {
    console.log('Checking database connection...');
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
}

module.exports = sequelize;