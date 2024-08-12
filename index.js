// TODO Operations with DB here
import 'dotenv/config'
import pg from 'pg'

const { Client } = pg

const OperationsToDatabase = async () => {
    const client = new Client({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME
    })

    try {
        await client.connect()
        console.log('Connected to database');
        
        // Test Query
        const result = await client.query('SELECT 1 + 1 AS solution')
        console.log(result.rows);
        
    } catch (error) {
        console.log(`Error connecting to database: ${error}`);
    } finally {
        await client.end()
    }
}

OperationsToDatabase()




