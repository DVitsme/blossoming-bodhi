import express from 'express';
import cors from 'cors';
import fs from 'fs';
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
fs.readdirSync('./routes').map((r) =>
  app.use('/api', require(`./routes/${r}`))
);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
