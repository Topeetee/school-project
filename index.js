const express = require('express');
const app = express();
require('dotenv').config();



app.use(express.json());
app.use( cookieParser());
app.use(express.json()); 
app.use(express.urlencoded({extended:false}))
// Define a route for the root URL
app.use(session({
    secret: 'your_secret_key_here',
    resave: false,
    saveUninitialized: true,
  }));

  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };
app.get('/', (req, res) => {
  res.send('Hello, this is a basic Express server!');
});
app.use("/api",authRoute)
// Start the server and listen on the specified port
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });