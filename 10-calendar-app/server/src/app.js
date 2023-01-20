import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';

const app = express();

// Middlewares
app.use( cors() );
app.use( express.static('public') );
app.use( express.json() );

// Routes
app.use('/api/auth', authRoutes);

export default app;