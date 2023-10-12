const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configure MongoDB using Mongoose
mongoose.connect("mongodb+srv://akhil:PRINCE1234#$@akhilscluster.yfpeewp.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Server is connected");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });


// Middleware
app.use(bodyParser.json());
app.use(cors());

// Define your API routes
const dsaTopicsRoutes = require('./routes/dsaTopicsRoutes');
app.use('/api/dsa-topics', dsaTopicsRoutes);

// User Authentication Routes (if implemented)
// const authRoutes = require('./auth/authRoutes');
// app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
