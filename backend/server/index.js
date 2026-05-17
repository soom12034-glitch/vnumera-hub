/* eslint-disable no-undef */
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/auth.js';
import softwareRoutes from './routes/software.js';
import configRoutes from './routes/config.js';
import uploadRoutes from './routes/upload.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/software', softwareRoutes);
app.use('/api/config', configRoutes);
app.use('/api/upload', uploadRoutes);

// Static uploads
app.use('/uploads', express.static(path.join(__dirname, '..', '..', 'uploads')));

// Static frontend (dist)
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
