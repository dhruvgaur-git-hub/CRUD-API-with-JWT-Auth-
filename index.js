const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

const dbURI = process.env.MONGO_URI ||'mongodb://127.0.0.1:27017/express-app-db';

const productRoute = require('./Routes/productRoute'); 
const authRoute = require('./Routes/auth.routes');

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);

mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/products", productRoute);
