module.exports = {
    development: {
        database: {
            host: '127.0.0.1',
            port: 3306,
            name: 'db_web_store',
            dialect: 'mysql',
            user: 'root',
            password: 'CityPlace15971'
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}
