import express from 'express';
import cors from 'cors';
import fs from 'fs';
import mongoose from 'mongoose';
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('DB error:', err));

// middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(morgan('dev'));

// routes
fs.readdirSync('./routes').map((r) =>
  app.use('/api', require(`./routes/${r}`))
);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
