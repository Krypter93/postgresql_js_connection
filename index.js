// TODO Operations with DB here
import 'dotenv/config'
import pg from 'pg'

const { Client } = pg
const client = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})

try {
    client.connect()
    console.log('Connected to DB')
} catch (error) {
    console.log(`Failed to connect to DB: ${error}`);
}