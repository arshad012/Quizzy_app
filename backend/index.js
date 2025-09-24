import { config } from "dotenv";
import express, { json } from "express";
import mongoose, { connect } from "mongoose";
import cors from "cors";
import cron from 'node-cron';
import path from 'path';

import { errorHandler } from "./utils/errorHandler.js";
import { assessmentsRouter, submissionsRouter, templateRouter, signupRouter, loginRouter } from "./routes/index.js";
import { checkSubmissions } from "./cron/index.js";

config();
const PORT = process.env.PORT || 5000;
const mongodb_url = process.env.MONGODB_URL;

if (!mongodb_url) {
    console.error('❌ MONGODB_URI is not defined in environment variables.');
    process.exit(1);
}

const app = express();
const _dirname = path.resolve();

// JSON body parsing
app.use(json());
app.use(cors());

// MongoDB connection

connect(mongodb_url)
    .then(() => {
        console.log('✅ Database connected')

        app.listen(PORT, () => {
            console.log(`🚀 app is running on port ${PORT}`);
        })
    })
    .catch((err) => {
        console.error('Database connection failed', err);
        process.exit(1);
    });

mongoose.connection.on('connected', () => {
    console.log('📡 Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
    console.error('⚠️ Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.warn('🔌 Mongoose disconnected');
});

app.use("/api/templates", templateRouter);
app.use("/api/assesments", assessmentsRouter)
app.use("/api/submissions", submissionsRouter)
app.use("/api/signup", signupRouter);
app.use("/api/login", loginRouter);

app.use(express.static(path.join(_dirname, 'frontend', 'dist')));

app.get('/', (_, res) => {
    res.json({ message: 'Quizzy app is up.' });
})

app.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname, 'frontend', 'dist', 'index.html'));
});

// cron.schedule('* * * * *', checkSubmissions);

app.use(errorHandler);