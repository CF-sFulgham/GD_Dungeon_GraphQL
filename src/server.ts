import express from 'express';
import { SERVER_PORT } from './constants';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (_, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});