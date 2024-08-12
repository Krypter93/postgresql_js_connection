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

        // Insert operations
        await client.query('INSERT INTO sales (product_name, quantity_sold, sale_date, revenue) VALUES ($1, $2, $3, $4)', ['Motherboard', 100, '2022-01-01', 1000])

        await client.query('INSERT INTO sales (product_name, quantity_sold, sale_date, revenue) VALUES ($1, $2, $3, $4)', ['CPU', 200, '2022-01-02', 1500])

        await client.query('INSERT INTO sales (product_name, quantity_sold, sale_date, revenue) VALUES ($1, $2, $3, $4)', ['GPU', 1000, '2023-12-31', 2000])

        await client.query('INSERT INTO sales (product_name, quantity_sold, sale_date, revenue) VALUES ($1, $2, $3, $4)', ['RAM', 2500, '2022-05-11', 3500])

        await client.query('INSERT INTO sales (product_name, quantity_sold, sale_date, revenue) VALUES ($1, $2, $3, $4)', ['SSD', 1800, '2024-08-11', 2570])

        // Query for data inserted
        const result2 = await client.query('SELECT * FROM sales')
        console.log(result2.rows);
        
        
    } catch (error) {
        console.log(`Error connecting to database: ${error}`);
    } finally {
        await client.end()
    }
}

OperationsToDatabase()




